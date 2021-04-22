import { StyledButton } from './ButtonStyles'
import { ButtonProps } from './types'

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <StyledButton type='button' {...rest}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  size: 'md',
  variant: 'filled',
  color: 'primary',
  fullwidth: false
}
