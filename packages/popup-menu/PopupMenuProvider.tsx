import { PropsWithChildren, createContext, useContext, FC } from 'react'
import { PopupMenuVariants } from './PopupMenu'

export interface PopupMenuContext {
  variant?: PopupMenuVariants
}

const Context = createContext({} as PopupMenuContext)

export const usePopupMenuContext = (): PopupMenuContext => {
  return useContext(Context)
}

export const PopupMenuProvider: FC<PropsWithChildren<PopupMenuContext>> = ({
  variant,
  ...rest
}) => {
  return <Context.Provider value={{ variant }} {...rest} />
}
