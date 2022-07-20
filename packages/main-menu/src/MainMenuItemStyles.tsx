import styled from 'styled-components'

export const NavLink = styled.a<{ active: boolean }>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizesMap.xxxs}px;
  line-height: 1.7em;
  font-weight: 800;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: ${(props) => (props.active ? 1 : 0.8)};

  :hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.secondary};
  }

  :not(:last-of-type) {
    margin-right: 32px;
  }

  svg {
    fill: ${({ active, theme }) =>
      active ? theme.colors.primary : theme.colors.secondary};
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: column;
    text-transform: none;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizesMap.xxxs}px;
    line-height: 1.2em;
    letter-spacing: 0;
  }
`
