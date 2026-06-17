import { ForwardedRef, forwardRef } from 'react'

import { InlineLoader } from '../loaders/index.js'

import {
  ProportionStyle,
  WrapperStyle,
  ProportionProgressStyle,
  ProportionProgressLineStyle,
  ProportionLabelStyle,
} from './ChartProportionStyles.js'
import { ChartProportionProps } from './types.js'

export const ChartProportion = forwardRef(
  (props: ChartProportionProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const {
      loading = false,
      onClick,
      children,
      height,
      border,
      data,
      showLabels,
      margin,
      borderSize,
      ...rest
    } = props

    if (loading) {
      return (
        <WrapperStyle $height={height} ref={ref} {...rest}>
          <InlineLoader />
        </WrapperStyle>
      )
    }

    return (
      <WrapperStyle $height={height} ref={ref} {...rest}>
        {data.map((item, index) => {
          const { color, value, progress, label } = item
          const isShowLabel = showLabels && label

          return (
            <ProportionStyle
              key={index}
              $flexGrow={value}
              $backgroundColor={color}
              $border={border}
              $borderSize={borderSize}
              $margin={margin}
            >
              {isShowLabel && (
                <ProportionLabelStyle>{label}</ProportionLabelStyle>
              )}
              <ProportionProgressStyle
                $progress={progress}
                $backgroundColor={color}
                $border={border}
                $borderSize={borderSize}
              >
                {progress !== 100 && <ProportionProgressLineStyle />}
              </ProportionProgressStyle>
            </ProportionStyle>
          )
        })}
      </WrapperStyle>
    )
  },
)
ChartProportion.displayName = 'ChartProportion'
