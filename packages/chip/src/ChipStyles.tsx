import styled, { css } from 'styled-components'
import { ChipVariants } from './types'

type InjectedPropsTr = {
  $variant: ChipVariants
  $interactive: boolean
}

const ChipVariantsStyle = {
  positive: css`
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.foreground};
  `,
  negative: css`
    background: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.foreground};
  `,
  gray: css`
    background: ${({ theme }) => theme.colors.shadowLight};
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
  warning: css`
    background: ${({ theme }) => theme.colors.warning};
    color: ${({ theme }) => theme.colors.foreground};
  `,
}

export const ChipWrapperStyle = styled.div<InjectedPropsTr>`
  font-size: 14px;
  line-height: 20px;
  display: inline-flex;
  max-width: 100 %;
  box-sizing: border-box;
  align-items: center;
  white-space: nowrap;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xs}px;
  padding: 0.2em 0.4em;

  cursor: ${({ $interactive }) => ($interactive ? 'pointer' : 'auto')};
  ${({ $variant }) => ChipVariantsStyle[$variant]}
`
