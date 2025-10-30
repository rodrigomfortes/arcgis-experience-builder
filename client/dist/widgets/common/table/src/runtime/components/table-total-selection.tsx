/** @jsx jsx */
import { React, jsx, hooks, useIntl, css, polished, type IMThemeVariables } from 'jimu-core'
import { useTheme } from 'jimu-theme'
import * as reactiveUtils from 'esri/core/reactiveUtils'
import defaultMessages from '../translations/default'

export interface Props {
  table: __esri.FeatureTable
  showCount: boolean
  onSelectedChange: (tableSelected: number) => void
}

const getStyles = (theme: IMThemeVariables) => css`
  &.table-count{
    height: 16px;
    .total-count-text{
      background: ${polished.rgba(theme?.ref.palette?.neutral?.[200], 0.65)};
      color: ${theme.ref.palette?.black};
      font-size: 12px;
      line-height: 16px;
      padding: 0 7px;
    }
  }
`

const TableTotalSelection = (props: Props) => {
  const { table, showCount, onSelectedChange } = props
  const [tableTotal, setTableTotal] = React.useState(table?.size || 0)
  const [tableSelected, setTableSelected] = React.useState(table?.highlightIds?.length || 0)
  const intl = useIntl()
  const formattedCount = React.useMemo(() => { return intl.formatNumber(tableTotal, { useGrouping: true }) }, [intl, tableTotal])
  const formattedSelected = React.useMemo(() => { return intl.formatNumber(tableSelected, { useGrouping: true }) }, [intl, tableSelected])

  React.useEffect(() => {
    const watchTotal = reactiveUtils.watch(() => table?.size, (tableTotal: number) => {
      setTableTotal(tableTotal || 0)
    }, { initial: true, sync: true })
    const watchSelected = reactiveUtils.watch(() => table?.highlightIds?.length, (tableSelected: number) => {
      setTableSelected(tableSelected || 0)
      onSelectedChange(tableSelected || 0)
    }, { initial: true, sync: true })
    return () => {
      watchTotal?.remove()
      watchSelected?.remove()
    }
  }, [onSelectedChange, table])

  const theme = useTheme()
  const translate = hooks.useTranslation(defaultMessages)

  return (
    <React.Fragment>
      {showCount &&
        <div className='table-count d-flex align-items-center' css={getStyles(theme)}>
          <div className='flex-grow-1 total-count-text text-truncate'>
            {translate('tableCount', { total: formattedCount, selected: formattedSelected })}
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export default TableTotalSelection
