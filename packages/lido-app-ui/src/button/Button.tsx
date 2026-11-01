import { forwardRef } from 'react'

import cn from 'classnames'

import { ActionElement, joinAriaLabel } from '../utils'
import styles from './Button.module.css'
import { ButtonContent } from './ButtonContent'
import type {
  ButtonAsButtonProps,
  ButtonAsLinkProps,
  ButtonDataTestId,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from './types'

export type {
  ButtonAsButtonProps,
  ButtonAsLinkProps,
  ButtonDataTestId,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
}

/** Fully rounded call to action; `size` is big (52px) or small (36px), `loading` swaps the icon slot for a spinner and disables it. With `href` it renders a link that routes through `LinkProvider`. */
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      children,
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
    <ActionElement
      ref={ref}
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        loading && !disabled && styles.loading,
        className,
      )}
      data-testid={dataTestId?.root}
      aria-label={joinAriaLabel(ariaLabel, counterLabel)}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
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
    </ActionElement>
  ),
)

Button.displayName = 'Button'
