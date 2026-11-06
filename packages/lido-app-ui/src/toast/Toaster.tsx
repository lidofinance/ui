import {
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'

import { usePresence } from '../hooks'
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

type ToastEntry = { item: ToastItem; closing: boolean }

const syncEntries = (
  prev: ToastEntry[],
  items: readonly ToastItem[],
): ToastEntry[] => {
  const next: ToastEntry[] = prev.map((entry) => {
    const current = items.find((it) => it.id === entry.item.id)
    return current
      ? { item: current, closing: false }
      : { item: entry.item, closing: true }
  })
  items.forEach((it) => {
    if (!prev.some((entry) => entry.item.id === it.id)) {
      next.push({ item: it, closing: false })
    }
  })
  return next
}

const ToastView = ({
  item,
  defaultTimeout,
  closing,
  onExited,
}: {
  item: ToastItem
  defaultTimeout: number
  closing: boolean
  onExited: (id: string) => void
}) => {
  const timeout = item.timeout ?? defaultTimeout
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const paused = hovered || focused || closing
  const remaining = useRef(timeout)
  const startedAt = useRef(0)
  const rootRef = useRef<HTMLDivElement | null>(null)
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

  const { ref: presenceRef, motionProps } = usePresence<HTMLDivElement>(
    !closing,
    { appear: true, subtree: true, onExited: () => onExited(item.id) },
  )
  const setRoot = useCallback(
    (node: HTMLDivElement | null) => {
      rootRef.current = node
      presenceRef(node)
    },
    [presenceRef],
  )

  const moveFocusAway = useCallback(() => {
    const root = rootRef.current
    if (!root || !root.contains(document.activeElement)) return
    const sibling = root.nextElementSibling ?? root.previousElementSibling
    const target =
      sibling?.querySelector<HTMLElement>('button') ?? returnFocusTo.current
    target?.focus()
  }, [])

  useEffect(() => {
    if (closing) moveFocusAway()
  }, [closing, moveFocusAway])

  const props = getProps(item.content)

  return (
    <div
      ref={setRoot}
      className={styles.item}
      {...motionProps}
      aria-hidden={closing || undefined}
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
      <div className={styles.inner}>
        <div className={styles.body}>
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
      </div>
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
  const [entries, setEntries] = useState<ToastEntry[]>(() =>
    syncEntries([], items),
  )
  useEffect(() => setEntries((prev) => syncEntries(prev, items)), [items])
  const handleExited = useCallback(
    (id: string) =>
      setEntries((prev) =>
        prev.filter((entry) => !(entry.closing && entry.item.id === id)),
      ),
    [],
  )
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
      {entries.map(({ item, closing }) => (
        <ToastView
          key={item.id}
          item={item}
          defaultTimeout={timeout}
          closing={closing}
          onExited={handleExited}
        />
      ))}
    </ToastStack>,
    document.body,
  )
}
