import styled, { css } from 'styled-components'
import theme from '@lidofinance/theme'

export const InputWrapper = styled.div`
  padding-bottom: 26px; // Error space reserving
  position: relative;
  width: 100%;
`

type PlaceholderProps = {
  isWrong?: boolean
  isFocused?: boolean
  isFloated?: boolean
}
export const Placeholder = styled.div<PlaceholderProps>`
  padding: 19px 0 17px 0;
  position: absolute;
  left: 20px;
  top: 0;
  right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  line-height: 20px;
  color: #505a7a;
  opacity: 0.5;
  pointer-events: none;
  transform-origin: left center;
  transition: transform ease ${theme.dur.fast}, color ease ${theme.dur.norm},
    opacity ease ${theme.dur.norm};

  ${(p) =>
    p.isFocused &&
    css`
      opacity: 1;
      color: ${theme.colors.main};
      transition-duration: ${theme.dur.fast};
    `}

  ${(p) =>
    p.isFloated &&
    css`
      transform: translateY(-14px) scale(0.75);
    `}

  ${(p) =>
    p.isWrong &&
    css`
      opacity: 1;
      color: ${theme.colors.error};
    `}
`

type InputStyledProps = {
  isWrong?: boolean
}
export const InputStyled = styled.input<InputStyledProps>`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 27px 20px 7px 20px;
  margin: 0;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  background: #ffffff;
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  cursor: pointer;
  transition: border-color ease ${theme.dur.norm};

  ${(p) =>
    p.isWrong &&
    css`
      border-color: ${theme.colors.error};
    `}

  &:hover {
    border-color: ${(p) => !p.isWrong && theme.colors.borderHover};
    transition-duration: ${theme.dur.fast};
  }

  &:focus {
    outline: none;
    cursor: text;
    border-color: ${(p) => !p.isWrong && theme.colors.main};
  }
`

export const Error = styled.div`
  position: absolute;
  top: 64px;
  left: 20px;
  font-size: 12px;
  line-height: 18px;
  color: ${theme.colors.error};
`

// export const StartIconWrapper = styled.span`
//   position: absolute;
//   top: 50%;
//   left: 16px;
//   transform: translate(0, -50%);
//   height: 22px;
// `

// export const EndIconWrapper = styled.span`
//   position: absolute;
//   top: 50%;
//   right: 16px;
//   transform: translate(0, -50%);
// `
