import styled, { css } from 'styled-components'
import { ContainerSizes } from './Container'
import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'

const sizes = {
  full: css`
    max-width: 1424px;
  `,
  content: css`
    max-width: 960px;
  `,
  tight: css`
    max-width: 560px;
  `,
}

export type ContainerStyleProps = InferStyledComponentPropsWithoutRef<
  typeof ContainerStyle
>

export const ContainerStyle = styled.div<{ $size: ContainerSizes }>`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 320px;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spaceMap.xxl}px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0 ${({ theme }) => theme.spaceMap.lg}px;
  }

  ${({ $size }) => sizes[$size]}
`
