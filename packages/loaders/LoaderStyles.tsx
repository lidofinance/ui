import styled, { keyframes } from 'styled-components'
import { LoaderColors } from './constants'
import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'

export const rotation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

export type LoaderStyleProps = InferStyledComponentPropsWithoutRef<
  typeof LoaderStyle
>

export const LoaderStyle = styled.div<{
  $size: number
  $color: LoaderColors
}>`
  margin: 0;
  padding: 0;
  line-height: 0;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  color: ${({ $color }) => `var(--lido-color-${$color})`};
`

export const LoaderCircleBgStyle = styled.circle<{ $thickness: number }>`
  fill: none;
  stroke: currentColor;
  stroke-width: ${(props) => props.$thickness};
  opacity: 0.2;
`

export const LoaderCircleFgStyle = styled.circle<{
  $thickness: number
  r: number
}>`
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: ${(props) => props.$thickness};
  stroke-dasharray: ${(props) => {
    const circumference = 2 * props.r * Math.PI
    const filledPart = 0.25

    return `${circumference * filledPart} ${circumference * (1 - filledPart)}`
  }};
  transform: rotate(0deg);
  transform-origin: 50% 50%;
  animation: ${rotation} 1.4s linear infinite;
`
