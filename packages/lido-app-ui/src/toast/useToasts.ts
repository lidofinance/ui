import { useSyncExternalStore } from 'react'

import { getToasts, subscribeToasts, type ToastItem } from './toastStore'

const EMPTY: readonly ToastItem[] = []

/** Current toast list, updated as `toast()` and `toast.dismiss()` are called. */
export const useToasts = (): readonly ToastItem[] =>
  useSyncExternalStore(subscribeToasts, getToasts, () => EMPTY)
