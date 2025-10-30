import { React } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'
import { IMConfig } from '../config'

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  // Função para lidar com a mudança na seleção do widget de mapa
  const onMapWidgetSelected = (useMapWidgetIds: string) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  return (
    <div className="widget-setting-street-view">
      {/* Seção para selecionar o widget de mapa */}
      <SettingSection
        className="map-selector-section"
        title="Configurações do Mapa"
      >
        <SettingRow>
          <span>Selecione um widget de mapa para interagir com o Street View.</span>
        </SettingRow>
        <SettingRow>
          <MapWidgetSelector
            onSelect={onMapWidgetSelected}
            useMapWidgetIds={props.useMapWidgetIds}
          />
        </SettingRow>
      </SettingSection>

      {/* Seção informativa sobre a chave de API */}
      <SettingSection title="Informações da API">
        <SettingRow>
          <span style={{ fontSize: 'small', color: '#666' }}>
            ✅ A chave de API do Google Maps está configurada no backend do widget.
          </span>
        </SettingRow>
        <SettingRow>
          <span style={{ fontSize: 'small', color: '#888' }}>
            Para alterar a chave de API, edite o arquivo config.ts no código-fonte do widget.
          </span>
        </SettingRow>
      </SettingSection>
    </div>
  )
}

export default Setting
