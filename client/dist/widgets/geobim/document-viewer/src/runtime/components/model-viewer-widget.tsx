/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { React, jsx, ReactRedux, type IMState, type IMThemeVariables } from 'jimu-core'
import { Loading, Button, Alert } from 'jimu-ui'
import type { Dispatch } from 'redux'
import { LockOutlined } from 'jimu-icons/outlined/editor/lock'
import { UnlockOutlined } from 'jimu-icons/outlined/editor/unlock'
import {
  useApsAuth,
  ModelViewerProvider,
  type defaultSharedMessages,
  modelViewerDisabledSelector,
  type ActionTypes,
  setModelViewerDisabled,
  geoBIMWidgetContainerStyle,
  loadingContainerStyle,
  useGeoBIM,
  selectionWarningStyle,
  hidableContainerStyle,
  ApsLogIn,
  UserTypeNotPermissible
} from 'widgets/shared-code/geobim'
import { useGeoBimModelViewerWidget } from '../hooks/use-geobim-model-viewer-widget'
import ModelViewer from './model-viewer'
import type defaultMessages from '../translations/default'
import {
  modelViewerHeader,
  noDocumentMessage,
} from '../styles'
const { useSelector, useDispatch } = ReactRedux
const { useState } = React

export interface ModelViewerImplProps {
  theme: IMThemeVariables
  widgetId: string
  i18nMessage: (
    id: keyof typeof defaultMessages | keyof typeof defaultSharedMessages.default,
    values?: { [key: string]: string }
  ) => string
}

const ModelViewerWidget = (props: ModelViewerImplProps): JSX.Element => {
  const { theme, widgetId, i18nMessage } = props
  const modelViewerDisabled = useSelector((state: IMState) =>
    modelViewerDisabledSelector(widgetId, state)
  )
  const { apsAuthenticated, userHasPermission, geoBIMInitialized } = useGeoBIM()
  const { getApsAuthToken } = useApsAuth()
  const dispatch = useDispatch<Dispatch<ActionTypes>>()
  const {
    modelViewerTitle,
    modelViewerOptions,
    bimDocument,
    documentLoading,
    widgetLoading,
    multipleFeatureSelectionWarning,
    cancelMultipleFeatureSelectionWarning
  } = useGeoBimModelViewerWidget(
    widgetId,
    modelViewerDisabled,
    getApsAuthToken,
    i18nMessage
  )
  const [hasBimDocumentDisplayed, setHasBimDocumentDisplayed] = useState<boolean>(false)
  const lockButtonDisabled = documentLoading || !apsAuthenticated || bimDocument == null
  const showMultipleFeatureSelectionWarning = multipleFeatureSelectionWarning && !widgetLoading
  const hideModelViewer = (widgetLoading && !hasBimDocumentDisplayed) || showMultipleFeatureSelectionWarning
  const showUserPermissionDenied = !userHasPermission && geoBIMInitialized
  if (!hasBimDocumentDisplayed && bimDocument) {
    setHasBimDocumentDisplayed(true)
  }

  const getDocumentLockTooltip = (): string => {
    if (lockButtonDisabled) return i18nMessage('documentLockDisabledMessage')

    if (modelViewerDisabled) {
      return i18nMessage('documentLockedMessage')
    } else {
      return i18nMessage('documentUnlockedMessage')
    }
  }

  const toggleDocumentLock = (): void => {
    setModelViewerDisabled(widgetId, !modelViewerDisabled, dispatch)
  }

  const renderModelViewer = (): JSX.Element => {
    return (
      <>
        {widgetLoading && (
          <div css={loadingContainerStyle(theme)}>
            <Loading />
          </div>
        )}
        {showMultipleFeatureSelectionWarning && (
          <>
            <div css={noDocumentMessage(theme)}>
              {i18nMessage('noDocument')}
            </div>
            <div css={selectionWarningStyle(theme)}>
              <Alert
                text={i18nMessage('geobim_multipleFeatures')}
                aria-live="polite"
                closable={true}
                open={true}
                onClose={() => {
                  cancelMultipleFeatureSelectionWarning()
                }}
                size="medium"
                type="warning"
                withIcon
              />
            </div>
          </>
        )}
        <div css={hidableContainerStyle(theme, hideModelViewer)}>
          <ModelViewerProvider options={modelViewerOptions}>
            <ModelViewer
              bimDocument={bimDocument}
              theme={theme}
              i18nMessage={i18nMessage}
            />
          </ModelViewerProvider>
        </div>
      </>
    )
  }
  return (
    <div css={geoBIMWidgetContainerStyle(theme)} className="jimu-widget widget-document-viewer">
      <div css={modelViewerHeader(theme)}>
        {modelViewerTitle}
        <div title={getDocumentLockTooltip()}>
          <Button
            type={modelViewerDisabled ? 'primary' : 'default'}
            onClick={() => {
              toggleDocumentLock()
            }}
            disabled={lockButtonDisabled}
            icon={true}
          >
            {modelViewerDisabled ? <LockOutlined /> : <UnlockOutlined />}
          </Button>
        </div>
      </div>
      {showUserPermissionDenied && (
        <UserTypeNotPermissible
          userTypeNotPermissibleLinkText={i18nMessage('geobim_userTypeLink')}
          userTypeNotPermissibleText={i18nMessage('geobim_userTypeNote', {
            widget_name: i18nMessage('widgetTitle')
          })}
          theme={theme}
        />
      )}
      {!apsAuthenticated && !showUserPermissionDenied && (
        <ApsLogIn
          logInLinkText={i18nMessage('geobim_logInLink')}
          loginMessageFirstLine={i18nMessage('geobim_logInText')}
          loginMessageSecondLine={i18nMessage('geobim_logInTip')}
          theme={theme}
        />
      )}
      {apsAuthenticated && !showUserPermissionDenied && <>{renderModelViewer()}</>}
    </div>
  )
}

export default ModelViewerWidget
