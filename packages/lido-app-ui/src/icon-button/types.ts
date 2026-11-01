import type { ReactNode } from 'react'

import type { ActionAsButtonProps, ActionAsLinkProps } from '../utils'

export type IconButtonVariant = 'outline' | 'ghost' | 'surface'

export type IconButtonDataTestId = {
  root?: string
  icon?: string
  counter?: string
}

export type IconButtonOwnProps = {
  icon: ReactNode
  'aria-label': string
  variant?: IconButtonVariant
  /**
   * Corner slot, aria-hidden. A number or string renders a default `Counter`
   * (`0` shows a "0" pill; use `counter={count || null}` to hide it), or pass a
   * `<Counter variant=...>` element. Announce the count with `counterLabel`.
   */
  counter?: ReactNode
  /** Spoken with the name, e.g. "3 unread". */
  counterLabel?: string
  dataTestId?: IconButtonDataTestId
}

export type IconButtonAsButtonProps = IconButtonOwnProps & ActionAsButtonProps

export type IconButtonAsLinkProps = IconButtonOwnProps & ActionAsLinkProps

export type IconButtonProps = IconButtonAsButtonProps | IconButtonAsLinkProps
