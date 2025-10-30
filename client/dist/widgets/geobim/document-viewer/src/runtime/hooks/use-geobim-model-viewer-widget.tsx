import { React } from 'jimu-core'
import {
  type defaultSharedMessages,
  useGeoBIM,
  type IModelViewerOptions,
  type SelectedBimDocument} from 'widgets/shared-code/geobim'
import { useDocumentSelection } from './use-document-selection'
import type defaultMessages from '../translations/default'
const { useMemo } = React

interface GeoBimModelViewerWidgetContextType {
  modelViewerTitle: string
  modelViewerOptions: IModelViewerOptions
  bimDocument: SelectedBimDocument | null
  documentLoading: boolean
  widgetLoading: boolean
  multipleFeatureSelectionWarning: boolean
  cancelMultipleFeatureSelectionWarning: () => void
}

const useGeoBimModelViewerWidget = (
  widgetId: string,
  modelViewerDisabled: boolean,
  getApsAuthToken: () => Promise<string | null>,
  i18nMessage: (
    id: keyof typeof defaultMessages | keyof typeof defaultSharedMessages.default,
    values?: { [key: string]: string }
  ) => string
): GeoBimModelViewerWidgetContextType => {
  const { geoBIMLoading, geoBIMInitialized} = useGeoBIM()
  const {
    bimDocument,
    documentLoading,
    multipleFeatureSelectionWarning,
    cancelMultipleFeatureSelectionWarning
  } = useDocumentSelection(
    widgetId,
    modelViewerDisabled
  )

  const modelViewerTitle = useMemo((): string => {
    if (bimDocument?.document == null) return i18nMessage('widgetTitle')

    return bimDocument?.document.displayName || i18nMessage('noDocumentTitle')
  }, [bimDocument, i18nMessage])

  const modelViewerOptions = useMemo(() => {
    const options: IModelViewerOptions = {
      getAccessToken: async () => {
        return await getApsAuthToken() // getApsAuthToken is already wrapped in a useCallback()
      }
    }
    return options
  }, [getApsAuthToken])

  const widgetLoading = useMemo((): boolean => {
    // loading reloads model viewer documents, so prevent it during disabled state!
    if (modelViewerDisabled) return false

    return documentLoading || geoBIMLoading || !geoBIMInitialized
  }, [documentLoading, geoBIMInitialized, geoBIMLoading, modelViewerDisabled])

  // memoize hook context and wrap all callback functions in useCallback()
  const modelViewerReturn: GeoBimModelViewerWidgetContextType = useMemo(
    () => ({
      modelViewerTitle,
      modelViewerOptions,
      bimDocument,
      documentLoading,
      widgetLoading,
      multipleFeatureSelectionWarning,
      cancelMultipleFeatureSelectionWarning
    }),
    [
      modelViewerTitle,
      modelViewerOptions,
      bimDocument,
      documentLoading,
      widgetLoading,
      multipleFeatureSelectionWarning,
      cancelMultipleFeatureSelectionWarning
    ]
  )

  return modelViewerReturn
}

export { useGeoBimModelViewerWidget }
