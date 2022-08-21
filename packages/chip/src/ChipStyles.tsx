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
    color: ${({ theme }) => theme.colors.primaryHover};
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

const decoratorCSS = css`
  flex-grow: 0;
  flex-shrink: 0;
  cursor: inherit;
  display: flex;
  align-items: center;
`

export const ChipLeftDecoratorStyle = styled.span`
  ${decoratorCSS}
  padding-right: 8px;
  margin: -0.2em 0;
`

export const ChipRightDecoratorStyle = styled.span`
  ${decoratorCSS}
  padding-left: 8px;
  margin: -0.2em 0;
`
