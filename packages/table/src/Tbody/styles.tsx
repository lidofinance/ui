import styled from 'styled-components'

export const TbodyStyle = styled.tbody`
  & > tr::before,
  & > tr::after {
    content: '';
    display: table-cell;
    width: 32px;
  }
`
