import {
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react'
import { createPortal } from 'react-dom'

import cn from 'classnames'

import { usePresence } from '../hooks'
import { Toast } from './Toast'
import styles from './ToastStack.module.css'
import {
  toast,
  type ToastContent,
  type ToastContentProps,
  type ToastItem,
} from './toastStore'
import { useToasts } from './useToasts'

export const DEFAULT_TOAST_TIMEOUT = 5000

export type ToastStackPosition = 'top-right' | 'bottom-right' | 'bottom-center'

const positionClass: Record<ToastStackPosition, string> = {
  'top-right': styles.topRight,
  'bottom-right': styles.bottomRight,
  'bottom-center': styles.bottomCenter,
}

export type ToasterLabels = {
  /** Region name for assistive tech; the hotkey is appended. */
  region?: string
  /** Default dismiss button name for every toast; a toast's own `labels.close` wins. */
  close?: string
}

const DEFAULT_REGION_LABEL = 'Notifications'

export type ToasterProps = {
  position?: ToastStackPosition
  /** Default auto-dismiss delay in ms for toasts without their own `timeout`. */
  timeout?: number
  /** `KeyboardEvent.key` (no modifiers) that moves focus to the newest toast and back; `null` disables. Default 'F8'. */
  hotkey?: string | null
  /** Built-in texts, for i18n. */
  labels?: ToasterLabels
  dataTestId?: string
}

const isToastProps = (content: ToastContent): content is ToastContentProps =>
  typeof content === 'object' &&
  content !== null &&
  !isValidElement(content) &&
  !Array.isArray(content) &&
  'title' in content

const isSticky = (timeout: number) => timeout <= 0 || !Number.isFinite(timeout)

const getTitle = (content: ToastContent): ReactNode =>
  isToastProps(content) ? content.title : (content as ReactNode)

const isPlainText = (node: ReactNode): node is string | number =>
  typeof node === 'string' || typeof node === 'number'

const getProps = (content: ToastContent): Partial<ToastContentProps> =>
  isToastProps(content) ? content : {}

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
  items.forEach((it, i) => {
    if (prev.some((entry) => entry.item.id === it.id)) return
    const at = next.findIndex(
      (entry) => items.findIndex((x) => x.id === entry.item.id) > i,
    )
    next.splice(at < 0 ? next.length : at, 0, { item: it, closing: false })
  })
  return next
}

const usePageAway = () => {
  const [blurred, setBlurred] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const syncHidden = () => setHidden(document.visibilityState === 'hidden')
    let blurTimer: ReturnType<typeof setTimeout> | undefined
    const onFocus = () => {
      clearTimeout(blurTimer)
      setBlurred(false)
    }
    const onBlur = () => {
      clearTimeout(blurTimer)
      blurTimer = setTimeout(
        () => document.activeElement?.tagName !== 'IFRAME' && setBlurred(true),
      )
    }
    syncHidden()
    document.addEventListener('visibilitychange', syncHidden)
    window.addEventListener('focus', onFocus)
    window.addEventListener('blur', onBlur)
    return () => {
      clearTimeout(blurTimer)
      document.removeEventListener('visibilitychange', syncHidden)
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('blur', onBlur)
    }
  }, [])

  return blurred || hidden
}

const ToastView = ({
  item,
  defaultTimeout,
  closing,
  paused,
  returnFocusTo,
  closeLabel,
  onHold,
  onExited,
}: {
  item: ToastItem
  defaultTimeout: number
  closing: boolean
  paused: boolean
  returnFocusTo: RefObject<HTMLElement | null>
  closeLabel?: string
  onHold: (on: boolean) => void
  onExited: (id: string) => void
}) => {
  const timeout = item.timeout ?? defaultTimeout
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  const holding = (hovered || focused) && !closing
  useEffect(() => {
    if (!holding) return
    onHold(true)
    return () => onHold(false)
  }, [holding, onHold])

  const remaining = useRef(timeout)
  const startedAt = useRef(0)

  useEffect(() => {
    remaining.current = timeout
  }, [timeout, item])

  const running = !paused && !closing && !isSticky(timeout)
  useEffect(() => {
    if (!running) return
    startedAt.current = Date.now()
    const timer = setTimeout(
      () => toast.dismiss(item.id),
      Math.max(0, remaining.current),
    )
    return () => {
      clearTimeout(timer)
      remaining.current -= Date.now() - startedAt.current
    }
  }, [running, timeout, item])

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
    const open = (el: Element | null) =>
      el && el !== root && !el.hasAttribute('aria-hidden') ? el : null
    let next: Element | null = root.nextElementSibling
    while (next && !open(next)) next = next.nextElementSibling
    let prev: Element | null = root.previousElementSibling
    while (prev && !open(prev)) prev = prev.previousElementSibling
    const outside = returnFocusTo.current?.isConnected
      ? returnFocusTo.current
      : null
    const target =
      (next ?? prev)?.querySelector<HTMLElement>('button') ?? outside
    target?.focus()
  }, [returnFocusTo])

  useEffect(() => {
    if (closing) moveFocusAway()
  }, [closing, moveFocusAway])

  const props = getProps(item.content)
  const run = useRef({ item, n: 0 })
  if (run.current.item !== item) run.current = { item, n: run.current.n + 1 }

  return (
    <div
      ref={setRoot}
      className={styles.item}
      {...motionProps}
      aria-hidden={closing || undefined}
      aria-live={item.assertive ? 'off' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setFocused(false)
        }
      }}
    >
      <div className={styles.inner}>
        <div className={styles.body}>
          <Toast
            role='none'
            {...props}
            duration={isSticky(timeout) ? undefined : timeout}
            paused={paused || closing}
            progressKey={run.current.n}
            labels={{
              ...props.labels,
              close: props.labels?.close ?? closeLabel,
            }}
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

