import {
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'

import { Notification, type NotificationProps } from '../notification'
import styles from './ToastStack.module.css'
import { ToastStack, type ToastStackPosition } from './ToastStack'
import { toast, type ToastContent, type ToastItem } from './toastStore'
import { useToasts } from './useToasts'

export const DEFAULT_TOAST_TIMEOUT = 5000

export type ToasterProps = {
  position?: ToastStackPosition
  /** Default auto-dismiss delay in ms for toasts without their own `timeout`. */
  timeout?: number
  dataTestId?: string
}

const isNotificationProps = (
  content: ToastContent,
): content is NotificationProps =>
  typeof content === 'object' &&
  content !== null &&
  !isValidElement(content) &&
  !Array.isArray(content) &&
  'title' in content

const isSticky = (timeout: number) => timeout <= 0 || !Number.isFinite(timeout)

const getTitle = (content: ToastContent): ReactNode =>
  isNotificationProps(content) ? content.title : (content as ReactNode)

const getProps = (content: ToastContent): Partial<NotificationProps> =>
  isNotificationProps(content) ? content : {}

const ToastView = ({
  item,
  defaultTimeout,
}: {
  item: ToastItem
  defaultTimeout: number
}) => {
  const timeout = item.timeout ?? defaultTimeout
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const paused = hovered || focused
  const remaining = useRef(timeout)
  const startedAt = useRef(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const returnFocusTo = useRef<HTMLElement | null>(null)

  useEffect(() => {
    remaining.current = timeout
  }, [timeout, item])

  useEffect(() => {
    if (paused || isSticky(timeout)) return
    startedAt.current = Date.now()
    const timer = setTimeout(
      () => toast.dismiss(item.id),
      Math.max(0, remaining.current),
    )
    return () => {
      clearTimeout(timer)
      remaining.current -= Date.now() - startedAt.current
    }
  }, [paused, timeout, item])

  const props = getProps(item.content)

  const moveFocusAway = () => {
    const root = rootRef.current
    if (!root || !root.contains(document.activeElement)) return
    const sibling = root.nextElementSibling ?? root.previousElementSibling
    const target =
      sibling?.querySelector<HTMLElement>('button') ?? returnFocusTo.current
    target?.focus()
  }

  return (
    <div
      ref={rootRef}
      aria-live={item.assertive ? 'off' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          returnFocusTo.current = e.relatedTarget as HTMLElement | null
        }
        setFocused(true)
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setFocused(false)
        }
      }}
    >
      <Notification
        role='none'
        {...props}
        title={getTitle(item.content)}
        onClose={(e) => {
          props.onClose?.(e)
          moveFocusAway()
          toast.dismiss(item.id)
        }}
      />
    </div>
  )
}

/** Renders `toast()` notifications in a stack portaled to `body`; mount once near the app root. */
export const Toaster = ({
  position = 'top-right',
  timeout = DEFAULT_TOAST_TIMEOUT,
  dataTestId,
}: ToasterProps) => {
  const items = useToasts()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return createPortal(
    <ToastStack
      position={position}
      aria-live='polite'
      data-lido-overlay-keep=''
      dataTestId={dataTestId}
    >
      <div aria-live='assertive' aria-atomic='true' className={styles.srOnly}>
        {items
          .filter((item) => item.assertive)
          .map((item) => (
            <div key={item.id}>{getTitle(item.content)}</div>
          ))}
      </div>
      {items.map((item) => (
        <ToastView key={item.id} item={item} defaultTimeout={timeout} />
      ))}
    </ToastStack>,
    document.body,
  )
}
