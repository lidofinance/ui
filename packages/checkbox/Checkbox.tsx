import { ComponentProps, forwardRef, ForwardedRef } from 'react'
import styles from './Checkbox.module.css'
import cn from 'classnames'

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'size'> & {
  variant?: CheckboxVariant
  size?: CheckboxSize
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
        >
          {children}
        </span>
      </label>
    )
  },
)
Checkbox.displayName = 'Checkbox'
