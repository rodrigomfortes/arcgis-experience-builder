import React, { useState, useEffect, useRef } from 'react'
import { AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'
import MeasureTools from './components/measure-tools'

type SegmentDetail = {
  segmentNumber: number
  length: number
}

type MeasurementDetail = {
  id: string
  segments: SegmentDetail[]
  total: number
}

const Widget = (props: AllWidgetProps<any>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const [activeButton, setActiveButton] = useState<'measureDistance' | 'measureArea' | ''>('')
  const [measurementsDetails, setMeasurementsDetails] = useState<MeasurementDetail[]>([])
  const [selectedGraphicId, setSelectedGraphicId] = useState<string | null>(null)

  const sketchRef = useRef<__esri.SketchViewModel | null>(null)
  const graphicsLayerRef = useRef<__esri.GraphicsLayer | null>(null)
  const labelsLayerRef = useRef<__esri.GraphicsLayer | null>(null)
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null)
  const GraphicRef = useRef<typeof __esri.Graphic | null>(null)
  const TextSymbolRef = useRef<typeof __esri.TextSymbol | null>(null)
  const PointRef = useRef<typeof __esri.Point | null>(null)
  const SimpleLineSymbolRef = useRef<typeof __esri.SimpleLineSymbol | null>(null)

  const createHandlerRef = useRef<__esri.IHandle | null>(null)
  const updateHandlerRef = useRef<__esri.IHandle | null>(null)
  const deleteHandlerRef = useRef<__esri.IHandle | null>(null)
  const clickHandlerRef = useRef<__esri.IHandle | null>(null)

  const graphicsRef = useRef<__esri.Graphic[]>([])

  const formatDistance = (meters: number) =>
    meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${meters.toFixed(2)} m`

  const clearAll = () => {
    graphicsLayerRef.current?.removeAll()
    labelsLayerRef.current?.removeAll()
    graphicsRef.current = []
    setMeasurementsDetails([])
    setSelectedGraphicId(null)
  }

  const getGraphicId = (graphic: __esri.Graphic) => {
    return (graphic as any).uid || (graphic as any)._uid || `${Date.now()}-${Math.random()}`
  }

  const calculateSegments = (geometry: __esri.Polyline) => {
    const segments: SegmentDetail[] = []
    let total = 0
    const path = geometry.paths[0]
    if (!path || path.length < 2) return { segments, total }

    for (let i = 0; i < path.length - 1; i++) {
      const pt1 = path[i]
      const pt2 = path[i + 1]

      const segment = {
        type: 'polyline',
        paths: [[pt1, pt2]],
        spatialReference: geometry.spatialReference
      } as __esri.Polyline

      const segmentLength = geometryEngineRef.current!.geodesicLength(segment, 'meters')
      segments.push({ segmentNumber: i + 1, length: segmentLength })
      total += segmentLength
    }
    return { segments, total }
  }

  const updateMeasurementDetails = (graphic: __esri.Graphic) => {
    const id = getGraphicId(graphic)
    const { segments, total } = calculateSegments(graphic.geometry as __esri.Polyline)
    setMeasurementsDetails(prev => {
      const existingIndex = prev.findIndex(m => m.id === id)
      if (existingIndex >= 0) {
        const copy = [...prev]
        copy[existingIndex] = { id, segments, total }
        return copy
      }
      return [...prev, { id, segments, total }]
    })
  }

  const removeMeasurementDetails = (graphic: __esri.Graphic) => {
    const id = getGraphicId(graphic)
    setMeasurementsDetails(prev => prev.filter(m => m.id !== id))
    if (selectedGraphicId === id) {
      setSelectedGraphicId(null)
    }
  }

  const drawAllLabels = () => {
    if (!labelsLayerRef.current || !geometryEngineRef.current) return
    labelsLayerRef.current.removeAll()

    graphicsRef.current.forEach(graphic => {
      const geometry = graphic.geometry as __esri.Polyline
      const path = geometry.paths[0]
      if (!path || path.length < 2) return

      path.forEach(coord => {
        const vertexPoint = new PointRef.current({
          x: coord[0],
          y: coord[1],
          spatialReference: geometry.spatialReference
        })
        const vertexSymbol = {
          type: "simple-marker",
          style: "circle",
          color: "#AC8D43",
          size: 8,
          outline: { color: "white", width: 2 }
        }
        const vertexGraphic = new GraphicRef.current({
          geometry: vertexPoint,
          symbol: vertexSymbol
        })
        labelsLayerRef.current.add(vertexGraphic)
      })

      for (let i = 0; i < path.length - 1; i++) {
        const pt1 = path[i]
        const pt2 = path[i + 1]
        const segment = {
          type: 'polyline',
          paths: [[pt1, pt2]],
          spatialReference: geometry.spatialReference
        } as __esri.Polyline

        const segmentLength = geometryEngineRef.current.geodesicLength(segment, 'meters')
        const midX = (pt1[0] + pt2[0]) / 2
        const midY = (pt1[1] + pt2[1]) / 2

        const midPoint = new PointRef.current({
          x: midX,
          y: midY,
          spatialReference: geometry.spatialReference
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

        labelsLayerRef.current.add(labelGraphic)
      }
    })
  }

  // Atualiza símbolos para mostrar destaque na seleção
  const refreshGraphicsSymbols = () => {
    if (!graphicsLayerRef.current || !SimpleLineSymbolRef.current) return

    graphicsLayerRef.current.graphics.forEach(graphic => {
      const id = getGraphicId(graphic)
      const isSelected = id === selectedGraphicId
      graphic.symbol = {
        type: 'simple-line',
        color: isSelected ? '#0079c1' : 'white',
        width: 2
      }
    })
  }

  // Listener clique para seleção manual da linha
  const setupClickSelection = (view: __esri.MapView) => {
    // Remove handler antigo
    clickHandlerRef.current?.remove()

    clickHandlerRef.current = view.on('click', async (event) => {
      if (!graphicsLayerRef.current) return

      // Executa hitTest para detectar gráfico clicado
      const hit = await view.hitTest(event)
      if (!hit.results.length) {
        setSelectedGraphicId(null)
        refreshGraphicsSymbols()
        return
      }

      // Filtra para gráficos na camada de gráficos
      const graphicHit = hit.results.find(r => r.graphic && r.graphic.layer === graphicsLayerRef.current)
      if (!graphicHit) {
        setSelectedGraphicId(null)
        refreshGraphicsSymbols()
        return
      }

      // Seleciona o gráfico clicado
      const clickedGraphic = graphicHit.graphic
      const id = getGraphicId(clickedGraphic)
      setSelectedGraphicId(id)
      refreshGraphicsSymbols()
    })
  }

  // Listener para tecla Delete para apagar seleção
  useEffect(() => {
    if (!jimuMapView) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'Delete' || event.key === 'Backspace') && selectedGraphicId) {
        const graphicToDelete = graphicsRef.current.find(g => getGraphicId(g) === selectedGraphicId)
        if (!graphicToDelete) return

        graphicsLayerRef.current?.remove(graphicToDelete)
        graphicsRef.current = graphicsRef.current.filter(g => g !== graphicToDelete)
        removeMeasurementDetails(graphicToDelete)
        setSelectedGraphicId(null)
        drawAllLabels()
        setMeasurementsDetails(prev => [...prev])
        event.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedGraphicId, jimuMapView])

  // Inicialização do SketchViewModel, layers e eventos
  useEffect(() => {
    if (!jimuMapView) return

    if (activeButton !== 'measureDistance') {
      graphicsRef.current = []
      setMeasurementsDetails([])
      setSelectedGraphicId(null)
      clearAll()
      sketchRef.current = null
      createHandlerRef.current?.remove()
      updateHandlerRef.current?.remove()
      deleteHandlerRef.current?.remove()
      clickHandlerRef.current?.remove()
      createHandlerRef.current = null
      updateHandlerRef.current = null
      deleteHandlerRef.current = null
      clickHandlerRef.current = null

      if (graphicsLayerRef.current) {
        jimuMapView.view.map.remove(graphicsLayerRef.current)
        graphicsLayerRef.current = null
      }
      if (labelsLayerRef.current) {
        jimuMapView.view.map.remove(labelsLayerRef.current)
        labelsLayerRef.current = null
      }
      return
    }

    loadArcGISJSAPIModules([
      'esri/layers/GraphicsLayer',
      'esri/widgets/Sketch/SketchViewModel',
      'esri/geometry/geometryEngine',
      'esri/Graphic',
      'esri/symbols/TextSymbol',
      'esri/geometry/Point',
      'esri/symbols/SimpleLineSymbol'
    ]).then(([GraphicsLayer, SketchViewModel, geometryEngine, Graphic, TextSymbol, Point, SimpleLineSymbol]) => {
      geometryEngineRef.current = geometryEngine
      GraphicRef.current = Graphic
      TextSymbolRef.current = TextSymbol
      PointRef.current = Point
      SimpleLineSymbolRef.current = SimpleLineSymbol

      if (!graphicsLayerRef.current) {
        const gl = new GraphicsLayer()
        jimuMapView.view.map.add(gl)
        graphicsLayerRef.current = gl
      }
      if (!labelsLayerRef.current) {
        const ll = new GraphicsLayer()
        jimuMapView.view.map.add(ll)
        labelsLayerRef.current = ll
      }

      if (!sketchRef.current) {
        const lineSymbol = new SimpleLineSymbol({
          color: 'white',
          width: 2
        })

        sketchRef.current = new SketchViewModel({
          view: jimuMapView.view,
          layer: graphicsLayerRef.current,
          defaultCreateOptions: { hasZ: false },
          updateOnGraphicClick: true, // permite seleção ao clicar
          defaultUpdateOptions: { tool: 'reshape', toggleToolOnClick: false }
        })

        graphicsLayerRef.current.renderer = {
          type: 'simple',
          symbol: lineSymbol
        }
      }

      createHandlerRef.current?.remove()
      updateHandlerRef.current?.remove()
      deleteHandlerRef.current?.remove()
      clickHandlerRef.current?.remove()

      createHandlerRef.current = sketchRef.current.on('create', (event) => {
        if (event.state === 'complete' && event.graphic.geometry.type === 'polyline') {
          event.graphic.symbol = {
            type: 'simple-line',
            color: 'white',
            width: 2
          }
          graphicsRef.current.push(event.graphic)
          drawAllLabels()
          updateMeasurementDetails(event.graphic)
        }
      })

      updateHandlerRef.current = sketchRef.current.on('update', (event) => {
        if (event.state === 'active' || event.state === 'complete') {
          const editedGraphic = event.graphics[0]
          const idx = graphicsRef.current.findIndex(g => g === editedGraphic)
          if (idx >= 0) {
            editedGraphic.symbol = {
              type: 'simple-line',
              color: 'white',
              width: 2
            }
            graphicsRef.current[idx] = editedGraphic
            drawAllLabels()
            updateMeasurementDetails(editedGraphic)
          }
        }
      })

      deleteHandlerRef.current = sketchRef.current.on('delete', (event) => {
        if (event.graphics.length === 0) return
        event.graphics.forEach(deletedGraphic => {
          graphicsRef.current = graphicsRef.current.filter(g => g !== deletedGraphic)
          removeMeasurementDetails(deletedGraphic)
        })
        drawAllLabels()
      })

      setupClickSelection(jimuMapView.view)

      sketchRef.current.create('polyline')
    })

    return () => {
      clearAll()
      createHandlerRef.current?.remove()
      updateHandlerRef.current?.remove()
      deleteHandlerRef.current?.remove()
      clickHandlerRef.current?.remove()
      createHandlerRef.current = null
      updateHandlerRef.current = null
      deleteHandlerRef.current = null
      clickHandlerRef.current = null

      if (graphicsLayerRef.current) {
        jimuMapView.view.map.remove(graphicsLayerRef.current)
        graphicsLayerRef.current = null
      }
      if (labelsLayerRef.current) {
        jimuMapView.view.map.remove(labelsLayerRef.current)
        labelsLayerRef.current = null
      }
      sketchRef.current = null
      geometryEngineRef.current = null
      GraphicRef.current = null
      TextSymbolRef.current = null
      PointRef.current = null
      SimpleLineSymbolRef.current = null
      graphicsRef.current = []
      setSelectedGraphicId(null)
    }
  }, [jimuMapView, activeButton])

  const formatMeasurementNumber = (index: number) => {
    return `Medição ${String(index + 1).padStart(3, '0')}`
  }

  const handleNewMeasurement = () => {
    setSelectedGraphicId(null)
    sketchRef.current?.create('polyline')
  }

  const handleClear = () => {
    clearAll()
    setMeasurementsDetails([])
    graphicsRef.current = []
    setSelectedGraphicId(null)
  }

  return (
    <div className="widget-starter jimu-widget d-flex flex-column" style={{ height: '100%' }}>
      {/* Barra de ferramentas superior */}
      <MeasureTools
        activeButton={activeButton}
        activeTool={
          activeButton === 'measureDistance' ? 'distance' :
          activeButton === 'measureArea' ? 'area' : ''
        }
        onSelectTool={(btn) => {
          setActiveButton(btn.name)
          setMeasurementsDetails([])
          graphicsRef.current = []
          clearAll()
          setSelectedGraphicId(null)
        }}
        onChangeUnit={(unit) => {
          console.log('Unidade alterada:', unit)
        }}
        onClear={handleClear}
      />

      {/* Botões "Nova Medição" e "Limpar Medições" */}
      {activeButton === 'measureDistance' && (
        <div
          style={{
            display: 'flex',
            gap: '12px',
            padding: '8px 12px',
            userSelect: 'none',
            borderBottom: '1px solid #ccc',
            backgroundColor: 'rgba(255,255,255,0.9)',
            zIndex: 999,
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
              padding: '12px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 600,
              flex: 1,
            }}
            aria-label="Nova Medição"
          >
            Nova Medição
          </button>
          <button
            type="button"
            onClick={handleClear}
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #0079c1',
              color: '#0079c1',
              borderRadius: 0,
              padding: '12px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 600,
              flex: 1,
            }}
            aria-label="Limpar Medições"
          >
            Limpar Medições
          </button>
        </div>
      )}

      {/* Lista de medições com scroll */}
      {activeButton === 'measureDistance' && (
        <div
          style={{
            maxHeight: '200px',
            overflowY: 'auto',
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderTop: '1px solid #ccc',
            padding: '8px 12px',
            fontSize: '14px',
            zIndex: 998,
          }}
        >
          {measurementsDetails.length === 0 ? (
            <div className="text-center text-muted">Nenhuma medição registrada.</div>
          ) : (
            measurementsDetails.map((measurement, idx) => (
              <div key={measurement.id} style={{ marginBottom: '12px' }}>
                <strong>{formatMeasurementNumber(idx)}</strong>
                <div style={{ marginLeft: '12px', marginTop: '4px' }}>
                  {measurement.segments.map(segment => (
                    <div key={segment.segmentNumber}>
                      Distância segmento {segment.segmentNumber}: {formatDistance(segment.length)}
                    </div>
                  ))}
                  <div>
                    <strong>Distância total:</strong> {formatDistance(measurement.total)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Mapa */}
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
      </div>
    </div>
  )
}

export default Widget
