import { createContext, useContext, FC } from 'react'
import { PopupMenuSizes } from './types'

export interface PopupMenuContext {
  size?: PopupMenuSizes
}

const Context = createContext({} as PopupMenuContext)

export const usePopupMenuContext = (): PopupMenuContext => {
  return useContext(Context)
}

export const PopupMenuProvider: FC<PopupMenuContext> = (props) => {
  const { size, ...rest } = props

  return <Context.Provider value={{ size }} {...rest} />
}
