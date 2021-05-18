import styled, { css } from 'styled-components'
import { ContainerSizes } from './types'

const sizes = {
  full: css`
    width: calc(100% - 240px);

    ${({ theme }) => theme.mediaQueries.lg} {
      max-width: 496px;
      width: 100%;
    }
  `,
  content: css`
    width: 100%;
    max-width: 496px;
  `,
}

export const ContainerStyle = styled.div<{ $size: ContainerSizes }>`
  padding: 0 ${({ theme }) => theme.spaceMap.lg}px;
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 320px;

  ${({ $size }) => sizes[$size]}
`
