import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { type IMConfig, getGoogleMapsApiKey } from '../config'

// Importações do ArcGIS Maps SDK for JavaScript
import Point from 'esri/geometry/Point'
import Graphic from 'esri/Graphic'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import PictureMarkerSymbol from 'esri/symbols/PictureMarkerSymbol'
import Polygon from 'esri/geometry/Polygon'
import SimpleFillSymbol from 'esri/symbols/SimpleFillSymbol'

// Desestruturando hooks do React para uso
const { useState, useEffect, useRef } = React

// Importa a imagem de pegman fornecida pelo usuário (webpack resolve para URL)
// Usamos require para evitar necessidade de tipos de imagem.
const pegmanUrl: string = require('./Pegmankillfeed.png')
// Habilite para usar a API JS do Street View (panorama) com atualização em tempo real
const ENABLE_STREETVIEW_API = true
// Tipagem leve para google
declare const google: any

 

// Interface removida pois não estava sendo utilizada

const Widget = (props: AllWidgetProps<IMConfig>) => {
  // Referências para objetos do ArcGIS que não devem acionar re-renderizações
  const graphicsLayerRef = useRef<GraphicsLayer>(null)

  // Gerenciamento de estado do componente
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>(null)
  const [clickedCoordinates, setClickedCoordinates] = useState<{lat: number, lng: number} | null>(null)
  const [embedUrl, setEmbedUrl] = useState<string | null>(null)
  // Suporte opcional ao StreetViewPanorama
  const streetViewContainerRef = useRef<HTMLDivElement>(null)
  const streetViewPanoramaRef = useRef<any>(null)
  const [lastHeading, setLastHeading] = useState<number>(0)

  // Função para gerar URL do Street View embed
  const generateEmbedUrl = (lat: number, lng: number): string => {
    const apiKey = getGoogleMapsApiKey()
    const baseUrl = 'https://www.google.com/maps/embed/v1/streetview'
    const params = new URLSearchParams({
      key: apiKey,
      location: `${lat},${lng}`,
      heading: '0',
      pitch: '0',
      fov: '90'
    })
    return `${baseUrl}?${params.toString()}`
  }

  // Carrega Google Maps JS API sob demanda (somente se habilitado)
  const loadGoogleMapsApi = async (): Promise<void> => {
    if (!ENABLE_STREETVIEW_API) return
    const apiKey = getGoogleMapsApiKey()
    if (!apiKey || apiKey === 'SUA_CHAVE_DE_API_AQUI') return
    if ((window as any)?.google?.maps) return
    await new Promise<void>((resolve, reject) => {
      const existing = document.querySelector('script[data-gmaps-panorama]')
      if (existing) {
        existing.addEventListener('load', () => { resolve() })
        existing.addEventListener('error', () => { reject(new Error('Falha ao carregar Google Maps API')) })
        return
      }
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
      script.async = true
      script.defer = true
      script.setAttribute('data-gmaps-panorama', 'true')
      script.onload = () => { 
        try { console.info('[SV] Google JS API carregada. key_suffix=', apiKey.slice(-6)) } catch { /* noop */ }
        resolve() 
      }
      script.onerror = () => { 
        try { console.error('[SV] Erro ao carregar Google JS API. key_suffix=', apiKey.slice(-6)) } catch { /* noop */ }
        reject(new Error('Falha ao carregar Google Maps API')) 
      }
      document.head.appendChild(script)
    })
  }

  

  // Hook para inicializar a camada de gráficos no mapa ArcGIS
  useEffect(() => {
    if (jimuMapView && !graphicsLayerRef.current) {
      const layer = new GraphicsLayer({ id: `streetview_marker_layer_${props.id}` })
      graphicsLayerRef.current = layer
      jimuMapView.view.map.add(layer)
    }
  }, [jimuMapView, props.id])

  // Calcula um ponto destino dado lat/lng, azimute (graus) e distância (m)
  const computeDestination = (lat: number, lng: number, bearingDeg: number, distanceMeters: number): { lat: number, lng: number } => {
    const R = 6371000
    const brng = (bearingDeg * Math.PI) / 180
    const lat1 = (lat * Math.PI) / 180
    const lon1 = (lng * Math.PI) / 180
    const lat2 = Math.asin(Math.sin(lat1) * Math.cos(distanceMeters / R) + Math.cos(lat1) * Math.sin(distanceMeters / R) * Math.cos(brng))
    const lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(distanceMeters / R) * Math.cos(lat1), Math.cos(distanceMeters / R) - Math.sin(lat1) * Math.sin(lat2))
    return { lat: (lat2 * 180) / Math.PI, lng: (lon2 * 180) / Math.PI }
  }

  // Gera pontos da "fatia" do farol (setor) a partir do centro e heading
  const buildSectorRing = (centerLat: number, centerLng: number, headingDeg: number, fovDeg: number, radiusMeters: number): number[][] => {
    const start = headingDeg - fovDeg / 2
    const end = headingDeg + fovDeg / 2
    const step = Math.max(5, Math.floor(fovDeg / 12)) // ~12 segmentos
    const ring: number[][] = []
    // começa no centro
    ring.push([centerLng, centerLat])
    for (let a = start; a <= end; a += step) {
      const dest = computeDestination(centerLat, centerLng, a, radiusMeters)
      ring.push([dest.lng, dest.lat])
    }
    // garante o último ponto exatamente em 'end'
    const destEnd = computeDestination(centerLat, centerLng, end, radiusMeters)
    ring.push([destEnd.lng, destEnd.lat])
    // fecha no centro
    ring.push([centerLng, centerLat])
    return ring
  }

  // Função para atualizar o marcador no mapa ArcGIS (e o farol)
  const updateArcGISMarker = (location: {lat: number, lng: number}, heading?: number) => {
    if (!graphicsLayerRef.current) return

    // Remove todos os marcadores existentes
    graphicsLayerRef.current.removeAll()

    // Cria a geometria do ponto
    const point = new Point({
      longitude: location.lng,
      latitude: location.lat
    })

    // Cria o símbolo do marcador
    const symbol = new PictureMarkerSymbol({
      url: pegmanUrl,
      width: '18px', // mais estreito para manter proporção vertical
      height: '28px', // levemente mais alto para parecer humanoide
      yoffset: '14px' // base do boneco aponta para o ponto
    })

    // Cria o gráfico e o adiciona à camada
    const graphic = new Graphic({
      geometry: point,
      symbol: symbol
    })
    graphicsLayerRef.current.add(graphic)

    // Se tivermos heading (modo API), desenha um setor indicando direção
    const effectiveHeading = typeof heading === 'number' ? heading : lastHeading
    const beamLengthMeters = 45
    const fovDeg = 60
    const ring = buildSectorRing(location.lat, location.lng, effectiveHeading, fovDeg, beamLengthMeters)
    const sector = new Polygon({ rings: [ring], spatialReference: { wkid: 4326 } })
    const fillSymbol = new SimpleFillSymbol({
      color: [0, 0, 205, 0.5],
      outline: { color: [0, 0, 255, 0.9], width: 1.5 }
    })
    const sectorGraphic = new Graphic({ geometry: sector, symbol: fillSymbol })
    graphicsLayerRef.current.add(sectorGraphic)
  }

  // Hook para configurar a interação do mapa
  useEffect(() => {
    // Prossiga apenas se a visualização do mapa ArcGIS estiver pronta
    if (!jimuMapView) {
      return
    }

    // Adiciona um ouvinte de evento de clique ao mapa ArcGIS
    const clickHandler = jimuMapView.view.on('click', (event) => {
      const { latitude, longitude } = event.mapPoint

      // Caminho 1: iframe (padrão seguro)
      if (!ENABLE_STREETVIEW_API) {
        try { console.info('[SV] Modo iframe. Atualizando embed para', latitude, longitude) } catch { /* noop */ }
        setClickedCoordinates({ lat: latitude, lng: longitude })
        const url = generateEmbedUrl(latitude, longitude)
        setEmbedUrl(url)
        updateArcGISMarker({ lat: latitude, lng: longitude })
        return
      }

      // Caminho 2: API JS do Street View (em tempo real)
      ;(async () => {
        await loadGoogleMapsApi()
        if (!(window as any)?.google?.maps || !streetViewContainerRef.current) return

        // Cria panorama uma única vez
        if (!streetViewPanoramaRef.current) {
          const pano = new google.maps.StreetViewPanorama(streetViewContainerRef.current, {
            position: { lat: latitude, lng: longitude },
            pov: { heading: 0, pitch: 0 },
            visible: true
          })
          // Listener para mover o marcador conforme o usuário navega
          pano.addListener('position_changed', () => {
            const pos = pano.getPosition()
            if (pos) {
              try { console.debug('[SV] position_changed ->', pos.lat(), pos.lng()) } catch { /* noop */ }
              updateArcGISMarker({ lat: pos.lat(), lng: pos.lng() }, pano.getPov()?.heading ?? 0)
            }
          })
          // Listener para atualizar feixe quando muda o heading
          pano.addListener('pov_changed', () => {
            const pov = pano.getPov()
            setLastHeading(pov?.heading ?? 0)
            const pos = pano.getPosition()
            if (pos) {
              updateArcGISMarker({ lat: pos.lat(), lng: pos.lng() }, pov?.heading ?? 0)
            }
          })
          streetViewPanoramaRef.current = pano
        } else {
          streetViewPanoramaRef.current.setPosition({ lat: latitude, lng: longitude })
          streetViewPanoramaRef.current.setVisible(true)
        }

        // Sincroniza marcador inicialmente
        try { console.info('[SV] Modo API. Panorama setPosition', latitude, longitude) } catch { /* noop */ }
        updateArcGISMarker({ lat: latitude, lng: longitude }, streetViewPanoramaRef.current?.getPov()?.heading ?? 0)
      })()
    })

    // Função de limpeza para remover os ouvintes de eventos quando o componente for desmontado
    return () => {
      if (clickHandler) clickHandler.remove()
    }
  }, [jimuMapView]) // Re-executa este efeito se a visualização do mapa mudar

  

  

  // Função para ser chamada quando a visualização do mapa ArcGIS se torna ativa
  const onActiveViewChange = (jmv: JimuMapView) => {
    setJimuMapView(jmv)
  }

  



  // Renderização do componente
  return (
    <div className="widget-street-view jimu-widget">
      {/* Verifica se um widget de mapa foi selecionado */}
      {!props.useMapWidgetIds || props.useMapWidgetIds.length === 0 ? (
        <p>Por favor, configure um widget de mapa no painel de configurações.</p>
      ) : !getGoogleMapsApiKey() || getGoogleMapsApiKey() === 'SUA_CHAVE_DE_API_AQUI' ? (
        <p>⚠️ Chave de API não configurada. Edite o arquivo config.ts e configure sua chave de API do Google Maps.</p>
      ) : (
        <>
          {/* Componente que conecta ao widget de mapa do ArcGIS */}
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0] || ''}
            onActiveViewChange={onActiveViewChange}
          />
          
          {/* Street View: iframe (padrão) ou container da API (opcional) */}
          {!ENABLE_STREETVIEW_API && embedUrl ? (
            <iframe
              key={`streetview-${clickedCoordinates?.lat}-${clickedCoordinates?.lng}`}
              src={embedUrl}
              style={{ 
                border: 'none',
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                margin: '0px',
                padding: '0px',
                display: 'block',
                overflow: 'hidden',
                zIndex: 1
              }}
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Street View"
            />
          ) : ENABLE_STREETVIEW_API ? (
            <div
              ref={streetViewContainerRef}
              style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                margin: '0px',
                padding: '0px',
                zIndex: 1
              }}
            />
          ) : (
            <div className="placeholder">
              Clique no mapa para ver o Street View.
            </div>
          )}
          
          

        </>
      )}
    </div>
  )
}

export default Widget
