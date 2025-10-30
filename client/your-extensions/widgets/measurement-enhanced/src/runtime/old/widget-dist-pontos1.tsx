// This is a single-line comment

/*
 This is a multi-line comment
 Useful for describing blocks of logic
*/
import React, { useState, useEffect, useRef } from 'react'
import { AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'

const Widget = (props: AllWidgetProps<any>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const [firstPoint, setFirstPoint] = useState<any | null>(null)
  const [distance, setDistance] = useState<number | null>(null)
  const firstPointRef = useRef<any | null>(null)
  const clickHandlerRef = useRef<__esri.Handle | null>(null)
  const geometryEngineRef = useRef<typeof __esri.geometryEngine | null>(null)

  useEffect(() => {
    loadArcGISJSAPIModules(['esri/geometry/geometryEngine'])
      .then(([geometryEngine]) => {
        geometryEngineRef.current = geometryEngine
        console.log('geometryEngine loaded:', geometryEngine)
      })
      .catch(err => console.error('Failed to load geometryEngine:', err))
  }, [])

  useEffect(() => {
    firstPointRef.current = firstPoint
  }, [firstPoint])

  useEffect(() => {
    if (!jimuMapView || !geometryEngineRef.current) return

    if (clickHandlerRef.current) {
      clickHandlerRef.current.remove()
      clickHandlerRef.current = null
    }

    clickHandlerRef.current = jimuMapView.view.on('click', (evt) => {
      const clickedPoint = jimuMapView.view.toMap({ x: evt.x, y: evt.y })

      if (!firstPointRef.current) {
        setFirstPoint(clickedPoint)
        setDistance(null)
      } else {
        try {
          const line = {
            type: 'polyline',
            paths: [[
              [firstPointRef.current.longitude, firstPointRef.current.latitude],
              [clickedPoint.longitude, clickedPoint.latitude]
            ]]
          }
          const dist = geometryEngineRef.current!.geodesicLength(line, 'meters')
          setDistance(dist)
          setFirstPoint(null)
        } catch (error) {
          console.error('Error calculating distance:', error)
        }
      }
    })

    return () => {
      if (clickHandlerRef.current) {
        clickHandlerRef.current.remove()
        clickHandlerRef.current = null
      }
    }
  }, [jimuMapView])

  return (
    <div className="widget-starter jimu-widget">
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={setJimuMapView}
        />
      )}
      <p>{firstPoint ? 'Click second point to measure distance.' : 'Click first point to start measuring.'}</p>
      {distance !== null && <p>Distance: {distance.toFixed(2)} meters</p>}
    </div>
  )
}

export default Widget
