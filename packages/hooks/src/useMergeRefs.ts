import { useMergeRefs as useCallbackMergeRefs } from 'use-callback-ref'
import React from 'react'

export const useMergeRefs = <T extends HTMLElement>(
  refs: (React.ForwardedRef<T | null> | undefined)[]
): React.MutableRefObject<T | null> => {
  return useCallbackMergeRefs(
    refs.filter((ref): ref is React.ForwardedRef<T> => !!ref)
  )
}
