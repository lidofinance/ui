import styled from 'styled-components'

export const LinkStyle = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  :hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  :visited {
    color: ${({ theme }) => theme.colors.primaryVisited};
  }
`
