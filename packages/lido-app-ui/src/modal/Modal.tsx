import {
  useEffect,
  useId,
  useRef,
  type MouseEvent,
  type ReactNode,
} from 'react'

import { IconButton } from '../icon-button'
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

export type ModalDataTestId = {
  root?: string
  title?: string
  subtitle?: string
  closeButton?: string
  body?: string
  overlay?: string
}

export type ModalProps = {
  title?: ReactNode
  subtitle?: ReactNode
  onClose?: () => void
  withOverlay?: boolean
  bodyFill?: boolean
  children: ReactNode
  className?: string
  dataTestId?: ModalDataTestId
}

export const Modal = ({
  title,
  subtitle,
  onClose,
  withOverlay = false,
  bodyFill = false,
  children,
  className,
  dataTestId,
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
      data-testid={dataTestId?.root}
    >
      <div className={styles.headerGroup}>
        <div className={styles.header}>
          <span
            id={titleId}
            className={cn(styles.title, !title && styles.titleHidden)}
            data-testid={dataTestId?.title}
          >
            {title}
          </span>
          {onClose ? (
            <IconButton
              variant='outline'
              aria-label='Close'
              icon={<IconCross />}
              onClick={onClose}
              dataTestId={{ root: dataTestId?.closeButton }}
            />
          ) : null}
        </div>
        {subtitle != null ? (
          <p className={styles.subtitle} data-testid={dataTestId?.subtitle}>
            {subtitle}
          </p>
        ) : null}
      </div>
      <div className={styles.body} data-testid={dataTestId?.body}>
        {children}
      </div>
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
      data-testid={dataTestId?.overlay}
    >
      {card}
    </div>
  )
}
