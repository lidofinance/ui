import { ForwardedRef, forwardRef } from 'react'
import { MainMenuProps } from './types'
import { Nav } from './MainMenuStyles'

function MainMenu(
  { children, ...restProps }: MainMenuProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <Nav ref={ref} {...restProps}>
      {children}
    </Nav>
  )
}

export default forwardRef(MainMenu)
