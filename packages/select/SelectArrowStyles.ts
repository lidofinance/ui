import styled, { css } from 'styled-components'
import { ArrowBottom } from '../icons'

type InjectedProps = {
  $opened: boolean
  $disabled: boolean
}

const commonCSS = css<InjectedProps>`
  transform: rotate(${({ $opened }) => ($opened ? 180 : 0)}deg);
  transition: transform ${({ theme }) => theme.duration.norm} ease;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`

export const SelectArrowBigStyle = styled(ArrowBottom)<InjectedProps>`
  ${commonCSS};
  fill: var(--lido-color-textSecondary);
`

export const SelectArrowSmallStyle = styled.div<InjectedProps>`
  ${commonCSS};
  color: var(--lido-color-text);

  border: 3px solid currentColor;
  border-bottom-width: 0px;
  border-left-color: transparent;
  border-right-color: transparent;
`
