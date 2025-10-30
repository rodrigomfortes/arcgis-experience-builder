import React, { useEffect, useRef, useState } from 'react'
import { JimuMapView } from 'jimu-arcgis'

interface Props {
  jimuMapView: JimuMapView
  setMeasurement: (value: string | null) => void
  setSketchFunctions: (functions: {
    restartSketch: () => void
    clearSketch: () => void
  }) => void
}

export const MeasureDistance = ({ jimuMapView, setMeasurement, setSketchFunctions }: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetRef = useRef<any>(null)
  const clickHandlerRef = useRef<__esri.Handle | null>(null)
  const [rawValue, setRawValue] = useState<number | null>(null)
  const [points, setPoints] = useState<__esri.Point[]>([])

  useEffect(() => {
    let cancelled = false

    const loadWidget = async () => {
      try {
        const [DistanceMeasurement2D, geometryEngine, Point, Polyline] = await Promise.all([
          import('@arcgis/core/widgets/DistanceMeasurement2D'),
          import('@arcgis/core/geometry/geometryEngine'),
          import('@arcgis/core/geometry/Point'),
          import('@arcgis/core/geometry/Polyline')
        ])

        if (cancelled || !jimuMapView?.view || !containerRef.current) return

        const view = jimuMapView.view as __esri.MapView

        const widget = new DistanceMeasurement2D.default({
          view,
          container: containerRef.current
        })

        widgetRef.current = widget
        widget.viewModel.unit = 'meters'

        // Escuta cliques no mapa para medir entre dois pontos
        clickHandlerRef.current = view.on('click', (event) => {
          const point = new Point.default({
            x: event.mapPoint.longitude,
            y: event.mapPoint.latitude,
            spatialReference: view.spatialReference
          })

          setPoints(prev => {
            const updated = [...prev, point]
            if (updated.length === 2) {
              const line = new Polyline.default({
                paths: [[
                  [updated[0].x, updated[0].y],
                  [updated[1].x, updated[1].y]
                ]],
                spatialReference: view.spatialReference
              })

              const length = geometryEngine.geodesicLength(line, 'meters')
              const formatted = length >= 1000
                ? `${(length / 1000).toFixed(2)} km`
                : `${length.toFixed(2)} m`

              setMeasurement(formatted)
              setRawValue(length)
            }
            return updated.length < 2 ? updated : []
          })
        })

        setSketchFunctions({
          restartSketch: () => {
            console.log('[DEBUG] Nova medição iniciada (custom)')
            setMeasurement(null)
            setRawValue(null)
            setPoints([])
          },
          clearSketch: () => {
            console.log('[DEBUG] Medição limpa (custom)')
            setMeasurement(null)
            setRawValue(null)
            setPoints([])
          }
        })
      } catch (err) {
        console.error('Erro ao carregar módulos:', err)
      }
    }

    loadWidget()

    return () => {
      cancelled = true
      widgetRef.current?.destroy?.()
      clickHandlerRef.current?.remove()
    }
  }, [jimuMapView, setMeasurement, setSketchFunctions])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Área do widget da Esri */}
      <div ref={containerRef} style={{ height: 220, borderBottom: '1px solid #ccc' }} />

      {/* Área do valor bruto */}
      <div style={{ flex: 1, padding: '10px', background: '#f9f9f9', fontSize: '14px' }}>
        <strong>Valor bruto (metros):</strong>{' '}
        {rawValue !== null ? rawValue : 'nenhum valor disponível'}
      </div>
    </div>
  )
}
