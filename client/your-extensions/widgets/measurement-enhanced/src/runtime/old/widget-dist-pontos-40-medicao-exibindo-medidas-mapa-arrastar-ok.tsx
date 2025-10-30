import React, { useState, useEffect, useRef } from 'react'
import { AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'
import MeasureTools from './components/measure-tools'

const Widget = (props: AllWidgetProps<any>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const [activeButton, setActiveButton] = useState<'measureDistance' | 'measureArea' | ''>('')
  const [measurement, setMeasurement] = useState<string | null>(null)

  const sketchRef = useRef<__esri.SketchViewModel | null>(null)
  const graphicsLayerRef = useRef<__esri.GraphicsLayer | null>(null)
  const labelsLayerRef = useRef<__esri.GraphicsLayer | null>(null)
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null)
  const GraphicRef = useRef<typeof __esri.Graphic | null>(null)
  const TextSymbolRef = useRef<typeof __esri.TextSymbol | null>(null)
  const PointRef = useRef<typeof __esri.Point | null>(null)

  const createHandlerRef = useRef<__esri.IHandle | null>(null)
  const updateHandlerRef = useRef<__esri.IHandle | null>(null)
  const deleteHandlerRef = useRef<__esri.IHandle | null>(null)

  // Armazena todas as geometrias desenhadas
  const graphicsRef = useRef<__esri.Graphic[]>([])

  const formatDistance = (meters: number) =>
    meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${meters.toFixed(2)} m`

  const clearAll = () => {
    graphicsLayerRef.current?.removeAll()
    labelsLayerRef.current?.removeAll()
    graphicsRef.current = []
    setMeasurement(null)
    sketchRef.current?.cancel()
  }

  // Desenha labels para todos os segmentos de todas as geometrias
  const drawAllLabels = () => {
    if (!labelsLayerRef.current || !geometryEngineRef.current) return
    labelsLayerRef.current.removeAll()

    graphicsRef.current.forEach(graphic => {
      const geometry = graphic.geometry as __esri.Polyline
      const path = geometry.paths[0]
      if (!path || path.length < 2) return

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

  useEffect(() => {
    if (!jimuMapView) return

    if (activeButton !== 'measureDistance') {
      clearAll()
      sketchRef.current = null
      createHandlerRef.current?.remove()
      updateHandlerRef.current?.remove()
      deleteHandlerRef.current?.remove()
      createHandlerRef.current = null
      updateHandlerRef.current = null
      deleteHandlerRef.current = null

      if (graphicsLayerRef.current && jimuMapView) {
        jimuMapView.view.map.remove(graphicsLayerRef.current)
        graphicsLayerRef.current = null
      }
      if (labelsLayerRef.current && jimuMapView) {
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
      if (!labelsLayerRef.current) {
        const ll = new GraphicsLayer()
        jimuMapView.view.map.add(ll)
        labelsLayerRef.current = ll
      }

      if (!sketchRef.current) {
        sketchRef.current = new SketchViewModel({
          view: jimuMapView.view,
          layer: graphicsLayerRef.current
        })
      }

      createHandlerRef.current?.remove()
      updateHandlerRef.current?.remove()
      deleteHandlerRef.current?.remove()

      // Quando cria uma nova geometria
      createHandlerRef.current = sketchRef.current.on('create', (event) => {
        if (event.state === 'complete' && event.graphic.geometry.type === 'polyline') {
          graphicsRef.current.push(event.graphic)
          drawAllLabels()
          let totalSum = 0
          graphicsRef.current.forEach(g => {
            totalSum += geometryEngineRef.current.geodesicLength(g.geometry as __esri.Polyline, 'meters')
          })
          setMeasurement(formatDistance(totalSum))
        }
      })

      // Quando edita uma geometria existente
      updateHandlerRef.current = sketchRef.current.on('update', (event) => {
        if (event.state === 'active' || event.state === 'complete') {
          const editedGraphic = event.graphics[0]
          const idx = graphicsRef.current.findIndex(g => g === editedGraphic)
          if (idx >= 0) {
            graphicsRef.current[idx] = editedGraphic
            drawAllLabels()
            let totalSum = 0
            graphicsRef.current.forEach(g => {
              totalSum += geometryEngineRef.current.geodesicLength(g.geometry as __esri.Polyline, 'meters')
            })
            setMeasurement(formatDistance(totalSum))
          }
        }
      })

      // Quando deleta uma ou mais geometrias
      deleteHandlerRef.current = sketchRef.current.on('delete', (event) => {
        if (event.graphics.length === 0) return
        event.graphics.forEach(deletedGraphic => {
          graphicsRef.current = graphicsRef.current.filter(g => g !== deletedGraphic)
        })
        drawAllLabels()
        let totalSum = 0
        graphicsRef.current.forEach(g => {
          totalSum += geometryEngineRef.current!.geodesicLength(g.geometry as __esri.Polyline, 'meters')
        })
        setMeasurement(formatDistance(totalSum))
      })

      sketchRef.current.create('polyline')
    })

    return () => {
      clearAll()
      createHandlerRef.current?.remove()
      updateHandlerRef.current?.remove()
      deleteHandlerRef.current?.remove()
      createHandlerRef.current = null
      updateHandlerRef.current = null
      deleteHandlerRef.current = null

      if (graphicsLayerRef.current && jimuMapView) {
        jimuMapView.view.map.remove(graphicsLayerRef.current)
        graphicsLayerRef.current = null
      }
      if (labelsLayerRef.current && jimuMapView) {
        jimuMapView.view.map.remove(labelsLayerRef.current)
        labelsLayerRef.current = null
      }

      sketchRef.current = null
      geometryEngineRef.current = null
      GraphicRef.current = null
      TextSymbolRef.current = null
      PointRef.current = null
      graphicsRef.current = []
    }
  }, [jimuMapView, activeButton])

  // Iniciar nova medição
  const handleNewMeasurement = () => {
    sketchRef.current?.create('polyline')
  }

  // Limpar medições e labels
  const handleClear = () => {
    clearAll()
    setMeasurement(null)
    graphicsRef.current = []
  }

  return (
    <div className="widget-starter jimu-widget d-flex flex-column" style={{ height: '100%' }}>
      <MeasureTools
        activeButton={activeButton}
        activeTool={
          activeButton === 'measureDistance' ? 'distance' :
          activeButton === 'measureArea' ? 'area' : ''
        }
        onSelectTool={(btn) => {
          setActiveButton(btn.name)
          setMeasurement(null)
          graphicsRef.current = []
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

      {measurement && (
        <div className="bg-light border-top text-center p-2 mt-2">
          <strong>Resultado Total:</strong> {measurement}
        </div>
      )}
    </div>
  )
}

export default Widget
