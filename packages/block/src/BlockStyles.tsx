import styled, { css } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { BlockVariants, BlockColors } from './types'

type InjectedProps = {
  $variant: BlockVariants
  $color: BlockColors
  theme: Theme
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
  line-height: 1.5em;
  background: ${({ theme, $color }) => theme.colors[$color]};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xl}px;
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  margin: 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: ${({ theme }) => theme.spaceMap.lg}px;
  }

  ${({ $variant }) => variants[$variant]}
`
