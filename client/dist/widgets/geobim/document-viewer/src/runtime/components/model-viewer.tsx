/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, type IMThemeVariables } from 'jimu-core'
import { Alert } from 'jimu-ui'
import {
  type SelectedBimDocument,
  type defaultSharedMessages,
  ReactModelViewer
} from 'widgets/shared-code/geobim'
import { useModelViewerComponent } from '../hooks/use-model-viewer-component'
import type defaultMessages from '../translations/default'
import { modelViewerWrapper, modelViewerAlert, noDocumentMessage } from '../styles'

interface ModelViewerProps {
  bimDocument: SelectedBimDocument | null
  theme: IMThemeVariables
  i18nMessage: (
    id: keyof typeof defaultMessages | keyof typeof defaultSharedMessages.default
  ) => string
}

const ModelViewer = (props: ModelViewerProps): JSX.Element => {
  const { bimDocument, theme, i18nMessage } = props
  const {
    viewerErrorMessage,
    documentVisible
  } = useModelViewerComponent(bimDocument)

  return (
    <div css={modelViewerWrapper(theme)}>
      {viewerErrorMessage !== null && (
        <div css={modelViewerAlert(theme)}>
          <Alert
            text={viewerErrorMessage}
            aria-live="polite"
            open
            size="medium"
            type="warning"
            withIcon
          />
        </div>
      )}
      {viewerErrorMessage === null && (
        <>
          {!documentVisible && (
            <div css={noDocumentMessage(theme)}>
              {i18nMessage('noDocument')}
            </div>
          )}
          <ReactModelViewer />
        </>
      )}
    </div>
  )
}

export default ModelViewer
