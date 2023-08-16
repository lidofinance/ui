import { ForwardedRef, forwardRef } from 'react'
import { MainMenuProps } from './types'
import { Nav } from './MainMenuStyles'

export const MainMenu = forwardRef(
  (
    { children, ...restProps }: MainMenuProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Nav ref={ref} {...restProps}>
        {children}
      </Nav>
    )
  },
)
MainMenu.displayName = 'MainMenu'
