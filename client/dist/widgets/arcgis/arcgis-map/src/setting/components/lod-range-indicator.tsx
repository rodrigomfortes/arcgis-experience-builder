/** @jsx jsx */
import { React, jsx, css, clamp, classNames } from 'jimu-core'
import type { ScaleRange } from '../../config'

interface LodRangeIndicatorProps {
  scaleRangeSlider: __esri.ScaleRangeSlider
  scaleRangleLimit: ScaleRange
  lodScaleRange: ScaleRange
  className?: string
}

function isValidScale (scale: number): boolean {
  return typeof scale === 'number' && scale >= 0
}

export function LodRangeIndicator (props: LodRangeIndicatorProps) {
  const scaleRangeSlider = props.scaleRangeSlider
  const scaleRangeSliderViewModel = scaleRangeSlider?.viewModel
  const sliderViewModel = scaleRangeSliderViewModel?.sliderViewModel
  const scaleRangleLimit = props.scaleRangleLimit
  const minScaleLimit = scaleRangleLimit?.minScale
  const maxScaleLimit = scaleRangleLimit?.maxScale
  const lodScaleRange = props.lodScaleRange
  const lodMinScale = lodScaleRange?.minScale
  const lodMaxScale = lodScaleRange?.maxScale

  let isValid = false
  let leftRatio = 0
  let rightRatio = 0

  if (
    isValidScale(minScaleLimit) &&
    isValidScale(maxScaleLimit) &&
    minScaleLimit > maxScaleLimit &&
    isValidScale(lodMinScale) &&
    isValidScale(lodMaxScale) &&
    lodMinScale >= lodMaxScale &&
    scaleRangeSliderViewModel &&
    sliderViewModel
  ) {
    isValid = true
    const finalLodMinScale = clamp(lodMinScale, maxScaleLimit, minScaleLimit)
    const finalLodMaxScale = clamp(lodMaxScale, maxScaleLimit, minScaleLimit)
    const sliderMaxValue = sliderViewModel.max
    // slider length from left lod anchor to component left
    const distFromLeftLodAnchorToComponentLeft = scaleRangeSliderViewModel.mapScaleToSlider(finalLodMinScale)
    // slider length from right lod anchor to component left
    const distFromRightLodAnchorToComponentLeft = scaleRangeSliderViewModel.mapScaleToSlider(finalLodMaxScale)
    leftRatio = clamp(distFromLeftLodAnchorToComponentLeft / sliderMaxValue * 100, 0, 100)
    rightRatio = clamp((sliderMaxValue - distFromRightLodAnchorToComponentLeft) / sliderMaxValue * 100, 0, 100)
  }

  const style = css`
    position: relative;
    height: 8px;

    .full-line {
      position: absolute;
      width: 100%;
      height: 2px;
      top: 3px;
      background: var(--ref-palette-neutral-600);
    }

    .lod-segment {
      position: absolute;
      height: 2px;
      top: 3px;
      left: ${leftRatio}%;
      right: ${rightRatio}%;
      background: var(--ref-palette-neutral-900);
    }

    .lod-anchor {
      position: absolute;
      width: 2px;
      height: 8px;
      background: var(--ref-palette-neutral-900);
    }

    .left-lod-anchor {
      left: ${leftRatio}%;
      right: auto;
      margin-left: -3px;
    }

    .right-lod-anchor {
      left: auto;
      right: ${rightRatio}%;
      margin-right: -3px;
    }
  `

  return (
   <div className={classNames('lod-range-indicator', props.className)} css={style}>
     <div className='full-line'></div>
     {
      isValid &&
      <React.Fragment>
        <div className='lod-segment'></div>
        <div className='lod-anchor left-lod-anchor'></div>
        <div className='lod-anchor right-lod-anchor'></div>
      </React.Fragment>
     }
   </div>
  )
}
