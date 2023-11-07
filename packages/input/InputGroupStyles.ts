import styled from '../utils/styled-components-wrapper.js'
import { InputWrapperStyle, InputContentStyle } from './InputStyles.js'

export const InputGroupStyle = styled.span<{ $fullwidth: boolean }>`
  display: inline-flex;
  position: relative;
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'auto')};
`

export const InputGroupContentStyle = styled.span`
  display: flex;
  width: 100%;

  & > ${InputWrapperStyle} {
    margin: 0 -1px 0 0;

    &:first-child {
      & ${InputContentStyle} {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &:last-child {
      & ${InputContentStyle} {
        margin-right: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
`
