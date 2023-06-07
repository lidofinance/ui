import styled, { css } from 'styled-components'
import { TransitionInnerProps } from '@lidofinance/transition'
import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'

type TransitionProps = {
  $duration: number
  $transition: TransitionInnerProps['transitionStatus']
}

export const PopoverWrapperStyle = styled.div<{ $backdrop: boolean }>`
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: ${({ $backdrop }) => ($backdrop ? '100%' : '0px')};
`

const visibleCSS = css`
  opacity: 1;

  &[data-placement] {
    transform: translate(0, 0);
  }
`

const hiddenCSS = css`
  opacity: 0;

  &[data-placement^='top'] {
    transform: translateY(6px);
  }
  &[data-placement^='right'] {
    transform: translateX(-6px);
  }
  &[data-placement^='bottom'] {
    transform: translateY(-6px);
  }
  &[data-placement^='left'] {
    transform: translateX(6px);
  }
`

const getTransitionCSS = ({ $transition }: TransitionProps) => {
  return ['exiting', 'exited'].includes($transition) ? hiddenCSS : visibleCSS
}

export type PopoverRootStyleProps = InferStyledComponentPropsWithoutRef<typeof PopoverRootStyle>

export const PopoverRootStyle = styled.div<TransitionProps>`
  box-sizing: border-box;
  position: absolute;
  margin: 0;
  padding: 0;
  transition: opacity ${({ $duration }) => $duration}ms ease;
  transition-property: opacity, transform;

  ${getTransitionCSS}
`
