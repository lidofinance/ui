import { forwardRef, type ButtonHTMLAttributes, type ForwardedRef } from 'react'

import { Anchor, type AnchorProps } from '../link-provider/Anchor'

export type ActionElementProps =
  | (AnchorProps & { href: string })
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })

/** Internal, not exported from the package. Renders `Anchor` when `href` is set (see `AnchorProps` for `disabled` and `external`), otherwise `<button type='button'>`. */
export const ActionElement = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ActionElementProps
>((props, ref) => {
  if (props.href !== undefined) {
    return <Anchor ref={ref as ForwardedRef<HTMLAnchorElement>} {...props} />
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
