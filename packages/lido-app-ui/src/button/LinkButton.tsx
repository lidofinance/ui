import { forwardRef } from 'react'

import type { AnchorProps } from '../link-provider/Anchor'
import { Button } from './Button'
import type { ButtonAsLinkProps } from './types'

/** @deprecated Use `Button` with `href`. */
export type LinkButtonProps = ButtonAsLinkProps & Pick<AnchorProps, 'external'>

/** @deprecated Use `Button` with `href`. */
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (props, ref) => <Button ref={ref} {...props} />,
)

LinkButton.displayName = 'LinkButton'
