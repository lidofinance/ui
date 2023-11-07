import styled, { keyframes } from '../utils/styled-components-wrapper.js'
import { LoaderColors } from './types.js'

export const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

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
  stroke: currentcolor;
  stroke-width: ${(props) => props.$thickness};
  opacity: 0.2;
`

export const LoaderCircleFgStyle = styled.circle<{
  $thickness: number
  r: number
}>`
  fill: none;
  stroke: currentcolor;
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
