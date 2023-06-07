import styled, { css } from 'styled-components'
import { Theme } from '../theme'
import { HeadingColors, HeadingSizes } from './constants'
import { InferStyledComponentPropsWithoutRef } from '../utils'

export const sizes = {
  sm: css`
    font-size: ${({ theme }) => theme.fontSizesMap.xl}px;
    line-height: 1.3em;
  `,
  md: css`
    font-size: ${({ theme }) => theme.fontSizesMap.xxl}px;
    line-height: 1.3em;
  `,
  lg: css`
    font-size: ${({ theme }) => theme.fontSizesMap.xxxl}px;
    line-height: 1.3em;
  `,
}

type InjectedProps = {
  $color: HeadingColors
  theme: Theme
}

const getHeadingColor = (props: InjectedProps) => {
  const colorsMap = {
    text: `var(--lido-color-text)`,
    secondary: `var(--lido-color-textSecondary)`,
  }
  return colorsMap[props.$color]
}

const commonCSS = css`
  margin: 0;
  padding: 0;
  font-weight: 800;
  color: ${getHeadingColor};
`

export const HeadingStyle = styled.div<InjectedProps & { $size: HeadingSizes }>`
  ${commonCSS}
  ${(props) => sizes[props.$size]}
`

export type H1StyleProps = InferStyledComponentPropsWithoutRef<typeof H1Style>

export const H1Style = styled.h1<InjectedProps>`
  ${commonCSS}
  ${sizes.lg}
`

export type H2StyleProps = InferStyledComponentPropsWithoutRef<typeof H2Style>

export const H2Style = styled.h2<InjectedProps>`
  ${commonCSS}
  ${sizes.md}
`

export type H3StyleProps = InferStyledComponentPropsWithoutRef<typeof H3Style>

export const H3Style = styled.h3<InjectedProps>`
  ${commonCSS}
  ${sizes.sm}
`
