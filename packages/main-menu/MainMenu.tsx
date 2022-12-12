import React, { ForwardedRef, forwardRef } from 'react'
import { MainMenuProps } from './types'
import { Nav } from './MainMenuStyles'

function MainMenu(props: MainMenuProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { children, ...restProps } = props
  return (
    <Nav ref={ref} {...restProps}>
      {children}
    </Nav>
  )
}

export default forwardRef(MainMenu)
