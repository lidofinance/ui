import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Chip.module.css'

export enum ChipVariant {
  positive,
  negative,
  warning,
  gray,
}
export type ChipVariants = keyof typeof ChipVariant

export type ChipProps = ComponentPropsWithoutRef<'button'> & {
  wrapperRef?: React.RefObject<HTMLLabelElement>
  variant?: ChipVariants
}

export const Chip = forwardRef(
  (
    { children, onClick, variant = 'positive', className, ...rest }: ChipProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    const interactive = !!onClick
    return (
      <button
        className={cn(styles.chip, className, {
          [styles.interactive]: interactive,
          [styles.positive]: variant === 'positive',
          [styles.negative]: variant === 'negative',
          [styles.warning]: variant === 'warning',
          [styles.gray]: variant === 'gray',
        })}
        disabled={!interactive}
        onClick={onClick}
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    )
  },
)
Chip.displayName = 'Chip'
