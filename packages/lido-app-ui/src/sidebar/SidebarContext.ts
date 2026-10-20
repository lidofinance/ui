import { createContext, useContext } from 'react'

import type { UseSidebarDrawerResult } from './useSidebarDrawer'

export const SidebarContext = createContext<UseSidebarDrawerResult | undefined>(
  undefined,
)

export type UseSidebarResult = Pick<UseSidebarDrawerResult, 'open' | 'setOpen'>

/** Drawer state of the surrounding SidebarLayout, or `undefined` outside one. */
export const useSidebar = (): UseSidebarResult | undefined =>
  useContext(SidebarContext)
