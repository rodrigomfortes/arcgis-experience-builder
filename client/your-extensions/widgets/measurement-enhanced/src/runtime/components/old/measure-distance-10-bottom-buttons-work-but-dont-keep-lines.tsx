import React, { useEffect, useRef } from 'react'
import { JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'

interface Props {
  jimuMapView: JimuMapView
  setMeasurement: (value: string | null) => void
  setSketchFunctions: (functions: {
    restartSketch: () => void
    clearSketch: () => void
  }) => void
}

const MeasureDistance = ({ jimuMapView, setMeasurement, setSketchFunctions }: Props): JSX.Element => {
  const sketchRef = useRef<__esri.SketchViewModel | null>(null)
  const measurementLayerRef = useRef<__esri.GraphicsLayer | null>(null)
  const geometryEngineRef = useRef<any>(null)
  const GraphicRef = useRef<any>(null)
  const PointRef = useRef<any>(null)
  const TextSymbolRef = useRef<any>(null)
  const activeGraphicRef = useRef<__esri.Graphic | null>(null)

  useEffect(() => {
    if (!jimuMapView?.view) return

    loadArcGISJSAPIModules([
      'esri/layers/GraphicsLayer',
      'esri/widgets/Sketch/SketchViewModel',
      'esri/geometry/geometryEngine',
      'esri/Graphic',
      'esri/geometry/Point',
      'esri/symbols/TextSymbol'
    ]).then(([GraphicsLayer, SketchViewModel, geometryEngine, Graphic, Point, TextSymbol]) => {
      geometryEngineRef.current = geometryEngine
      GraphicRef.current = Graphic
      PointRef.current = Point
      TextSymbolRef.current = TextSymbol

      const view = jimuMapView.view

      // Create measurement layer if it doesn't exist
      if (!measurementLayerRef.current) {
        measurementLayerRef.current = new GraphicsLayer()
        view.map.add(measurementLayerRef.current)
      }

      // Initialize sketch
      sketchRef.current = new SketchViewModel({
        view,
        layer: new GraphicsLayer(), // Use a temporary layer for drawing
        updateOnGraphicClick: false
      })

      const restartSketch = () => {
        sketchRef.current?.create('polyline')
      }

      const clearSketch = () => {
        sketchRef.current?.cancel()
        measurementLayerRef.current?.removeAll()
        activeGraphicRef.current = null
        setMeasurement(null)
      }

      setSketchFunctions({ restartSketch, clearSketch })

      sketchRef.current.on('create', (event) => {
        if (event.state === 'complete') {
          const polyline = event.graphic.geometry as __esri.Polyline

          // Clear previous measurement
          measurementLayerRef.current?.removeAll()
          activeGraphicRef.current = null

          // Create and store the new graphic
          const lineGraphic = new GraphicRef.current({
            geometry: polyline.clone(),
            symbol: {
              type: 'simple-line',
              color: [255, 0, 0],
              width: 2
            }
          })

          measurementLayerRef.current?.add(lineGraphic)
          activeGraphicRef.current = lineGraphic

          // Calculate total length
          const path = polyline.paths[0]
          let total = 0

          for (let i = 0; i < path.length - 1; i++) {
            const p1 = path[i]
            const p2 = path[i + 1]

            const segment = {
              type: 'polyline',
              paths: [[p1, p2]],
              spatialReference: polyline.spatialReference
            } as __esri.Polyline

            const length = geometryEngineRef.current.geodesicLength(segment, 'meters')
            total += length

            // Add midpoint label
            const mid = new PointRef.current({
              x: (p1[0] + p2[0]) / 2,
              y: (p1[1] + p2[1]) / 2,
              spatialReference: polyline.spatialReference
            })

            const label = new TextSymbolRef.current({
              text: `${length.toFixed(2)} m`,
              color: 'black',
              haloColor: 'white',
              haloSize: 1,
              font: { size: 10 },
              yoffset: -15
            })

            measurementLayerRef.current?.add(new GraphicRef.current({
              geometry: mid,
              symbol: label
            }))
          }

          // Format and set the measurement result
          const formatted = total >= 1000
            ? `${(total / 1000).toFixed(2)} km`
            : `${total.toFixed(2)} m`

          setMeasurement(formatted)
        }
      })
    })

    return () => {
      if (jimuMapView?.view?.map) {
        if (measurementLayerRef.current) {
          jimuMapView.view.map.remove(measurementLayerRef.current)
        }
      }
    }
  }, [jimuMapView, setMeasurement, setSketchFunctions])

  return null
}

export default MeasureDistance