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

  const formatDistance = (meters: number) =>
    meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${meters.toFixed(2)} m`

  const clearAll = () => {
    graphicsLayerRef.current?.removeAll()
    labelsLayerRef.current?.removeAll()
    setMeasurement(null)
    sketchRef.current?.cancel()
  }

  // Função para desenhar labels numa geometria fornecida
  const drawLabels = (geometry: __esri.Polyline) => {
    if (!labelsLayerRef.current || !geometryEngineRef.current) return
    labelsLayerRef.current.removeAll()

    const totalLength = geometryEngineRef.current.geodesicLength(geometry, 'meters')
    setMeasurement(formatDistance(totalLength))

    const path = geometry.paths[0]
    if (!path || path.length < 2) return

    // Label total (distância total) no último ponto
    const lastPointCoords = path[path.length - 1]
    const midPointTotal = new PointRef.current({
      x: lastPointCoords[0],
      y: lastPointCoords[1],
      spatialReference: geometry.spatialReference
    })
    const textSymbolTotal = new TextSymbolRef.current({
      text: formatDistance(totalLength),
      color: 'black',
      haloColor: 'white',
      haloSize: 1,
      font: { size: 12 },
      yoffset: -20
    })
    const labelTotal = new GraphicRef.current({
      geometry: midPointTotal,
      symbol: textSymbolTotal
    })
    labelsLayerRef.current.add(labelTotal)

    // Labels por segmento
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
  }

  useEffect(() => {
    if (!jimuMapView) return

    if (activeButton !== 'measureDistance') {
      clearAll()
      sketchRef.current = null
      createHandlerRef.current?.remove()
      updateHandlerRef.current?.remove()
      createHandlerRef.current = null
      updateHandlerRef.current = null

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

      createHandlerRef.current = sketchRef.current.on('create', (event) => {
        if (event.state === 'complete' && event.graphic.geometry.type === 'polyline') {
          drawLabels(event.graphic.geometry as __esri.Polyline)
        }
      })

      updateHandlerRef.current = sketchRef.current.on('update', (event) => {
        if (event.state === 'active' || event.state === 'complete') {
          drawLabels(event.graphics[0].geometry as __esri.Polyline)
        }
      })

      sketchRef.current.create('polyline')
    })

    return () => {
      clearAll()
      createHandlerRef.current?.remove()
      updateHandlerRef.current?.remove()
      createHandlerRef.current = null
      updateHandlerRef.current = null

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
    }
  }, [jimuMapView, activeButton])

  const handleNewMeasurement = () => {
    sketchRef.current?.create('polyline')
  }

  const handleClear = () => {
    clearAll()
    setMeasurement(null)
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
          <strong>Resultado:</strong> {measurement}
        </div>
      )}
    </div>
  )
}

export default Widget
