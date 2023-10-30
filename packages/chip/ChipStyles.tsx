import styled, { css } from 'styled-components'
import { ChipVariants } from './types.js'

type InjectedPropsTr = {
  $variant: ChipVariants
  $interactive: boolean
}

const ChipVariantsStyle = {
  positive: css`
    background: var(--lido-color-success);
    color: var(--lido-color-foreground);
  `,
  negative: css`
    background: var(--lido-color-error);
    color: var(--lido-color-foreground);
  `,
  gray: css`
    background: var(--lido-color-shadowLight);
    color: var(--lido-color-textSecondary);
  `,
  warning: css`
    background: var(--lido-color-warning);
    color: var(--lido-color-foreground);
  `,
}

export const ChipWrapperStyle = styled.div<InjectedPropsTr>`
  font-size: 14px;
  line-height: 20px;
  display: inline-flex;
  max-width: 100%;
  box-sizing: border-box;
  align-items: center;
  white-space: nowrap;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xs}px;
  padding: 0.2em 0.4em;
  cursor: ${({ $interactive }) => ($interactive ? 'pointer' : 'auto')};
  ${({ $variant }) => ChipVariantsStyle[$variant]}
`
