import { useCallback, type ForwardedRef, type MutableRefObject } from 'react'

/** Callback ref that fills a local ref and the forwarded one; stable while `ref` is, so a callback ref isn't re-called every render. */
export const useMergedRef = <T>(
  localRef: MutableRefObject<T | null>,
  ref: ForwardedRef<T>,
) =>
  useCallback(
    (node: T | null) => {
      localRef.current = node
      if (typeof ref === 'function') ref(node)
      else if (ref) ref.current = node
    },
    [localRef, ref],
  )
