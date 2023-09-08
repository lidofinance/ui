import { ForwardedRef, forwardRef } from 'react'
import { MainMenuProps } from './types'
import { Nav } from './MainMenuStyles'

export const MainMenu = forwardRef(
  (
    { children, ...rest }: MainMenuProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Nav ref={ref} {...rest}>
        {children}
      </Nav>
    )
  },
)
MainMenu.displayName = 'MainMenu'
