import React, { useState, useEffect, useRef } from 'react'
import { AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'

const Widget = (props: AllWidgetProps<any>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const [distance, setDistance] = useState<number | null>(null)
  const [pointA, setPointA] = useState<{ lat: number; lon: number } | null>(null)
  const [pointB, setPointB] = useState<{ lat: number; lon: number } | null>(null)
  const [showNewMeasurementBtn, setShowNewMeasurementBtn] = useState(false)

  const sketchViewModelRef = useRef<__esri.SketchViewModel | null>(null)
  const graphicsLayerRef = useRef<__esri.GraphicsLayer | null>(null)
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null)

  const startNewMeasurement = () => {
    if (sketchViewModelRef.current) {
      sketchViewModelRef.current.cancel()
    }
    graphicsLayerRef.current?.removeAll()
    setPointA(null)
    setPointB(null)
    setDistance(null)
    setShowNewMeasurementBtn(false)
    sketchViewModelRef.current?.create('polyline')
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

      if (!graphicsLayerRef.current) {
        const gl = new GraphicsLayer()
        jimuMapView.view.map.add(gl)
        graphicsLayerRef.current = gl
      }

      if (!sketchViewModelRef.current) {
        sketchViewModelRef.current = new SketchViewModel({
          view: jimuMapView.view,
          layer: graphicsLayerRef.current,
          pointSymbol: {
            type: "simple-marker",
            style: "circle",
            color: "blue",
            size: "8px"
          },
          polylineSymbol: {
            type: "simple-line",
            color: "red",
            width: 2
          }
        })

        sketchViewModelRef.current.on("create", (event) => {
          if (event.state === "complete" && event.graphic.geometry.type === "polyline") {
            const geom = event.graphic.geometry
            const paths = geom.paths[0]
            const start = paths[0]
            const end = paths[paths.length - 1]

            const latA = start[1]
            const lonA = start[0]
            const latB = end[1]
            const lonB = end[0]

            setPointA({ lat: latA, lon: lonA })
            setPointB({ lat: latB, lon: lonB })

            const dist = geometryEngine.geodesicLength(geom, "meters")
            setDistance(dist)

            // Add distance label
            const midX = (start[0] + end[0]) / 2
            const midY = (start[1] + end[1]) / 2
            const midPoint = new Point({ x: midX, y: midY, spatialReference: jimuMapView.view.spatialReference })

            const textSymbol = new TextSymbol({
              text: `${dist.toFixed(2)} m`,
              color: 'black',
              haloColor: 'white',
              haloSize: '1px',
              font: { size: 12, family: 'sans-serif' },
              yoffset: -20
            })

            const textGraphic = new Graphic({
              geometry: midPoint,
              symbol: textSymbol
            })

            graphicsLayerRef.current?.add(textGraphic)

            setShowNewMeasurementBtn(true)
          }
        })
      }

      sketchViewModelRef.current.create("polyline")

    }).catch(err => console.error("Error loading modules:", err))

    return () => {
      sketchViewModelRef.current?.cancel()
      graphicsLayerRef.current?.removeAll()
    }
  }, [jimuMapView])

  return (
    <div className="widget-starter jimu-widget">
      {props.useMapWidgetIds?.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={setJimuMapView}
        />
      )}

      <p>
        {!pointA
          ? 'Desenhe uma linha no mapa.'
          : !pointB
            ? 'Complete a linha.'
            : 'Medição concluída. Comece uma nova medição se desejar.'}
      </p>

      {pointA && (
        <p><strong>Ponto A:</strong> {pointA.lat.toFixed(5)}°, {pointA.lon.toFixed(5)}°</p>
      )}
      {pointB && (
        <p><strong>Ponto B:</strong> {pointB.lat.toFixed(5)}°, {pointB.lon.toFixed(5)}°</p>
      )}
      {distance !== null && (
        <p><strong>Distância:</strong> {distance.toFixed(2)} metros</p>
      )}

      {showNewMeasurementBtn && (
        <button style={{ marginTop: '1em' }} onClick={startNewMeasurement}>
          Nova Medição
        </button>
      )}
    </div>
  )
}

export default Widget
