import styled, { css } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { BlockVariants, BlockColors } from './types'

type InjectedProps = {
  $variant: BlockVariants
  $color: BlockColors
  $paddingLess: boolean
  theme: Theme
}

const colors = {
  foreground: css`
    background: var(--lido-color-foreground);
    color: var(--lido-color-textSecondary);
  `,
  background: css`
    background: var(--lido-color-background);
    color: var(--lido-color-textSecondary);
  `,
  accent: css`
    background: var(--lido-color-accent);
    color: var(--lido-color-accentContrast);
  `,
}

const variants = {
  flat: css`
    box-shadow: none;
  `,
  shadow: css`
    box-shadow: ${({ theme }) => theme.boxShadows.lg}
      var(--lido-colors-shadowLight);
  `,
}

const paddings = css`
  padding: ${({ theme }) => theme.spaceMap.xxl}px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ theme }) => theme.spaceMap.lg}px;
  }
`

export const BlockStyle = styled.div<InjectedProps>`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.6em;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xl}px;
  margin: 0;

  ${({ $paddingLess }) => !$paddingLess && paddings}

  ${({ $variant }) => variants[$variant]}
  ${({ $color }) => colors[$color]}
`
