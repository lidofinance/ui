import styled from 'styled-components'

export const TheadStyle = styled.thead`
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};

  & > tr::before,
  & > tr::after {
    content: '';
    display: table-cell;
    width: 32px;

    border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  }
`
