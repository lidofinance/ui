import styled, { css, keyframes } from 'styled-components'
import theme from '@lidofinance/theme'

export const RootWrap = styled.div`
  padding-bottom: 26px; // Error space reserving
  position: relative;
  width: 100%;
`

type RowWrapProps = {
  isWrong?: boolean
  isFocused?: boolean
}
export const RowWrap = styled.div<RowWrapProps>`
  display: flex;
  position: relative;
  width: 100%;
  height: 56px;
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  background-color: ${theme.colors.controlBg};
  transition: border-color ease ${theme.dur.norm};
  border-color: ${(p) =>
    p.isWrong
      ? theme.colors.error
      : p.isFocused
      ? theme.colors.main
      : theme.colors.border};

  ${(p) =>
    !p.isFocused &&
    !p.isWrong &&
    css`
      &:hover {
        border-color: ${theme.colors.borderHover};
        transition-duration: ${theme.dur.fast};
      }
    `}
`

export const IconWrap = styled.div`
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 100%;
  pointer-events: none;
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
  color: ${theme.colors.inputPlaceholder};
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
  withIcon?: boolean
  isPlaceholderFloats?: boolean
}
export const InputStyled = styled.input<InputProps>`
  padding-left: 16px;
  padding-right: 16px;
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
    p.withIcon &&
    css`
      padding-left: 56px;
    `}

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
    color: ${theme.colors.inputPlaceholder};
  }

  &:-ms-input-placeholder {
    color: ${theme.colors.inputPlaceholder};
  }

  &::-ms-input-placeholder {
    color: ${theme.colors.inputPlaceholder};
  }
`

const Message = styled.div`
  position: absolute;
  font-size: 12px;
  line-height: 18px;
`

const errorAppearing = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.6);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

export const ErrorMessage = styled(Message)`
  padding: 6px 10px;
  top: 60px;
  left: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  background-color: ${theme.colors.error};
  border-radius: 6px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${errorAppearing} ${theme.dur.norm} ${theme.ease.OutBack} 1;
`

export const SuccessMessage = styled(Message)`
  top: 64px;
  left: 20px;
  color: ${theme.colors.success};
`

export const ActionWrap = styled.div`
  flex: 0 0 auto;
  height: 42px;
  padding: 6px;
`
