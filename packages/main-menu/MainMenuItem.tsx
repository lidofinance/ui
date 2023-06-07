import { ForwardedRef, forwardRef } from 'react'
import { NavLink, NavLinkProps } from './MainMenuItemStyles'

export type MainMenuItemProps = Omit<NavLinkProps, 'active'> & {
  icon?: JSX.Element
  active?: boolean
}

function MainMenuItem(
  { icon, children, active, ...restProps }: MainMenuItemProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return (
    <NavLink ref={ref} active={Boolean(active)} {...restProps}>
      {icon}
      <span>{children}</span>
    </NavLink>
  )
}

export default forwardRef(MainMenuItem)
