import styled, { css } from 'styled-components'
import theme from '@lidofinance/theme'
import inject from '@lidofinance/injector'
import PropTypes from 'prop-types'

import shouldForwardProp from '@styled-system/should-forward-prop'

const APPEARANCES = {
  PRIMARY: 'primary',
}

const StyledButton = styled('button').withConfig({
  shouldForwardProp,
})`
  border: none;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  line-height: inherit;
  background-color: inherit;
  font-size: inherit;
  color: inherit;
  padding: inherit;

  background-color: ${theme.colors.main};
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

    ${inject}
`

const Button = ({ children, isLoading, loadingText, ...rest }) => (
  <StyledButton {...rest}>
    {loadingText && isLoading ? loadingText : children}
  </StyledButton>
)

Button.propTypes = {
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  loadingText: PropTypes.string,
  isFullWidth: PropTypes.bool,
  leftIcon: PropTypes.func,
  rightIcon: PropTypes.func,
  variant: PropTypes.oneOf(Object.values(APPEARANCES)),
}

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  loadingText: null,
  isFullWidth: false,
  leftIcon: null,
  rightIcon: null,
  variant: APPEARANCES.PRIMARY,
}

export default Button
