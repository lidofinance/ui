import { forwardRef, type ButtonHTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Button.module.css'
import { ButtonContent, joinAriaLabel } from './ButtonContent'
import type {
  ButtonDataTestId,
  ButtonOwnProps,
  ButtonSize,
  ButtonVariant,
} from './types'

export type { ButtonDataTestId, ButtonSize, ButtonVariant }

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonOwnProps & {
    loading?: boolean
  }

/** Fully rounded call to action; `size` is big (52px) or small (36px), `loading` swaps the icon slot for a spinner and disables the button. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      type = 'button',
      variant = 'primary',
      size = 'big',
      loading = false,
      disabled = false,
      iconLeft,
      iconRight,
      counter,
      counterLabel,
      dataTestId,
      'aria-label': ariaLabel,
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        loading && !disabled && styles.loading,
        className,
      )}
      data-testid={dataTestId?.root}
      aria-label={joinAriaLabel(ariaLabel, counterLabel)}
      {...rest}
    >
      <ButtonContent
        loading={loading}
        iconLeft={iconLeft}
        iconRight={iconRight}
        counter={counter}
        counterLabel={counterLabel}
        dataTestId={dataTestId}
      >
        {children}
      </ButtonContent>
    </button>
  ),
)

Button.displayName = 'Button'
