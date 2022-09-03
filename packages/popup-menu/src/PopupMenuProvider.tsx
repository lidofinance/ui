import React, { createContext, useContext, FC } from 'react'
import { PopupMenuVariants } from './types'

export interface PopupMenuContext {
  variant?: PopupMenuVariants
}

const Context = createContext({} as PopupMenuContext)

export const usePopupMenuContext = (): PopupMenuContext => {
  return useContext(Context)
}

export const PopupMenuProvider: FC<PopupMenuContext> = (props) => {
  const { variant, ...rest } = props

  return <Context.Provider value={{ variant }} {...rest} />
}
