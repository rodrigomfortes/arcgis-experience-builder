/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, type AllWidgetProps } from 'jimu-core'
import { WidgetPlaceholder } from 'jimu-ui'
import {
  defaultSharedMessages,
  GeoBIMProvider,
  useSharedMessages
} from 'widgets/shared-code/geobim'
import type { IMConfig } from '../config'
import defaultMessages from './translations/default'
import documentExplorerIcon from '../../icon.svg'
import DocumentExplorer from './components/document-explorer'
import { DocumentsProvider } from './providers/documents-provider'
const { useCallback } = React

const DocumentExplorerWidget = (props: AllWidgetProps<IMConfig>): JSX.Element => {
  const { useMapWidgetIds, intl, theme, widgetId, config, manifest } = props
  const { modelViewerWidgetId } = config
  const { translateMessage } = useSharedMessages(intl, manifest.translatedLocales)

  const i18nMessage = useCallback(
    (
      id: keyof typeof defaultMessages | keyof typeof defaultSharedMessages.default,
      values?: { [key: string]: string }
    ): string => {
      // NOTE: defaultMessages is last to ensure it takes priority over defaultSharedMessages
      const defaultLocaleMessages = { ...defaultSharedMessages.default, ...defaultMessages }

      // In the future if strings get loaded by the framework then we can restore
      // the following call to formatMessage and remove the call to translateMessage
      // and the useSharedMessages hook.
      // return intl.formatMessage({ id: id, defaultMessage: messages[id] }, values)
      return translateMessage(id, defaultLocaleMessages, values)
    },
    [translateMessage]
  )

  const currentMapWidgetId = useMapWidgetIds?.[0]
  const appConfigured = currentMapWidgetId

  return (
    <>
      {!appConfigured && (
        <WidgetPlaceholder
          icon={documentExplorerIcon}
          message={i18nMessage('widgetTitle')}
          widgetId={widgetId}
        />
      )}
      {appConfigured && (
        <>
          <GeoBIMProvider mapWidgetId={currentMapWidgetId} widgetId={widgetId}>
            <DocumentsProvider modelViewerWidgetId={modelViewerWidgetId}>
              <DocumentExplorer i18nMessage={i18nMessage} theme={theme} />
            </DocumentsProvider>
          </GeoBIMProvider>
        </>
      )}
    </>
  )
}

export default DocumentExplorerWidget
