import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ForwardedRef,
} from 'react'

import { Anchor } from '../link-provider/Anchor'

export type ActionElementProps =
  | (AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string
      disabled?: boolean
    })
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })

/** Renders `<a>` when `href` is set, otherwise `<button type='button'>`. */
export const ActionElement = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ActionElementProps
>((props, ref) => {
  if (props.href !== undefined) {
    const { href, disabled, onClick, tabIndex, ...rest } = props
    return (
      <Anchor
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        {...rest}
        href={disabled ? undefined : href}
        aria-disabled={disabled ? 'true' : rest['aria-disabled']}
        tabIndex={disabled ? -1 : tabIndex}
        onClick={disabled ? undefined : onClick}
      />
    )
  }

  const { type = 'button', ...rest } = props
  return (
    <button
      ref={ref as ForwardedRef<HTMLButtonElement>}
      type={type}
      {...rest}
    />
  )
})

ActionElement.displayName = 'ActionElement'
