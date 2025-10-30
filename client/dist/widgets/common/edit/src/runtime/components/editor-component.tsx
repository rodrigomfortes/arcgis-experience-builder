/** @jsx jsx */
import {
  React, jsx, Immutable, type IMUseDataSource, type DataSourceTypes, type ImmutableArray,
  type FeatureDataRecord, dataSourceUtils, hooks
} from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { WidgetPlaceholder } from 'jimu-ui'
import * as reactiveUtils from 'esri/core/reactiveUtils'
import editWidgetIcon from '../../../icon.svg'
import { getDataSourceById, getFlatFormElements, supportedDsTypes } from '../../utils'
import {
  type EditFeatures, flatMapArrayWithView, idsArrayEquals, queryFullFeatures, useVisible
} from './utils'
import EditListDataSource from './edit-list-ds'
import useEditor from './use-editor'
import type { CommonProps } from '../widget'
import defaultMessages from '../translations/default'

interface EditorComponentProps extends CommonProps {
  useMapWidgetIds: ImmutableArray<string>
}

const EditorComponent = (props: EditorComponentProps) => {
  const { config, canEditFeature, useMapWidgetIds } = props
  const { mapViewsConfig, batchEditing = false } = config

  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>(null)
  const [mapUseDataSources, setMapUseDataSources] = React.useState<IMUseDataSource[]>()
  const [editFeatures, setEditFeatures] = React.useState<EditFeatures>({})

  const translate = hooks.useTranslation(defaultMessages)

  const editContainer = React.useRef<HTMLDivElement>(null)
  const editor = useEditor({
    config,
    jimuMapView,
    editContainer,
    canEditFeature
  })

  const updateUseDataSourcesByLayerInfos = React.useCallback(async (layerInfos: __esri.EditorLayerInfo[]) => {
    if (!jimuMapView || jimuMapView.isDestroyed() || !layerInfos) return
    const viewConfig = mapViewsConfig?.[jimuMapView.id]
    const customizeLayers = viewConfig?.customizeLayers
    const customJimuLayerViewIds = viewConfig?.customJimuLayerViewIds
    const newMapUseDataSources = []
    for (const layerInfo of layerInfos) {
      try {
        if (!layerInfo.enabled || (layerInfo.layer as __esri.FeatureLayer).isTable) continue
        const jimuLayerViewId = jimuMapView.getJimuLayerViewIdByAPILayer(layerInfo.layer)
        if (customizeLayers && !customJimuLayerViewIds?.includes(jimuLayerViewId)) continue
        const jimuLayerView = await jimuMapView.whenJimuLayerViewLoaded(jimuLayerViewId)
        const layerDs = jimuLayerView.getLayerDataSource()
        if (!layerDs || !supportedDsTypes.includes(layerDs.type as DataSourceTypes)) continue
        const mainDs = layerDs.getMainDataSource()
        const rootDs = layerDs.getRootDataSource()
        const usedDs: IMUseDataSource = Immutable({
          dataSourceId: layerDs.id,
          mainDataSourceId: mainDs?.id,
          dataViewId: layerDs.dataViewId,
          rootDataSourceId: rootDs?.id
        })
        newMapUseDataSources.push(usedDs)
      } catch (e) {
        continue
      }
    }
    setMapUseDataSources(newMapUseDataSources)
  }, [jimuMapView, mapViewsConfig])

  const handleActiveViewChange = React.useCallback((jimuMapView: JimuMapView) => {
    setJimuMapView(jimuMapView)
  }, [])

  const startWorkflow = React.useCallback(async (features: EditFeatures) => {
    if (!editor || !jimuMapView || selectionFromEditor.current) return
    if (editor.activeWorkflow) {
      editor.cancelWorkflow()
    }
    // The number of selected(the layers from the same map)
    const selectionManager = (editor as any).effectiveSelectionManager
    const featureRecords = flatMapArrayWithView(features, jimuMapView)
    if (featureRecords.length === 0) {
      selectionManager?.hasSelection && selectionManager.clear()
    } else {
      selectionFromExb.current = true
      let fullFeatures: __esri.Graphic[] = []
      try {
        fullFeatures = await queryFullFeatures(jimuMapView, features)
      } catch (err) {
        console.error('Failed to query editing features:', err)
      }
      if (fullFeatures.length === 0) {
        selectionManager?.hasSelection && selectionManager.clear()
        console.error('No features found for the selected data records.')
      } else if (fullFeatures.length === 1) {
        selectionManager?.hasSelection && selectionManager.clear()
        const activeFeature = fullFeatures[0]
        editor.startUpdateWorkflowAtFeatureEdit(activeFeature)
      } else if (fullFeatures.length > 1) {
        if (jimuMapView.view.type === '2d' && batchEditing) {
          selectionManager?.hasSelection && selectionManager.clear()
          selectionManager && selectionManager.updateSelection({
            current: fullFeatures,
            added: [],
            removed: [],
          })
        } else {
          editor.startUpdateWorkflowAtMultipleFeatureSelection(fullFeatures)
        }
      }
    }
  }, [batchEditing, editor, jimuMapView])

  const selectionFromEditor = React.useRef(false)
  const selectionFromExb = React.useRef(false)
  const visible = useVisible(editContainer.current)
  const handleSelectionChange = React.useCallback((dataSourceIds: string[]) => {
    const newEditFeatures = Object.assign({}, editFeatures)
    for (const dataSourceId of dataSourceIds) {
      const dataSource = getDataSourceById(dataSourceId)
      if (!dataSource) continue
      const selectedRecords = dataSource.getSelectedRecords() as FeatureDataRecord[]
      newEditFeatures[dataSourceId] = selectedRecords
    }
    setEditFeatures(newEditFeatures)
    if (selectionFromEditor.current) {
      window.setTimeout(() => {
        selectionFromEditor.current = false
      }, 50)
    } else if (visible) {
      startWorkflow(newEditFeatures)
    }
  }, [editFeatures, startWorkflow, visible])

  const handleSourceVersionChange = React.useCallback((dataSourceId: string) => {
    const featureRecords = flatMapArrayWithView(editFeatures, jimuMapView)
    const featureCount = featureRecords.length
    if (!editor?.viewModel.syncing || featureCount === 1) {
      handleSelectionChange([dataSourceId])
    }
  }, [editFeatures, editor, handleSelectionChange, jimuMapView])

  const editFeatureRef = hooks.useLatest(editFeatures)
  React.useEffect(() => {
    if (visible && !editor?.activeWorkflow?.started) {
      startWorkflow(editFeatureRef.current)
    }
    if (!visible && editor?.activeWorkflow?.started) {
      editor.activeWorkflow.cancel()
    }
  }, [editFeatureRef, editor, startWorkflow, visible])

  const [formChange, setFormChange] = React.useState(false)
  React.useEffect(() => {
    if (!editor || !jimuMapView) return
    // #region Sync selection - 2d view with multiple selection
    // Editor added a new selection mechanism of SelectionToolbar/SelectionManager in 4.33.
    // The SelectionManager only works in 2D view with multiple selection.
    const selectionManager = (editor as any).effectiveSelectionManager
    const selectionChangeHandle = jimuMapView.view.type === '2d' && batchEditing && selectionManager.on('selection-change', async (evt) => {
      if (selectionFromExb.current) {
        selectionFromExb.current = false
        return
      }
      const rootDs = jimuMapView.getMapDataSource()
      for (const change of (evt.changes || [])) {
        const layer = change.layer
        if (!layer) continue
        const dsId = dataSourceUtils.getDataSourceIdByJSAPILayer(rootDs, layer)
        const ds = getDataSourceById(dsId)
        if (!ds) continue
        const layerSelectedIds = change.selection.map(id => id.toString()) || []
        const dsSelectedIds = ds.getSelectedRecordIds()
        if (!idsArrayEquals(layerSelectedIds, dsSelectedIds) && (layerSelectedIds.length !== 0 || dsSelectedIds.length !== 0)) {
          if (layerSelectedIds.length === 0) {
            ds.clearSelection()
          } else {
            const records = (await ds.query({
              objectIds: layerSelectedIds.map(id => id.toString()),
              outFields: ['*'],
              returnGeometry: true
            }))?.records as FeatureDataRecord[]
            ds.selectRecordsByIds(records.map(r => r.getId()), records)
          }
          selectionFromEditor.current = true
        }
      }
    })
    // #endregion

    // #region Sync selection - 3D view and 2d view with single selection
    // Editor kept the old selection mechanism of candidates and rootFeature in 4.33 for 3d view and 2d view with single selection.
    const watchCandidates = reactiveUtils.watch(() => (editor.viewModel?.activeWorkflow?.data as __esri.UpdateWorkflowData)?.candidates, (candidates, oldCandidates) => {
      if (jimuMapView.view.type === '2d' && batchEditing && selectionManager.hasSelection) return
      if (selectionFromExb.current || editor.viewModel.syncing || (editor.viewModel as any).updating) {
        if (candidates !== undefined) {
          selectionFromExb.current = false
        }
        return
      }
      // In 4.33, the candidates is null on single selections, so we need to use rootFeature instead.
      const data = editor.viewModel?.activeWorkflow?.data as any
      const candidateFeatures = candidates || (data?.rootFeature ? [data.rootFeature] : [])
      const candidateFeatureMap: {[layerId: string]: __esri.Graphic[]} = {}
      for (const c of (candidateFeatures || [])) {
        if (!candidateFeatureMap[c.layer.id]) {
          candidateFeatureMap[c.layer.id] = []
        }
        candidateFeatureMap[c.layer.id].push(c)
      }
      const layers = editor.layerInfos.map(l => l.layer)
      for (const layer of layers) {
        const rootDs = jimuMapView.getMapDataSource()
        const dsId = dataSourceUtils.getDataSourceIdByJSAPILayer(rootDs, layer)
        const ds = getDataSourceById(dsId)
        if (!ds) continue
        const candidateFeatures = candidateFeatureMap[layer.id] || []
        const candidateIds: string[] = []
        const candidateRecords = []
        for (const feature of candidateFeatures) {
          const record = ds.buildRecord(feature)
          candidateRecords.push(record)
          candidateIds.push(record.getId())
        }
        const selectedIds = ds.getSelectedRecordIds()
        if (!idsArrayEquals(selectedIds, candidateIds) && (selectedIds.length !== 0 || candidateIds.length !== 0)) {
          ds.selectRecordsByIds(candidateIds, candidateRecords)
          selectionFromEditor.current = true
        }
      }
    })
    // #endregion

    // #region Monitor form changes
    const watchFeatureForm = reactiveUtils.watch(() => (editor.viewModel as any)?.formViewModel as __esri.FeatureFormViewModel | __esri.BatchAttributeFormViewModel, (formViewModel) => {
      if (!formViewModel) {
        setFormChange(false)
        return
      }
      if ('features' in formViewModel) {
        const batchAttributeFormViewModel = formViewModel as any
        batchAttributeFormViewModel.on('value-change', (changedValue) => {
          setFormChange(batchAttributeFormViewModel.userHasChangedValues)
        })
      } else if ('feature' in formViewModel) {
        const featureFormViewModel = formViewModel
        const originalFormValues = featureFormViewModel.getValues()
        featureFormViewModel.on('value-change', (changedValue) => {
          const idField = featureFormViewModel.layer.objectIdField
          const arcadeFields = getFlatFormElements(featureFormViewModel.formTemplate?.elements || [])
            .map(e => e.type === 'field' && e.valueExpression && e.fieldName).filter(v => !!v) || []
          const { fieldName } = changedValue
          // Exclude cases where the 'value-change' is caused by dataSource select or arcade expression change.
          // If the changed field has an idField, the change is caused by dataSource select change.
          if (fieldName === idField || arcadeFields.includes(fieldName)) {
            return
          }
          const newFormValues = featureFormViewModel.getValues()
          let change = false
          if (newFormValues) {
            for (const key in newFormValues) {
              if (arcadeFields.includes(key)) continue
              if (originalFormValues?.[key] !== newFormValues[key]) {
                change = true
                break
              }
            }
          }
          setFormChange(change)
        })
      }
    })
    // #endregion
    return () => {
      selectionChangeHandle?.remove?.()
      watchCandidates?.remove?.()
      watchFeatureForm.remove()
    }
  }, [editor, jimuMapView, batchEditing])

  React.useEffect(()=> {
    if (!editor) return
    const watchLayerInfos = reactiveUtils.watch(() => editor?.layerInfos, (layerInfos) => {
      updateUseDataSourcesByLayerInfos(layerInfos)
    }, { initial: true })
    return () => {
      watchLayerInfos.remove()
    }
  }, [editor, updateUseDataSourcesByLayerInfos])

  const mapWidgetId = useMapWidgetIds?.[0]
  return (
    <div className='jimu-widget widget-edit esri-widget'>
      {mapWidgetId && <div className='edit-con h-100' ref={editContainer}></div>}
      {!mapWidgetId && <WidgetPlaceholder
        autoFlip
        icon={editWidgetIcon}
        name={translate('_widgetLabel')}
        data-testid='editPlaceholder'
      />}
      <JimuMapViewComponent
        useMapWidgetId={mapWidgetId}
        onActiveViewChange={handleActiveViewChange}
      />
      {mapWidgetId && !jimuMapView && <div className='jimu-secondary-loading' />}
      {editor &&<EditListDataSource
        useDataSources={mapUseDataSources}
        unsavedChange={formChange}
        onSelectionChange={handleSelectionChange}
        onSourceVersionChange={handleSourceVersionChange}
      />}
    </div>
  )
}

export default EditorComponent
