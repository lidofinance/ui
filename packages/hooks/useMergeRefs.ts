import { useMergeRefs as useCallbackMergeRefs } from 'use-callback-ref'
import { ForwardedRef, MutableRefObject } from 'react'

export const useMergeRefs = <T extends HTMLElement>(
  refs: (ForwardedRef<T | null> | undefined)[],
): MutableRefObject<T | null> => {
  return useCallbackMergeRefs(
    refs.filter((ref): ref is ForwardedRef<T> => !!ref),
  )
}
