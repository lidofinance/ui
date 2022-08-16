import React, { ForwardedRef, forwardRef } from 'react'
import { MainMenuItemProps } from './types'
import { NavLink } from './MainMenuItemStyles'

function MainMenuItem(
  props: MainMenuItemProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const { icon, children, active, ...restProps } = props
  return (
    <NavLink ref={ref} active={Boolean(active)} {...restProps}>
      {icon}
      <span>{children}</span>
    </NavLink>
  )
}

export default forwardRef(MainMenuItem)
