import React, { PropsWithChildren, createContext, useContext, FC } from 'react'
import { StackSpacings } from './Stack'

export interface StackContext {
  spacing?: StackSpacings
}

const Context = createContext({} as StackContext)

export const useStackContext = (): StackContext => {
  return useContext(Context)
}

export const StackProvider: FC<PropsWithChildren<StackContext>> = (props) => {
  const { spacing, ...rest } = props

  return <Context.Provider value={{ spacing }} {...rest} />
}
