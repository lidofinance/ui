import styled, { css } from 'styled-components'
import { LinkProps } from './types'

export const LinkStyle = styled.a`
  text-decoration: none;
  color: var(--lido-color-primary);

  :hover {
    color: var(--lido-color-primaryHover);
  }

  ${(props: LinkProps) =>
    props.fadeVisited &&
    css`
      :visited {
        color: var(--lido-color-primaryVisited);
      }
    `}
`
