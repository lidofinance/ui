import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactNode,
  RefObject,
} from 'react'
import { Text } from '../text'
import cn from 'classnames'
import styles from './Checkbox.module.css'
import { Check } from '../icons'

export type CheckboxProps = ComponentPropsWithoutRef<'input'> & {
  wrapperRef?: RefObject<HTMLLabelElement>
  children?: never
  label?: ReactNode
}

export const Checkbox = forwardRef(
  (
    {
      className,
      style,
      wrapperRef,
      children,
      label,
      disabled,
      ...rest
    }: CheckboxProps,
    inputRef?: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <label
        className={cn(styles.wrapper, className)}
        style={style}
        ref={wrapperRef}
      >
        <input
          className={styles.input}
          type='checkbox'
          disabled={disabled}
          {...rest}
          ref={inputRef}
        />
        <Check className={styles.icon} />
        {label && (
          <Text
            size='xxs'
            color={disabled ? 'secondary' : 'default'}
            className={styles.label}
          >
            {label}
          </Text>
        )}
      </label>
    )
  },
)
Checkbox.displayName = 'Checkbox'
