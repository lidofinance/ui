import styled from 'styled-components'

export const IdenticonStyle = styled.div`
  border-radius: 1000px;
  overflow: hidden;
  line-height: 0;
  display: inline-block;
`

export const IdenticonBadgeStyle = styled.div`
  border-radius: 1000px;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.background};
  padding: 4px;
  display: inline-flex;
  align-items: center;
`

export const IdenticonAddressStyle = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin: 0 6px;

  &:empty {
    display: none;
  }
`
