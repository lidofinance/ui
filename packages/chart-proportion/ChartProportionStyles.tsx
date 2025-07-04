import styled, { css } from '../utils/styled-components-wrapper.js'
import {
  ChartProportionBorderSize,
  ChartProportionBorderType,
  MarginSize,
} from './types.js'

export const WrapperStyle = styled.div<{
  $height: number
}>`
  display: flex;
  width: 100%;
  height: ${({ $height }) => $height}px;
  position: relative;
`

const borderSizes = {
  sm: '2px',
  md: '4px',
  lg: '8px',
}

const marginSizes = {
  sm: '2px',
  md: '4px',
  lg: '8px',
}

export const ProportionStyle = styled.div<{
  $border: ChartProportionBorderType
  $borderSize: ChartProportionBorderSize
  $margin: MarginSize
  $flexGrow: number
  $backgroundColor?: string
}>`
  background: rgb(19 18 23 / 4%);
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  height: 100%;
  position: relative;

  ${({ $border, $borderSize }) => {
    if ($border === ChartProportionBorderType.rounded) {
      return css`
        border-radius: ${borderSizes[$borderSize]};
      `
    }
    return css``
  }}

  &:not(:last-child) {
    ${({ $margin }) => {
      return css`
        margin-right: ${marginSizes[$margin]};
      `
    }}
  }
`

export const ProportionProgressStyle = styled.div<{
  $progress: number
  $backgroundColor?: string
  $border: ChartProportionBorderType
  $borderSize: ChartProportionBorderSize
}>`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : 'transparent'};
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  position: relative;

  ${({ $border, $borderSize, $progress }) => {
    if ($border === ChartProportionBorderType.rounded) {
      if ($progress !== 100) {
        return css`
          border-radius: ${borderSizes[$borderSize]} 0 0
            ${borderSizes[$borderSize]};
        `
      }
      return css`
        border-radius: ${borderSizes[$borderSize]};
      `
    }

    return css``
  }}
`

export const ProportionProgressLineStyle = styled.div`
  position: absolute;
  right: 0;
  background-color: #273852;
  height: calc(100% + 2px);
  top: -1px;
  bottom: -1px;
  width: 2px;
  margin-left: auto;
  border-radius: 2px;
`
export const ProportionLabelStyle = styled.div`
  position: absolute;
  top: -22px;
  right: 0;
  white-space: nowrap;
  font-size: 10px;
  line-height: 20px;
  color: #7a8aa0;
`
