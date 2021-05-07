import styled, { keyframes } from 'styled-components'
import theme from '@lidofinance/theme'
import { InlineLoaderColors } from './types'

export const translation = keyframes`
  100% {
    transform: translateX(calc(2 / 3 * 100%));
  }
`

export const InlineLoaderStyle = styled.div<{ $color: InlineLoaderColors }>`
  --loader-color: ${(props) => theme.colors[props.$color]};

  width: 100%;
  display: inline-block;
  vertical-align: middle;
  border-radius: 1000px;
  position: relative;
  overflow: hidden;
  user-select: none;
  opacity: 0.05;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: -200%;
    transform: translateX(0%);
    animation: ${translation} 2s infinite;
    background-image: linear-gradient(
      90deg,
      var(--loader-color) 0,
      var(--loader-color) 33.33%,
      transparent 44.44%,
      transparent 55.55%,
      var(--loader-color) 66.66%,
      var(--loader-color) 100%
    );
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--loader-color);
    opacity: 0.2;
  }
`
