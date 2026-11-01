import type { ButtonHTMLAttributes, ReactNode } from 'react'

import type { AnchorProps } from '../link-provider/Anchor'

export type IconButtonVariant = 'outline' | 'ghost' | 'surface'

export type IconButtonDataTestId = {
  root?: string
  icon?: string
  counter?: string
}

export type IconButtonOwnProps = {
  icon: ReactNode
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

export type IconButtonAsButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'aria-label'
> & {
  href?: never
  linkProps?: never
  loading?: boolean
}

export type IconButtonAsLinkProps = Omit<
  AnchorProps,
  'href' | 'external' | 'aria-label'
> & {
  href: string
  loading?: never
  type?: never
}

export type IconButtonProps = IconButtonOwnProps & {
  'aria-label': string
} & (IconButtonAsButtonProps | IconButtonAsLinkProps)
