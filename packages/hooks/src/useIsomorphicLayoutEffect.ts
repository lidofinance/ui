import { useEffect, useLayoutEffect } from 'react'

// use this instead of useLayoutEffect for SSR
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
