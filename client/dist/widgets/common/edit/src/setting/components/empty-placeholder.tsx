/** @jsx jsx */
import { jsx, hooks, type IMThemeVariables, css } from 'jimu-core'
import { defaultMessages as jimuUIMessages } from 'jimu-ui'
import defaultMessages from '../translations/default'
import { ClickOutlined } from 'jimu-icons/outlined/application/click'
import { useTheme } from 'jimu-theme'

const getStyle = (theme: IMThemeVariables) => {
  return css`
    &.empty-placeholder {
      display: flex;
      flex-flow: column;
      justify-content: center;
      height: calc(100% - 260px);
      overflow: hidden;
      .empty-placeholder-inner {
        padding: 0px 20px;
        flex-direction: column;
        align-items: center;
        display: flex;

        .empty-placeholder-text {
          color: ${theme.ref.palette.neutral[1000]};
          font-size: 14px;
          margin-top: 16px;
          text-align: center;
        }
        .empty-placeholder-icon {
          color: ${theme.ref.palette.neutral[800]};
        }
      }
    }
  `
}

interface EmptyPlaceholderProps {
  isGeoMode: boolean
}

const EmptyPlaceholder = (props: EmptyPlaceholderProps) => {
  const { isGeoMode } = props
  const translate = hooks.useTranslation(defaultMessages, jimuUIMessages)
  const theme = useTheme()

  const newEditString = translate('newEdit')
  const modeString = translate('editableSource')
  const blankStatusString = isGeoMode
    ? translate('selectMapHint')
    : translate('editBlankStatus', {
      EditString: newEditString,
      ModeString: modeString
    })

  return <div className='empty-placeholder w-100' css={getStyle(theme)}>
    <div className='empty-placeholder-inner'>
      <div className='empty-placeholder-icon'><ClickOutlined size={48} /></div>
        <div className='empty-placeholder-text' id='edit-blank-msg'>
          {blankStatusString}
        </div>
    </div>
  </div>
}

export default EmptyPlaceholder
