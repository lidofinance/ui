import type { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'outline' | 'subtle' | 'ghost' | 'error'

export type ButtonSize = 'big' | 'small'

export type ButtonDataTestId = {
  root?: string
  iconLeft?: string
  iconRight?: string
  content?: string
  counter?: string
}

export type ButtonOwnProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  iconLeft?: ReactNode
  iconRight?: ReactNode
  /**
   * Corner slot, aria-hidden. A number or string renders a default `Counter`
   * (`0` shows a "0" pill; use `counter={count || null}` to hide it), or pass a
   * `<Counter variant=...>` element. Announce the count with `counterLabel`.
   */
  counter?: ReactNode
  /** Spoken with the name, e.g. "3 unread". */
  counterLabel?: string
  dataTestId?: ButtonDataTestId
}
