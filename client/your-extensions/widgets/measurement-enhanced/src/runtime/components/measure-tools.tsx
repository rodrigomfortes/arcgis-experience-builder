/** @jsx jsx */
import { React, css, jsx, classNames } from 'jimu-core'
import { Button } from 'jimu-ui'

// Componentes SVG para ícones profissionais
const DistanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="6" cy="12" r="2" fill="currentColor"/>
    <path d="M8 12h8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="18" cy="12" r="2" fill="currentColor"/>
  </svg>
)

const AreaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 6L18 18L6 18Z" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
  </svg>
)

type MeasurementClass = 'distance' | 'area' | ''

interface MeasureButton {
  name: 'measureDistance' | 'measureArea'
  icon: string
  enabled: boolean
}

interface MeasureToolsProps {
  activeButton: 'measureDistance' | 'measureArea' | ''
  activeTool: MeasurementClass
  onSelectTool: (measureButton: MeasureButton) => void
  onClear: () => void
  angularSnap?: boolean
  folderUrl?: string
}

const style = css`
&.measure-toolbar {
  height: 40px;
  .measure-tools {
    height: 24px;
    .measure-tool {
      border-radius: var(--sys-shape-1) !important;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      
      &:hover {
        background-color: var(--sys-color-action-hover);
        transform: translateY(-1px);
      }
      
      &.active {
        color: var(--sys-color-action-selected-text);
        background-color: var(--sys-color-action-selected);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      svg {
        transition: all 0.2s ease;
      }
      
      &:hover svg {
        transform: scale(1.1);
      }
    }
  }
}
`

const MeasureTools = React.forwardRef((props: MeasureToolsProps, ref: React.Ref<HTMLDivElement>): React.ReactElement => {
  const {
    activeButton,
    onSelectTool,
    onClear,
    angularSnap
  } = props

  const measureButtons: MeasureButton[] = [
    {
      name: 'measureDistance',
      icon: 'measure',
      enabled: true
    },
    {
      name: 'measureArea',
      icon: 'polygon',
      enabled: true
    }
  ]

  return (
    <div ref={ref} className='measure-toolbar d-flex justify-content-between p-2' css={style}>
      <div className='measure-tools d-flex'>
        {measureButtons.filter(m => m.enabled).map((measureButton) => (
          <Button
            key={measureButton.name}
            icon
            type='tertiary'
            className={classNames('measure-tool p-0 me-2', { active: activeButton === measureButton.name })}
            onClick={() => {
              onSelectTool(measureButton)
            }}
            aria-label={measureButton.name}
          >
            {measureButton.icon === 'measure' ? <DistanceIcon /> : <AreaIcon />}
          </Button>
        ))}
      </div>
      <div className='d-flex align-items-center'>
        {angularSnap && (
          <div 
            style={{
              fontSize: '10px',
              color: '#0079c1',
              fontWeight: 'bold',
              marginRight: '8px',
              padding: '2px 6px',
              backgroundColor: '#e6f3ff',
              borderRadius: '3px',
              border: '1px solid #0079c1'
            }}
            title="Snap Angular Ativo - Ângulos: 90°, 45°, 30°"
          >
            SNAP
          </div>
        )}
        <Button
          icon
          type='tertiary'
          className='measure-tool p-0'
          onClick={onClear}
          aria-label='Limpar medições'
        >
          <TrashIcon />
        </Button>
      </div>
    </div>
  )
})

export default MeasureTools