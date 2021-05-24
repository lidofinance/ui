import styled from 'styled-components'

export const InputGroupStyle = styled.span<{ $fullwidth: boolean }>`
  display: inline-flex;
  margin-bottom: 40px;
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'auto')};

  & > * {
    border-radius: 0px;
    margin: 0 -1px 0 0;

    &:first-child {
      border-top-left-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
      border-bottom-left-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
    }

    &:last-child {
      margin-right: 0;
      border-top-right-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
      border-bottom-right-radius: ${({ theme }) =>
        theme.borderRadiusesMap.lg}px;
    }
  }
`
