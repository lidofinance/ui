import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'
import styled, { css } from 'styled-components'

export type LinkStyleProps = InferStyledComponentPropsWithoutRef<
  typeof LinkStyle
>

export const LinkStyle = styled.a<{ fadeVisited?: boolean }>`
  text-decoration: none;
  color: var(--lido-color-primary);

  :hover {
    color: var(--lido-color-primaryHover);
  }

  ${(props) =>
    props.fadeVisited &&
    css`
      :visited {
        color: var(--lido-color-primaryVisited);
      }
    `}
`
