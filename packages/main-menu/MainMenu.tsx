import { ForwardedRef, forwardRef } from 'react'
import { Nav, NavProps } from './MainMenuStyles'

export type MainMenuProps = NavProps

function MainMenu(
  { children, ...restProps }: MainMenuProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
  return (
    <Nav ref={ref} {...restProps}>
      {children}
    </Nav>
  )
}

export default forwardRef(MainMenu)
