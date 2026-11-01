import { forwardRef } from 'react'

import cn from 'classnames'

import { joinAriaLabel } from '../button/ButtonContent'
import { ActionElement, type ActionElementProps } from '../utils'
import surfaceStyles from '../utils/surface.module.css'
import styles from './IconButton.module.css'
import { IconButtonContent } from './IconButtonContent'
import type {
  IconButtonAsButtonProps,
  IconButtonAsLinkProps,
  IconButtonDataTestId,
  IconButtonProps,
  IconButtonVariant,
} from './types'

export type {
  IconButtonAsButtonProps,
  IconButtonAsLinkProps,
  IconButtonDataTestId,
  IconButtonProps,
  IconButtonVariant,
}

/** 36px fully rounded icon-only button; `loading` swaps the icon for a spinner and disables it. With `href` it renders a link that routes through `LinkProvider`. */
export const IconButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  IconButtonProps
>(
  (
    {
      className,
      variant = 'outline',
      loading = false,
      disabled = false,
      icon,
      counter,
      counterLabel,
      'aria-label': ariaLabel,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <ActionElement
      ref={ref}
      className={cn(
        styles.button,
        styles[variant],
        variant === 'surface' && surfaceStyles.surface,
        loading && !disabled && styles.loading,
        className,
      )}
      data-testid={dataTestId?.root}
      aria-label={joinAriaLabel(ariaLabel, counterLabel)}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      {...(rest as ActionElementProps)}
    >
      <IconButtonContent
        loading={loading}
        icon={icon}
        counter={counter}
        dataTestId={dataTestId}
      />
    </ActionElement>
  ),
)

IconButton.displayName = 'IconButton'
