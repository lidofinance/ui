import type { ReactNode } from 'react'

/** True for anything React would visibly render, including `0`; false for `null`, `undefined`, booleans and `''`. */
export const hasContent = (node: ReactNode) =>
  node != null && typeof node !== 'boolean' && node !== ''
