import React, { useState, useRef } from 'react'
import { AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import MeasureDistance from './components/measure-distance'
import MeasureArea from './components/measure-area'

const Widget = (props: AllWidgetProps<any>) => {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView | null>(null)
  const [activeTool, setActiveTool] = useState<'distance' | 'area' | null>(null)
  const [measurement, setMeasurement] = useState<string | null>(null)
  const restartSketchRef = useRef<() => void>()
  const clearSketchRef = useRef<() => void>()

  const handleNewMeasurement = () => restartSketchRef.current?.()
  const handleClear = () => {
    clearSketchRef.current?.()
    setMeasurement(null)
  }

  return (
    <div className="widget-starter jimu-widget d-flex flex-column justify-content-between" style={{ height: '100%' }}>
      {/* TOPO */}
      <div>
        <div className="d-flex justify-content-center p-2 border-bottom gap-2">
          <button
            className={`btn btn-sm ${activeTool === 'distance' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => setActiveTool('distance')}
          >
            <calcite-icon icon="measure" scale="s" className="me-1" />
            Distância
          </button>
          <button
            className={`btn btn-sm ${activeTool === 'area' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => setActiveTool('area')}
          >
            <calcite-icon icon="polygon" scale="s" className="me-1" />
            Área
          </button>
        </div>

        {measurement && (
          <div className="p-2 bg-light border-bottom text-center">
            <strong>Resultado:</strong> {measurement}
          </div>
        )}
      </div>

      {/* CONTEÚDO */}
      <div style={{ flex: 1 }}>
        {activeTool === 'distance' && jimuMapView && (
          <MeasureDistance
            jimuMapView={jimuMapView}
            setMeasurement={setMeasurement}
            setRestartSketch={(fn) => (restartSketchRef.current = fn)}
            setClearSketch={(fn) => (clearSketchRef.current = fn)}
          />
        )}

        {activeTool === 'area' && jimuMapView && (
          <MeasureArea
            jimuMapView={jimuMapView}
            setMeasurement={setMeasurement}
            setRestartSketch={(fn) => (restartSketchRef.current = fn)}
            setClearSketch={(fn) => (clearSketchRef.current = fn)}
          />
        )}

        {props.useMapWidgetIds?.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={setJimuMapView}
          />
        )}
      </div>

      {/* RODAPÉ */}
      {activeTool && (
        <div className="p-2 border-top d-flex justify-content-center gap-2">
          <button className="btn btn-sm btn-outline-primary" onClick={handleNewMeasurement}>
            <calcite-icon icon="plus" scale="s" className="me-1" />
            Nova Medição
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={handleClear}>
            <calcite-icon icon="trash" scale="s" className="me-1" />
            Limpar Tudo
          </button>
        </div>
      )}
    </div>
  )
}

export default Widget
