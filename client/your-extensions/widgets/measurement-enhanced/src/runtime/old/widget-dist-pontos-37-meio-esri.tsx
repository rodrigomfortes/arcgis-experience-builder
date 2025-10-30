import React, { useState, useEffect, useRef } from 'react'
import { AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'
import MeasureTools from './components/measure-tools' // Seu componente de ferramentas

const Widget = (props: AllWidgetProps<any>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const [activeButton, setActiveButton] = useState<'measureDistance' | 'measureArea' | ''>('')
  const [measurement, setMeasurement] = useState<string | null>(null)

  // Refs para SketchViewModel e gráficos
  const sketchRef = useRef<__esri.SketchViewModel | null>(null)
  const graphicsLayerRef = useRef<__esri.GraphicsLayer | null>(null)
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null)
  const GraphicRef = useRef<any>(null)
  const TextSymbolRef = useRef<any>(null)
  const PointRef = useRef<any>(null)
  const liveTextRef = useRef<__esri.Graphic | null>(null)
  const createHandlerRef = useRef<__esri.IHandle | null>(null)

  // Formata a distância
  const formatDistance = (meters: number) =>
    meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${meters.toFixed(2)} m`

  // Limpar gráficos e estados
  const clearAll = () => {
    graphicsLayerRef.current?.removeAll()
    setMeasurement(null)
    liveTextRef.current = null
    sketchRef.current?.cancel()
  }

  // useEffect que controla medição de distância com SketchViewModel
  useEffect(() => {
    if (!jimuMapView) return

    if (activeButton !== 'measureDistance') {
      clearAll()
      sketchRef.current = null
      createHandlerRef.current?.remove()
      createHandlerRef.current = null
      if (graphicsLayerRef.current && jimuMapView) {
        jimuMapView.view.map.remove(graphicsLayerRef.current)
        graphicsLayerRef.current = null
      }
      return
    }

    loadArcGISJSAPIModules([
      'esri/layers/GraphicsLayer',
      'esri/widgets/Sketch/SketchViewModel',
      'esri/geometry/geometryEngine',
      'esri/Graphic',
      'esri/symbols/TextSymbol',
      'esri/geometry/Point'
    ]).then(([GraphicsLayer, SketchViewModel, geometryEngine, Graphic, TextSymbol, Point]) => {
      geometryEngineRef.current = geometryEngine
      GraphicRef.current = Graphic
      TextSymbolRef.current = TextSymbol
      PointRef.current = Point

      if (!graphicsLayerRef.current) {
        const gl = new GraphicsLayer()
        jimuMapView.view.map.add(gl)
        graphicsLayerRef.current = gl
      }

      if (!sketchRef.current) {
        sketchRef.current = new SketchViewModel({
          view: jimuMapView.view,
          layer: graphicsLayerRef.current
        })
      }

      createHandlerRef.current?.remove()
      createHandlerRef.current = sketchRef.current.on('create', (event) => {
        const geom = event.graphic.geometry

        if (event.state === 'active' && geom.type === 'polyline') {
          const len = geometryEngine.geodesicLength(geom as __esri.Polyline, 'meters')
          setMeasurement(formatDistance(len))

          const path = (geom as __esri.Polyline).paths[0]
          if (!path || path.length < 2) return

          const last = path[path.length - 1]
          const midPoint = new PointRef.current({
            x: last[0],
            y: last[1],
            spatialReference: geom.spatialReference
          })

          const textSymbol = new TextSymbolRef.current({
            text: formatDistance(len),
            color: 'black',
            haloColor: 'white',
            haloSize: 1,
            font: { size: 12 },
            yoffset: -20
          })

          if (liveTextRef.current) graphicsLayerRef.current?.remove(liveTextRef.current)
          const label = new GraphicRef.current({
            geometry: midPoint,
            symbol: textSymbol
          })
          graphicsLayerRef.current?.add(label)
          liveTextRef.current = label
        }

        if (event.state === 'complete' && geom.type === 'polyline') {
          if (liveTextRef.current) {
            graphicsLayerRef.current?.remove(liveTextRef.current)
            liveTextRef.current = null
          }
          setMeasurement(null)

          const polyline = geom as __esri.Polyline
          const path = polyline.paths[0]
          if (!path) return

          for (let i = 0; i < path.length - 1; i++) {
            const pt1 = path[i]
            const pt2 = path[i + 1]

            const segment = {
              type: 'polyline',
              paths: [[pt1, pt2]],
              spatialReference: polyline.spatialReference
            } as __esri.Polyline

            const segmentLength = geometryEngine.geodesicLength(segment, 'meters')
            const midX = (pt1[0] + pt2[0]) / 2
            const midY = (pt1[1] + pt2[1]) / 2

            const midPoint = new PointRef.current({
              x: midX,
              y: midY,
              spatialReference: polyline.spatialReference
            })

            const segmentLabel = new TextSymbolRef.current({
              text: formatDistance(segmentLength),
              color: 'black',
              haloColor: 'white',
              haloSize: 1,
              font: { size: 11 },
              yoffset: -15
            })

            const labelGraphic = new GraphicRef.current({
              geometry: midPoint,
              symbol: segmentLabel
            })

            graphicsLayerRef.current?.add(labelGraphic)
          }
        }
      })

      sketchRef.current.create('polyline')
    })

    return () => {
      clearAll()
      createHandlerRef.current?.remove()
      createHandlerRef.current = null
      if (graphicsLayerRef.current && jimuMapView) {
        jimuMapView.view.map.remove(graphicsLayerRef.current)
        graphicsLayerRef.current = null
      }
      sketchRef.current = null
      geometryEngineRef.current = null
      GraphicRef.current = null
      TextSymbolRef.current = null
      PointRef.current = null
      liveTextRef.current = null
    }
  }, [jimuMapView, activeButton])

  // Iniciar nova medição
  const handleNewMeasurement = () => {
    sketchRef.current?.create('polyline')
  }

  // Limpar medições
  const handleClear = () => {
    clearAll()
    setMeasurement(null)
  }

  return (
    <div className="widget-starter jimu-widget d-flex flex-column" style={{ height: '100%' }}>
      {/* Barra de ferramentas padrão */}
      <MeasureTools
        activeButton={activeButton}
        activeTool={
          activeButton === 'measureDistance' ? 'distance' :
          activeButton === 'measureArea' ? 'area' : ''
        }
        onSelectTool={(btn) => {
          setActiveButton(btn.name)
          setMeasurement(null)
        }}
        onChangeUnit={(unit) => {
          console.log('Unidade alterada:', unit)
        }}
        onClear={handleClear}
      />

      <div style={{ flex: 1, position: 'relative' }}>
        {props.useMapWidgetIds?.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={setJimuMapView}
          />
        )}

        {activeButton === '' && (
          <div
            className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ pointerEvents: 'none' }}
          >
            <div className="text-muted text-center px-3">
              <div>Selecione uma ferramenta para iniciar a medição.</div>
            </div>
          </div>
        )}

        {/* Botões centralizados, verticais, largura total, bordas quadradas */}
        {activeButton === 'measureDistance' && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '0 12px',
              zIndex: 999,
              userSelect: 'none',
            }}
          >
            <button
              type="button"
              onClick={handleNewMeasurement}
              style={{
                backgroundColor: '#0079c1',
                border: 'none',
                color: 'white',
                borderRadius: 0,
                padding: '12px 0',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: 600,
                width: '100%',
                userSelect: 'none',
              }}
              aria-label="Nova Medição"
            >
              <span>Nova Medição</span>
            </button>
            <button
              type="button"
              onClick={handleClear}
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #0079c1',
                color: '#0079c1',
                borderRadius: 0,
                padding: '12px 0',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: 600,
                width: '100%',
                userSelect: 'none',
              }}
              aria-label="Limpar Medições"
            >
              <span>Limpar Medições</span>
            </button>
          </div>
        )}
      </div>

      {/* Resultado da medição */}
      {measurement && (
        <div className="bg-light border-top text-center p-2 mt-2">
          <strong>Resultado:</strong> {measurement}
        </div>
      )}
    </div>
  )
}

export default Widget
