import styled, { css } from 'styled-components'
import theme from '@lidofinance/theme'

const colorPlaceholder = 'rgba(39, 56, 82, 0.3)'

export const RootWrapper = styled.div`
  padding-bottom: 26px; // Error space reserving
  position: relative;
  width: 100%;
`

type InputWrapperProps = {
  isWrong?: boolean
  isFocused?: boolean
}
export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  position: relative;
  width: 100%;
  height: 56px;
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  background-color: #ffffff;
  transition: border-color ease ${theme.dur.norm};

  ${(p) =>
    !p.isFocused &&
    !p.isWrong &&
    css`
      &:hover {
        border-color: ${theme.colors.borderHover};
        transition-duration: ${theme.dur.fast};
      }
    `}

  ${(p) =>
    p.isWrong &&
    css`
      border-color: ${theme.colors.error};
    `}

  ${(p) =>
    p.isFocused &&
    !p.isWrong &&
    css`
      border-color: ${theme.colors.main};
    `}
`

type PlaceholderProps = {
  isWrong?: boolean
  isFocused?: boolean
  isFloated?: boolean
}
export const Placeholder = styled.div<PlaceholderProps>`
  padding: 18px 0 16px 0;
  position: absolute;
  left: 20px;
  top: 0;
  right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  line-height: 20px;
  font-family: inherit;
  color: ${colorPlaceholder};
  pointer-events: none;
  transform-origin: left center;
  transition: transform ease ${theme.dur.fast}, color ease ${theme.dur.norm},
    opacity ease ${theme.dur.norm};

  ${(p) =>
    p.isFocused &&
    css`
      color: ${theme.colors.main};
      transition-duration: ${theme.dur.fast};
    `}

  ${(p) =>
    p.isFloated &&
    css`
      transform: translateY(-12px) scale(0.75);
    `}

  ${(p) =>
    p.isWrong &&
    css`
      opacity: 1;
      color: ${theme.colors.error};
    `}
`

type InputProps = {
  isPlaceholderFloats?: boolean
}
export const InputStyled = styled.input<InputProps>`
  padding-left: 20px;
  padding-right: 20px;
  flex: 1 1 auto;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  outline: none;
  width: 100%;
  height: 56px;
  font-family: inherit;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  ${(p) =>
    p.isPlaceholderFloats
      ? css`
          padding-top: 27px;
          padding-bottom: 7px;
          font-size: 16px;
        `
      : css`
          font-size: 18px;
        `}

  &:focus {
    outline: none;
    cursor: text;
  }

  &::placeholder {
    color: ${colorPlaceholder};
  }

  &:-ms-input-placeholder {
    color: ${colorPlaceholder};
  }

  &::-ms-input-placeholder {
    color: ${colorPlaceholder};
  }
`

const Message = styled.div`
  position: absolute;
  top: 64px;
  left: 20px;
  font-size: 12px;
  line-height: 18px;
`

export const ErrorMessage = styled(Message)`
  color: ${theme.colors.error};
`

export const SuccessMessage = styled(Message)`
  color: ${theme.colors.success};
`

export const ActionWrap = styled.div`
  flex: 0 0 auto;
  height: 42px;
  padding: 6px;
`
