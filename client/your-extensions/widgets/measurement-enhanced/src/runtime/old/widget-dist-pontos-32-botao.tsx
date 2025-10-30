import React, { useState, useEffect, useRef } from 'react'
import { AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'

const Widget = (props: AllWidgetProps<any>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const [distance, setDistance] = useState<number | null>(null)
  const [pointA, setPointA] = useState<{ lat: number; lon: number } | null>(null)
  const [pointB, setPointB] = useState<{ lat: number; lon: number } | null>(null)
  const [isMeasuring, setIsMeasuring] = useState(false)

  const sketchViewModelRef = useRef<__esri.SketchViewModel | null>(null)
  const graphicsLayerRef = useRef<__esri.GraphicsLayer | null>(null)
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null)

  // Start a new measurement (clear previous and start new sketch)
  const startNewMeasurement = () => {
    if (!sketchViewModelRef.current || !graphicsLayerRef.current) return

    // Clear previous graphics
    graphicsLayerRef.current.removeAll()

    // Reset states
    setPointA(null)
    setPointB(null)
    setDistance(null)

    setIsMeasuring(true)
    sketchViewModelRef.current.create("polyline")
  }

  useEffect(() => {
    if (!jimuMapView) return

    loadArcGISJSAPIModules([
      'esri/layers/GraphicsLayer',
      'esri/widgets/Sketch/SketchViewModel',
      'esri/geometry/geometryEngine'
    ]).then(([GraphicsLayer, SketchViewModel, geometryEngine]) => {
      geometryEngineRef.current = geometryEngine

      // Create GraphicsLayer if none
      if (!graphicsLayerRef.current) {
        const gl = new GraphicsLayer()
        jimuMapView.view.map.add(gl)
        graphicsLayerRef.current = gl
      }

      // Create SketchViewModel for drawing
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

        // Listen to create event
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

            // Calculate distance
            const dist = geometryEngine.geodesicLength(geom, "meters")
            setDistance(dist)

            setIsMeasuring(false)
          }
        })
      }
    }).catch(err => console.error("Error loading modules:", err))

    // Cleanup on unmount
    return () => {
      sketchViewModelRef.current?.cancel()
      graphicsLayerRef.current?.removeAll()
    }
  }, [jimuMapView])

  return (
    <div className="widget-starter jimu-widget" style={{ padding: '10px' }}>
      {props.useMapWidgetIds?.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={setJimuMapView}
          style={{ height: '300px', width: '100%' }}
        />
      )}

      <p>
        {!pointA
          ? 'Clique em "Nova Medição" e desenhe uma linha no mapa.'
          : !pointB
            ? 'Complete a linha.'
            : 'Medição concluída. Clique em "Nova Medição" para reiniciar.'}
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

      <button
        onClick={startNewMeasurement}
        disabled={isMeasuring}
        style={{ marginTop: '10px', padding: '8px 16px', fontSize: '14px', cursor: isMeasuring ? 'not-allowed' : 'pointer' }}
      >
        Nova Medição
      </button>
    </div>
  )
}

export default Widget
