import React, { useState, useEffect, useRef } from 'react'
import { AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'

const Widget = (props: AllWidgetProps<any>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const [distance, setDistance] = useState<number | null>(null)
  const [pointA, setPointA] = useState<{ lat: number; lon: number } | null>(null)
  const [pointB, setPointB] = useState<{ lat: number; lon: number } | null>(null)

  const clickHandlerRef = useRef<__esri.Handle | null>(null)
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null)
  const tempPointARef = useRef<{ lat: number; lon: number } | null>(null)

  useEffect(() => {
    loadArcGISJSAPIModules(['esri/geometry/geometryEngine']).then(([geometryEngine]) => {
      geometryEngineRef.current = geometryEngine
    }).catch((err) => console.error('Failed to load geometryEngine:', err))
  }, [])

  useEffect(() => {
    if (!jimuMapView || !geometryEngineRef.current) return

    if (clickHandlerRef.current) {
      clickHandlerRef.current.remove()
    }

    clickHandlerRef.current = jimuMapView.view.on('click', (evt) => {
      const mapPoint = jimuMapView.view.toMap({ x: evt.x, y: evt.y })
      const lat = mapPoint.latitude
      const lon = mapPoint.longitude

      if (!tempPointARef.current) {
        // First point
        tempPointARef.current = { lat, lon }
        setPointA({ lat, lon })
        setPointB(null)
        setDistance(null)
      } else {
        // Second point
        const pointA = tempPointARef.current
        const pointB = { lat, lon }

        const line = {
          type: 'polyline',
          paths: [[[pointA.lon, pointA.lat], [pointB.lon, pointB.lat]]]
        }

        const dist = geometryEngineRef.current!.geodesicLength(line as any, 'meters')

        setPointA(pointA)
        setPointB(pointB)
        setDistance(dist)
        tempPointARef.current = null
      }
    })

    return () => {
      clickHandlerRef.current?.remove()
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
          ? 'Click the first point.'
          : !pointB
            ? 'Click the second point.'
            : 'Measurement complete. Click again to restart.'}
      </p>

      {pointA && (
        <p><strong>Point A:</strong> {pointA.lat.toFixed(5)}°, {pointA.lon.toFixed(5)}°</p>
      )}
      {pointB && (
        <p><strong>Point B:</strong> {pointB.lat.toFixed(5)}°, {pointB.lon.toFixed(5)}°</p>
      )}
      {distance !== null && (
        <p><strong>Distance:</strong> {distance.toFixed(2)} meters</p>
      )}
    </div>
  )
}

export default Widget
