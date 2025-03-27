import { ComponentProps, forwardRef, ForwardedRef } from 'react'
import styles from './Checkbox.module.css'
import cn from 'classnames'

export type CheckboxDataTestId = {
  root?: string
  input?: string
  text?: string
}

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'size'> & {
  variant?: CheckboxVariant
  size?: CheckboxSize
  dataTestId?: CheckboxDataTestId
}

export type CheckboxVariant = 'accent' | 'primary'
export type CheckboxSize = 'xs' | 's' | 'm' | 'l'

export const Checkbox = forwardRef(
  (
    {
      variant = 'accent',
      size = 's',
      disabled = false,
      className,
      style,
      children,
      dataTestId,
      ...rest
    }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <label
        className={cn(className, styles.container, {
          [styles.containerDisabled]: disabled,
        })}
        style={style}
        data-testid={dataTestId?.root}
      >
        <input
          ref={ref}
          className={cn(
            styles.input,
            styles[variant],
            styles[`inputSize--${size.toUpperCase()}`],
          )}
          type='checkbox'
          disabled={disabled}
          data-testid={dataTestId?.input}
          {...rest}
        />
        <span
          className={cn(
            styles.text,
            styles[`textSize--${size.toUpperCase()}`],
            {
              [styles.textDisabled]: disabled,
            },
          )}
          data-testid={dataTestId?.text}
        >
          {children}
        </span>
      </label>
    )
  },
)
Checkbox.displayName = 'Checkbox'
