import { PropsWithChildren, createContext, useContext, FC } from 'react'
import { StackSpacings } from './types'

export interface StackContext {
  spacing?: StackSpacings
}

const Context = createContext({} as StackContext)

export const useStackContext = (): StackContext => {
  return useContext(Context)
}

export const StackProvider: FC<PropsWithChildren<StackContext>> = ({
  spacing,
  ...rest
}) => {
  return <Context.Provider value={{ spacing }} {...rest} />
}
