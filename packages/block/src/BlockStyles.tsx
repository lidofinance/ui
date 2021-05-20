import styled, { css } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { BlockVariants, BlockColors } from './types'

type InjectedProps = {
  $variant: BlockVariants
  $color: BlockColors
  theme: Theme
}

const colors = {
  foreground: css`
    background: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
  background: css`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
  accent: css`
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentContrast};
  `,
}

const variants = {
  flat: css`
    box-shadow: none;
  `,
  shadow: css`
    box-shadow: ${({ theme }) =>
      `${theme.boxShadows.lg} ${theme.colors.shadowLight}`};
  `,
}

export const BlockStyle = styled.div<InjectedProps>`
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.4em;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xl}px;
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  margin: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ theme }) => theme.spaceMap.lg}px;
  }

  ${({ $variant }) => variants[$variant]}
  ${({ $color }) => colors[$color]}
`
