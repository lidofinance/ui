import {
  ForwardedRef,
  forwardRef,
  useMemo,
  useLayoutEffect,
  useState,
} from 'react'

import { InlineLoader } from '../loaders/index.js'

import { ChartLineLabel } from './ChartLineLabel.js'
import {
  CHART_LINE_CONTAINER_ID,
  getContainerSize,
  processData,
} from './utils/index.js'
import { ContainerStyle, LineStyle, WrapperStyle } from './ChartLineStyles.js'
import { ChartLineProps } from './types.js'

export const ChartLine = forwardRef(
  (props: ChartLineProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const {
      loading = false,
      onClick,
      children,
      height,
      border,
      data,
      showLabels,
      maxValue,
      thresholdType,
      ...rest
    } = props

    const [containerSize, setContainerSize] = useState<{
      size: number
      isCenterAlign: boolean
    } | null>(null)

    const { data: processedData, ids } = useMemo(
      () => processData(data, maxValue),
      [data, maxValue],
    )

    const allPreviousIds = useMemo(
      () => ids.map((_, index) => ids.slice(0, index)),
      [ids],
    )

    useLayoutEffect(() => {
      if (!showLabels) {
        setContainerSize(null)
        return
      }
      const containerSize = getContainerSize(ids)
      setContainerSize(containerSize)
    }, [ids, showLabels])

    if (loading) {
      return (
        <WrapperStyle $border={border} $height={height} ref={ref} {...rest}>
          <InlineLoader />
        </WrapperStyle>
      )
    }

    return (
      <ContainerStyle
        id={CHART_LINE_CONTAINER_ID}
        $alignItems={containerSize?.isCenterAlign ? 'center' : 'flex-start'}
        $height={containerSize?.size ?? 0}
      >
        <WrapperStyle $border={border} $height={height} ref={ref} {...rest}>
          {processedData.map((item, index) => {
            const { color, id, width } = item
            const previousIds = allPreviousIds[index]

            return (
              <LineStyle
                key={id}
                $width={`${width}%`}
                $backgroundColor={color}
                $zIndex={processedData.length - index}
                $border={border}
                $isFullWidth={width === 100}
              >
                <ChartLineLabel
                  zIndex={processedData.length - index}
                  show={showLabels}
                  previousIds={previousIds}
                  height={height}
                  thresholdType={thresholdType}
                  {...item}
                />
              </LineStyle>
            )
          })}
        </WrapperStyle>
      </ContainerStyle>
    )
  },
)
ChartLine.displayName = 'ChartLine'
