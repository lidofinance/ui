import styled, { css } from 'styled-components'
import theme from '@lidofinance/theme'

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
  font-family: inherit;
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
      transform: translateY(-12px) scale(0.75);
    `}

  ${(p) =>
    p.isWrong &&
    css`
      opacity: 1;
      color: ${theme.colors.error};
    `}
`

export const InputStyled = styled.input`
  flex: 1 1 auto;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 27px 20px 7px 20px;
  margin: 0;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-family: inherit;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
    cursor: text;
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
  height: 44px;
  padding: 6px;
`
