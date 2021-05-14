import styled, { css } from 'styled-components'

interface ButtonProps {
  isLoading?: boolean
  isDisabled?: boolean
  loadingText?: string
  isFullWidth?: boolean
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement

  children: React.ReactElement | string
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  line-height: inherit;
  background-color: inherit;
  font-size: inherit;
  color: inherit;
  padding: inherit;

  background-color: ${({ theme }) => theme.colors.main};
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  line-height: 24px;
  color: #ffffff;
  padding: 16px 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #009bf2;
  }

  :hover {
    cursor: pointer;
  }

  ${(props) =>
    props.isFullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.isDisabled &&
    css`
      background-color: #96cbfa;
      :hover {
        background-color: #96cbfa;
      }
    `}
`

const Button = ({ children, isLoading, loadingText, ...rest }: ButtonProps) => (
  <StyledButton {...rest}>
    {loadingText && isLoading ? loadingText : children}
  </StyledButton>
)

export default Button
