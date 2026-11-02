import { forwardRef } from 'react'

import { IconCross } from '../icons'
import { IconButton } from './IconButton'
import type { IconButtonAsButtonProps } from './types'

export type CloseButtonProps = Omit<
  IconButtonAsButtonProps,
  'icon' | 'variant' | 'aria-label'
> & { 'aria-label'?: string }

/** Ghost `IconButton` with a cross icon; `aria-label` defaults to "Close". */
export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ 'aria-label': ariaLabel = 'Close', ...rest }, ref) => (
    <IconButton
      ref={ref}
      variant='ghost'
      icon={<IconCross />}
      aria-label={ariaLabel}
      {...rest}
    />
  ),
)

CloseButton.displayName = 'CloseButton'
