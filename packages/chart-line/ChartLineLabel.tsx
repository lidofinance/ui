import { ForwardedRef, forwardRef, useLayoutEffect } from 'react'

import { ChartLineLabelProps, ThresholdType } from './types.js'
import { ThresholdLabelStyle, ThresholdStyle } from './ChartLineStyles.js'
import { handlePositioning } from './utils/index.js'

export const ChartLineLabel = forwardRef(
  (props: ChartLineLabelProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const {
      previousIds,
      id,
      color,
      zIndex,
      show,
      labelPosition,
      thresholdType,
      height,
      threshold,
      ...rest
    } = props

    useLayoutEffect(() => {
      if (!show) return
      if (thresholdType !== ThresholdType.flag) {
        handlePositioning({ previousIds, id, reset: true })
      } else {
        handlePositioning({ previousIds, id })
      }
    }, [previousIds, id, show, thresholdType])

    if (!show) return null

    const backgroundColor = threshold.color || color
    const content = threshold.descriptionElement || threshold.description

    return (
      <ThresholdStyle
        ref={ref}
        id={id}
        data-label-position={labelPosition}
        $labelPosition={labelPosition}
        $thresholdType={thresholdType}
        $height={height}
        $backgroundColor={backgroundColor}
        $zIndex={zIndex}
        {...rest}
      >
        {thresholdType === ThresholdType.flag && (
          <ThresholdLabelStyle
            style={{ backgroundColor }}
            id={`${id}-description`}
            $labelPosition={labelPosition}
          >
            {content}
          </ThresholdLabelStyle>
        )}
      </ThresholdStyle>
    )
  },
)
ChartLineLabel.displayName = 'ChartLineLabel'
