import React, { useState, useEffect, useRef } from 'react'
import { AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'

const Widget = (props: AllWidgetProps<any>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const [liveDistance, setLiveDistance] = useState<string | null>(null)

  const sketchRef = useRef<__esri.SketchViewModel | null>(null)
  const graphicsLayerRef = useRef<__esri.GraphicsLayer | null>(null)
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null)
  const GraphicRef = useRef<any>(null)
  const TextSymbolRef = useRef<any>(null)
  const PointRef = useRef<any>(null)
  const liveTextRef = useRef<__esri.Graphic | null>(null)

  const formatDistance = (meters: number) =>
    meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${meters.toFixed(2)} m`

  const clearAll = () => {
    graphicsLayerRef.current?.removeAll()
    setLiveDistance(null)
    liveTextRef.current = null
  }

  const startSketch = () => {
    sketchRef.current?.create('polyline') // <-- mantemos os desenhos anteriores
  }

  useEffect(() => {
    if (!jimuMapView) return

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

      const gl = new GraphicsLayer()
      jimuMapView.view.map.add(gl)
      graphicsLayerRef.current = gl

      const sketch = new SketchViewModel({
        view: jimuMapView.view,
        layer: gl
      })
      sketchRef.current = sketch

      sketch.on('create', (event) => {
        const geom = event.graphic.geometry

        if (event.state === 'active' && geom.type === 'polyline') {
          const len = geometryEngine.geodesicLength(geom as __esri.Polyline, 'meters')
          setLiveDistance(formatDistance(len))

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

          if (liveTextRef.current) gl.remove(liveTextRef.current)
          const label = new GraphicRef.current({
            geometry: midPoint,
            symbol: textSymbol
          })
          gl.add(label)
          liveTextRef.current = label
        }

        if (event.state === 'complete' && geom.type === 'polyline') {
          const polyline = geom as __esri.Polyline

          // Remove rótulo temporário
          if (liveTextRef.current) {
            graphicsLayerRef.current?.remove(liveTextRef.current)
            liveTextRef.current = null
          }
          setLiveDistance(null)

          const path = polyline.paths[0]
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

            gl.add(labelGraphic)
          }
        }
      })

      // Desenha automaticamente ao iniciar o widget
      sketch.create('polyline')
    })
  }, [jimuMapView])

  return (
    <div className="widget-starter jimu-widget d-flex flex-column" style={{ height: '100%' }}>
      <div className="d-flex align-items-center p-2 border-bottom gap-2">
        <button className="btn btn-sm btn-primary" onClick={startSketch}>Nova Medição</button>
        <button className="btn btn-sm btn-outline-secondary ms-auto" onClick={clearAll}>
          <calcite-icon icon="trash" scale="s" />
        </button>
      </div>

      {liveDistance && (
        <div className="p-2 bg-light border-bottom">
          <strong>Medindo:</strong> {liveDistance}
        </div>
      )}

      <div style={{ flex: 1 }}>
        {props.useMapWidgetIds?.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={setJimuMapView}
          />
        )}
      </div>
    </div>
  )
}

export default Widget
