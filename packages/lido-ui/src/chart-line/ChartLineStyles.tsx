import styled, { css } from '../utils/styled-components-wrapper.js'
import { ChartLineBorderType, ChartLineThresholdType } from './types.js'

export const ContainerStyle = styled.div<{
  $alignItems: 'center' | 'flex-start'
  $height: number
}>`
  display: flex;
  width: 100%;
  align-items: ${({ $alignItems }) => $alignItems};
  height: ${({ $height }) => $height}px;
`

export const WrapperStyle = styled.div<{
  $border: ChartLineBorderType
  $height: number
}>`
  display: flex;
  width: 100%;
  height: ${({ $height }) => $height}px;
  background: rgb(19 18 23 / 8%);
  position: relative;

  ${({ $border }) => {
    if ($border === ChartLineBorderType.rounded) {
      return css`
        border-radius: 4px;
      `
    }
    return css``
  }}
`

export const ThresholdStyle = styled.div<{
  $labelPosition?: 'top' | 'bottom'
  $thresholdType: ChartLineThresholdType
  $height: number
  $backgroundColor?: string
  $zIndex: number
}>`
  height: ${({ $height }) => $height + 38}px;
  width: 5px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  z-index: ${({ $zIndex }) => $zIndex};
  position: absolute;
  border-radius: 3px;
  top: -2px;
  right: -2px;

  ${({ $labelPosition }) => {
    if ($labelPosition === 'top') {
      return css`
        bottom: -2px;
        top: unset;
      `
    }
    return css``
  }}

  ${({ $thresholdType, $height }) => {
    if ($thresholdType === ChartLineThresholdType.dash) {
      return css`
        height: ${$height + 4}px;
        top: -2px;
      `
    }
    return css``
  }}
`

export const ThresholdLabelStyle = styled.div<{
  $labelPosition?: 'top' | 'bottom'
}>`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  padding: 4px 8px;
  position: absolute;
  bottom: -2px;
  right: 0;
  border-radius: 4px;
  white-space: nowrap;
  box-sizing: border-box;
  max-height: 28px;

  ${({ $labelPosition }) => {
    if ($labelPosition === 'top') {
      return css`
        top: -2px;
        bottom: unset;
      `
    }
    return css``
  }};
`

export const LineStyle = styled.div<{
  $border: ChartLineBorderType
  $isFullWidth: boolean
  $width: string
  $backgroundColor?: string
  $zIndex: number
}>`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : 'transparent'};
  z-index: ${({ $zIndex }) => $zIndex};
  width: ${({ $width }) => $width};
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-right: 1px solid ${({ theme }) => theme.colors.background};

  ${({ $border }) => {
    if ($border === ChartLineBorderType.rounded) {
      return css`
        border-radius: 4px 0 0 4px;
      `
    }
    return css``
  }}

  &:last-child {
    ${({ $border, $isFullWidth }) => {
      if ($border === ChartLineBorderType.rounded && $isFullWidth) {
        return css`
          border-radius: 4px;
        `
      }
      return css``
    }}
  }
`
