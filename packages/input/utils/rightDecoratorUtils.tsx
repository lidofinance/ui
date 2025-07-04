import { ReactNode } from 'react'
import { Button, ButtonSize } from '../../button'

export type ButtonType = 'button' | 'submit' | 'reset'
export type RightDecoratorType = 'element' | 'button'

// Group related button props together
export type RightDecoratorButtonProps = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'onClick'
  | 'onMouseDown'
  | 'onMouseUp'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'disabled'
  | 'type'
  | 'children'
>

export type RightDecoratorButton = Omit<RightDecoratorButtonProps, 'type'> & {
  type?: ButtonType
  withArrow?: boolean
}

// Define a common interface for rendering parameters
type RenderRightDecoratorParams = {
  rightDecorator?: ReactNode | RightDecoratorButton
  rightDecoratorType?: RightDecoratorType
  buttonStyle: React.CSSProperties
  disabled?: boolean
  buttonSize: ButtonSize
}

export const renderRightDecorator = ({
  rightDecorator,
  rightDecoratorType = 'element',
  buttonStyle,
  disabled = false,
  buttonSize,
}: RenderRightDecoratorParams): ReactNode => {
  if (!rightDecorator) return null

  if (rightDecoratorType === 'button' && typeof rightDecorator === 'object') {
    const {
      children: buttonChildren,
      type: buttonType = 'button',
      disabled: buttonDisabled,
      ...buttonProps
    } = rightDecorator as RightDecoratorButton

    return (
      <Button
        size={buttonSize}
        color='primary'
        type={buttonType}
        style={buttonStyle}
        disabled={disabled || buttonDisabled}
        {...buttonProps}
      >
        {buttonChildren}
      </Button>
    )
  }

  return rightDecorator as ReactNode
}
