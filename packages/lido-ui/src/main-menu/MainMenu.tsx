import { ForwardedRef, forwardRef } from 'react'
import { MainMenuProps } from './types.js'
import { Nav } from './MainMenuStyles.js'

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
