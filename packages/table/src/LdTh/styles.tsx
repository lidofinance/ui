import styled from 'styled-components'

export const LdThStyle = styled.div`
  display: table-cell;
  flex: 1;
  padding: ${({ theme }) => theme.spaceMap.md}px
    ${({ theme }) => theme.spaceMap.xxl}px;

  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`
