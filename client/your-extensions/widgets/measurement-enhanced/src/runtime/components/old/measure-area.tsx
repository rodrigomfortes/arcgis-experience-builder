import React, { useEffect, useRef } from 'react'
import { JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'

interface Props {
  jimuMapView: JimuMapView
  setMeasurement: (value: string | null) => void
  setRestartSketch: (fn: () => void) => void
}

const MeasureArea = ({ jimuMapView, setMeasurement, setRestartSketch }: Props): JSX.Element => {
  const sketchRef = useRef<__esri.SketchViewModel | null>(null)
  const graphicsLayerRef = useRef<__esri.GraphicsLayer | null>(null)
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null)
  const GraphicRef = useRef<any>(null)
  const TextSymbolRef = useRef<any>(null)

  const formatArea = (m2: number) =>
    m2 >= 10000 ? `${(m2 / 10000).toFixed(2)} ha` : `${m2.toFixed(2)} m²`

  useEffect(() => {
    if (!jimuMapView?.view) return

    loadArcGISJSAPIModules([
      'esri/layers/GraphicsLayer',
      'esri/widgets/Sketch/SketchViewModel',
      'esri/geometry/geometryEngine',
      'esri/Graphic',
      'esri/symbols/TextSymbol'
    ]).then(([GraphicsLayer, SketchViewModel, geometryEngine, Graphic, TextSymbol]) => {
      geometryEngineRef.current = geometryEngine
      GraphicRef.current = Graphic
      TextSymbolRef.current = TextSymbol

      const view = jimuMapView.view
      const gl = new GraphicsLayer({ id: 'widget-measure-area' })
      view.map.add(gl)
      graphicsLayerRef.current = gl

      const sketch = new SketchViewModel({
        view,
        layer: gl
      })
      sketchRef.current = sketch

      setRestartSketch(() => () => {
        sketchRef.current?.create('polygon')
      })

      sketch.on('create', (event) => {
        if (event.state === 'complete' && event.graphic.geometry.type === 'polygon') {
          const area = geometryEngine.geodesicArea(event.graphic.geometry, 'square-meters')
          const centroid = geometryEngine.centroid(event.graphic.geometry)

          const label = new TextSymbolRef.current({
            text: formatArea(area),
            color: 'black',
            haloColor: 'white',
            haloSize: 1,
            font: { size: 12 },
            yoffset: -20
          })

          const labelGraphic = new GraphicRef.current({
            geometry: centroid,
            symbol: label
          })

          gl.add(labelGraphic)
          setMeasurement(formatArea(area))
        }
      })

      sketch.create('polygon')
    })
  }, [jimuMapView])

  return <div className="text-center small text-muted">Clique no mapa para medir área</div>
}

export default MeasureArea
