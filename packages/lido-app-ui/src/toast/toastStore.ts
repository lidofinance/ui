import type { ReactNode } from 'react'

import type { NotificationProps } from '../notification'

/** A ReactNode renders as the inline title; pass `{ title, children }` for block content. */
export type ToastContent = ReactNode | NotificationProps

export type ToastOptions = {
  id?: string
  /** Ms before auto-dismiss; `0` or `Infinity` keeps it until dismissed. Defaults to the `Toaster` timeout (5000). */
  timeout?: number
  onDismiss?: () => void
  /** Announces via an assertive live region (errors); default is polite. */
  assertive?: boolean
}

export type ToastItem = Omit<ToastOptions, 'id'> & {
  id: string
  content: ToastContent
}

type Listener = () => void

let items: ToastItem[] = []
let counter = 0
const listeners = new Set<Listener>()

const emit = (next: ToastItem[]) => {
  items = next
  listeners.forEach((listener) => listener())
}

export const subscribeToasts = (listener: Listener) => {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export const getToasts = () => items

/** Shows a toast and returns its id; reusing an `id` replaces that toast in place. */
export const toast = (content: ToastContent, options: ToastOptions = {}) => {
  const { id = `toast-${++counter}`, ...rest } = options
  const item: ToastItem = { ...rest, id, content }
  emit(
    items.some((it) => it.id === id)
      ? items.map((it) => (it.id === id ? item : it))
      : [...items, item],
  )
  return id
}

/** Removes the toast with `id`, or all toasts when omitted. */
toast.dismiss = (id?: string) => {
  const removed = items.filter((it) => id === undefined || it.id === id)
  if (!removed.length) return
  emit(items.filter((it) => !removed.includes(it)))
  removed.forEach((it) => it.onDismiss?.())
}
