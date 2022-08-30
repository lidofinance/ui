import React from 'react'
import { createContext, useContext, FC } from 'react'
import { StackSpacings } from './types'

export interface StackContext {
  spacing?: StackSpacings
}

const Context = createContext({} as StackContext)

export const useStackContext = (): StackContext => {
  return useContext(Context)
}

export const StackProvider: FC<StackContext> = (props) => {
  const { spacing, ...rest } = props

  return <Context.Provider value={{ spacing }} {...rest} />
}
