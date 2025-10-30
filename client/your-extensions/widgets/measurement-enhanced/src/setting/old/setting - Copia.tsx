import { React } from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'
import { Checkbox } from 'jimu-ui'

const Setting = (props: AllWidgetSettingProps<any>) => {
  const { useMapWidgetIds, config, id } = props

  const onMapWidgetSelected = (ids: string[]) => {
    props.onSettingChange({
      id,
      useMapWidgetIds: ids
    })
  }

  const onToolToggle = (tool: 'distance' | 'area', value: boolean) => {
    props.onSettingChange({
      id,
      config: {
        ...config,
        tools: {
          ...config.tools,
          [tool]: value
        }
      }
    })
  }

  return (
    <div className="widget-setting-demo" style={{ padding: '16px' }}>
      <h4 style={{ marginBottom: '10px' }}>Selecione uma camada</h4>
      <MapWidgetSelector
        useMapWidgetIds={useMapWidgetIds}
        onSelect={onMapWidgetSelected}
      />

      <hr style={{ margin: '24px -16px', border: 'none', borderTop: '1px solid #ccc' }} />

      <h4 style={{ marginBottom: '10px' }}>Ferramentas ativas</h4>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        <Checkbox
          checked={!!config?.tools?.distance}
          onChange={e => onToolToggle('distance', e.target.checked)}
        />
        <span style={{ marginLeft: '8px' }}>Distância</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        <Checkbox
          checked={!!config?.tools?.area}
          onChange={e => onToolToggle('area', e.target.checked)}
        />
        <span style={{ marginLeft: '8px' }}>Área</span>
      </div>
    </div>
  )
}

export default Setting
