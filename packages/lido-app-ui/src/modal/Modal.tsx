import {
  useEffect,
  useId,
  useRef,
  type MouseEvent,
  type ReactNode,
} from 'react'

import { IconCross } from '../icons'
import cn from 'classnames'

import styles from './Modal.module.css'

// Ref-counted so stacked overlays (e.g. connect modal + an action modal) lock on
// the first and only restore on the last, regardless of close order.
let scrollLockCount = 0
let restoreOverflow = ''

const lockBodyScroll = () => {
  if (scrollLockCount === 0) {
    restoreOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
  scrollLockCount += 1
}

const unlockBodyScroll = () => {
  scrollLockCount = Math.max(0, scrollLockCount - 1)
  if (scrollLockCount === 0) {
    document.body.style.overflow = restoreOverflow
  }
}

export type ModalProps = {
  title?: ReactNode
  onClose?: () => void
  withOverlay?: boolean
  bodyFill?: boolean
  children: ReactNode
  className?: string
}

export const Modal = ({
  title,
  onClose,
  withOverlay = false,
  bodyFill = false,
  children,
  className,
}: ModalProps) => {
  const titleId = useId()
  const backdropMouseDown = useRef(false)

  useEffect(() => {
    if (!withOverlay) return
    lockBodyScroll()
    return unlockBodyScroll
  }, [withOverlay])

  const handleOverlayMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    backdropMouseDown.current = event.target === event.currentTarget
  }

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return
    if (!backdropMouseDown.current) return
    onClose?.()
  }

  const card = (
    <div
      className={cn(styles.card, bodyFill && styles.cardBodyFill, className)}
      role='dialog'
      aria-modal={withOverlay || undefined}
      aria-labelledby={title ? titleId : undefined}
    >
      <div className={styles.header}>
        <span
          id={titleId}
          className={cn(styles.title, !title && styles.titleHidden)}
        >
          {title}
        </span>
        {onClose ? (
          <button
            type='button'
            className={styles.close}
            aria-label='Close'
            onClick={onClose}
          >
            <IconCross />
          </button>
        ) : null}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )

  if (!withOverlay) return card

  return (
    // The backdrop is a pointer-only affordance — making it focusable would put
    // a stop in the tab order before the dialog. Keyboard users close via the
    // close button.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={styles.overlay}
      onMouseDown={handleOverlayMouseDown}
      onClick={handleOverlayClick}
    >
      {card}
    </div>
  )
}
