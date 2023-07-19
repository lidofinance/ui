import { ForwardedRef, forwardRef } from 'react'
import { NewLidoComponentProps } from '../utils'
import cn from 'classnames'
import styles from './Chip.module.css'

export enum ChipVariant {
  positive,
  negative,
  warning,
  gray,
}
export type ChipVariants = keyof typeof ChipVariant

export type ChipProps = NewLidoComponentProps<
  'div',
  {
    wrapperRef?: React.RefObject<HTMLLabelElement>
    variant?: ChipVariants
  }
>

export const Chip = forwardRef(
  (
    { children, onClick, variant = 'positive', className, ...rest }: ChipProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div
        className={cn(styles.chip, className, {
          [styles.interactive]: !!onClick,
          [styles.positive]: variant === 'positive',
          [styles.negative]: variant === 'negative',
          [styles.warning]: variant === 'warning',
          [styles.gray]: variant === 'gray',
        })}
        onClick={onClick}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    )
  },
)
Chip.displayName = 'Chip'
