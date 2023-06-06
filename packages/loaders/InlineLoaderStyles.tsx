import styled, { keyframes } from 'styled-components'
import { InlineLoaderColors } from './constants'
import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'

export const translation = keyframes`
  100% {
    background-position: 0 0;
  }
`

export type InlineLoaderStyleProps = InferStyledComponentPropsWithoutRef<
  typeof InlineLoaderStyle
>

export const InlineLoaderStyle = styled.span<{ $color?: InlineLoaderColors }>`
  --loader-color: ${({ $color }) =>
    $color ? `var(--lido-color-${$color})` : 'currentColor'};

  width: 100%;
  display: inline-block;
  vertical-align: top;
  border-radius: 1000px;
  position: relative;
  overflow: hidden;
  user-select: none;
  opacity: 0.05;
  animation: ${translation} 2s infinite;
  background-size: 300% 100%;
  background-position: 100% 0;
  background-image: linear-gradient(
    90deg,
    var(--loader-color) 0,
    var(--loader-color) 33.33%,
    transparent 44.44%,
    transparent 55.55%,
    var(--loader-color) 66.66%,
    var(--loader-color) 100%
  );

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
