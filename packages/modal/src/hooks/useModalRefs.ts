import { useMergeRefs } from 'use-callback-ref'

export const useModalRefs = <T extends HTMLElement>(
  refs: (React.ForwardedRef<T | null> | undefined)[]
): React.MutableRefObject<T | null> => {
  return useMergeRefs(refs.filter((ref): ref is React.ForwardedRef<T> => !!ref))
}
