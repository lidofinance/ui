import { forwardRef } from 'react'

import { Button } from './Button'
import type { ButtonAsLinkProps, ButtonOwnProps } from './types'

/** @deprecated Use `Button` with `href`. */
export type LinkButtonProps = ButtonOwnProps &
  ButtonAsLinkProps & {
    /** @deprecated Absolute http(s) URLs open in a new tab automatically; pass `target` to override. */
    external?: boolean
  }

/** @deprecated Use `Button` with `href`. */
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (props, ref) => <Button ref={ref} {...(props as ButtonAsLinkProps)} />,
)

LinkButton.displayName = 'LinkButton'
