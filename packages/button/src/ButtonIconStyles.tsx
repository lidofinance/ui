import styled from 'styled-components'

export const ButtonWrapperStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 1em;
  min-width: 1em;
  overflow: hidden;
`

export const ButtonIconStyle = styled.span<{ $square: boolean }>`
  margin: ${({ $square }) => ($square ? '-12px' : '-12px -6px')};
  line-height: 0;
  flex-shrink: 0;

  svg {
    fill: currentColor;
  }
`

export const ButtonContentStyle = styled.span`
  margin-left: 10px;

  :empty {
    display: none;
  }
`