/** Renders `toast()` notifications in a stack portaled to `body`; mount once near the app root. Assertive toasts announce the title plus plain-text (string/number) `subheader` and `children` only. */
export const Toaster = ({
  position = 'top-right',
  timeout = DEFAULT_TOAST_TIMEOUT,
  hotkey = 'F8',
  labels,
  dataTestId,
}: ToasterProps) => {
  const items = useToasts()
  const region = labels?.region ?? DEFAULT_REGION_LABEL
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
  const [held, setHeld] = useState(0)
  const hold = useCallback(
    (on: boolean) => setHeld((n) => n + (on ? 1 : -1)),
    [],
  )
  const away = usePageAway()
  const paused = held > 0 || away
  const stackRef = useRef<HTMLDivElement>(null)
  const returnFocusTo = useRef<HTMLElement | null>(null)

  const returnFocus = () => {
    const target = returnFocusTo.current
    if (!target?.isConnected || stackRef.current?.contains(target)) return false
    target.focus()
    return true
  }

  useEffect(() => {
    if (!hotkey) return
    const onKeyDown = (event: KeyboardEvent) => {
      const stack = stackRef.current
      if (
        !stack ||
        event.defaultPrevented ||
        event.isComposing ||
        event.key !== hotkey ||
        event.altKey ||
        event.shiftKey ||
        event.ctrlKey ||
        event.metaKey
      )
        return
      if (stack.contains(document.activeElement)) {
        if (returnFocus()) event.preventDefault()
        return
      }
      const open = stack.querySelectorAll<HTMLElement>(
        `.${styles.item}:not([aria-hidden])`,
      )
      const focusable = 'a[href], button:not(:disabled)'
      const newest = open[open.length - 1]
      const target =
        newest
          ?.querySelector('[data-toast-actions]')
          ?.querySelector<HTMLElement>(focusable) ??
        newest?.querySelector<HTMLElement>(focusable)
      if (!target) return
      event.preventDefault()
      if (document.activeElement !== document.body) {
        returnFocusTo.current = document.activeElement as HTMLElement | null
      }
      target.focus()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [hotkey])

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return createPortal(
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- handlers only observe focus/Escape bubbling from toasts
    <div
      ref={stackRef}
      className={cn(styles.stack, positionClass[position])}
      data-testid={dataTestId}
      role='region'
      aria-label={hotkey ? `${region} (${hotkey})` : region}
      aria-live='polite'
      onFocus={(e) => {
        const from = e.relatedTarget as HTMLElement | null
        if (from && from !== document.body && !e.currentTarget.contains(from))
          returnFocusTo.current = from
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null))
          returnFocusTo.current = null
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && !e.nativeEvent.isComposing && returnFocus()) {
          e.preventDefault()
        }
      }}
      data-lido-overlay-keep=''
    >
      <div aria-live='assertive' className={styles.srOnly}>
        {items
          .filter((item) => item.assertive)
          .map((item) => {
            const { subheader, children } = getProps(item.content)
            return (
              <div key={item.id} aria-atomic='true'>
                {isPlainText(subheader) && <div>{subheader}</div>}
                <div>{getTitle(item.content)}</div>
                {isPlainText(children) && <div>{children}</div>}
              </div>
            )
          })}
      </div>
      {entries.map(({ item, closing }) => (
        <ToastView
          key={item.id}
          item={item}
          defaultTimeout={timeout}
          closing={closing}
          paused={paused}
          returnFocusTo={returnFocusTo}
          closeLabel={labels?.close}
          onHold={hold}
          onExited={handleExited}
        />
      ))}
    </div>,
    document.body,
  )
}
