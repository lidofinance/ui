import { useEffect, useState, type HTMLAttributes, type RefObject } from 'react'

import cn from 'classnames'

import {
  Portal,
  useEscape,
  useFocusTrap,
  useIsomorphicLayoutEffect,
  useOutsideClick,
} from '../hooks'
import styles from './Popover.module.css'

export type PopoverPlacement = 'top' | 'bottom'
export type PopoverAlign = 'start' | 'center' | 'end'
export type PopoverOffset = 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 52

export type PopoverProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean
  onClose: () => void
  anchorRef: RefObject<HTMLElement | null>
  /** Element whose edge the panel aligns to; defaults to the anchor. */
  alignRef?: RefObject<HTMLElement | null>
  placement?: PopoverPlacement
  align?: PopoverAlign
  /** Gap in px between the anchor and the panel. */
  offset?: PopoverOffset
  /** Px, or match the width of the anchor / align element. */
  width?: number | 'anchor' | 'align'
  /** When false, focus stays where it is and isn't trapped, e.g. for menus opened by hover. */
  modal?: boolean
}

const POSITION_KEYS = ['top', 'bottom', 'left', 'right', 'width'] as const
type Coordinates = Partial<Record<(typeof POSITION_KEYS)[number], number>>
type Position = { placement: PopoverPlacement; coordinates: Coordinates }

const samePosition = (a: Position | null, b: Position) =>
  a != null &&
  a.placement === b.placement &&
  POSITION_KEYS.every((key) => a.coordinates[key] === b.coordinates[key])

const VIEWPORT_MARGIN = 8

const clamp = (value: number, max: number) =>
  Math.max(VIEWPORT_MARGIN, Math.min(value, max))

const computePosition = (
  anchor: HTMLElement,
  alignEl: HTMLElement,
  panel: HTMLElement | null,
  placement: PopoverPlacement,
  align: PopoverAlign,
  offset: number,
  width: PopoverProps['width'],
): Position => {
  const anchorRect = anchor.getBoundingClientRect()
  const alignRect =
    alignEl === anchor ? anchorRect : alignEl.getBoundingClientRect()
  const viewportWidth = document.documentElement.clientWidth
  const viewportHeight = document.documentElement.clientHeight

  const fixedWidth =
    typeof width === 'number'
      ? width
      : width === 'anchor'
        ? anchorRect.width
        : width === 'align'
          ? alignRect.width
          : undefined
  const panelWidth = fixedWidth ?? panel?.getBoundingClientRect().width ?? 0
  const maxEdge = viewportWidth - VIEWPORT_MARGIN - panelWidth

  const panelHeight = panel?.getBoundingClientRect().height ?? 0
  const roomBelow =
    viewportHeight - anchorRect.bottom - offset - VIEWPORT_MARGIN
  const roomAbove = anchorRect.top - offset - VIEWPORT_MARGIN
  const [room, opposite] =
    placement === 'top' ? [roomAbove, roomBelow] : [roomBelow, roomAbove]
  const resolved: PopoverPlacement =
    panelHeight > room && opposite > room
      ? placement === 'top'
        ? 'bottom'
        : 'top'
      : placement

  const coordinates: Coordinates = {}
  if (fixedWidth != null) coordinates.width = fixedWidth
  if (resolved === 'top') {
    coordinates.bottom = viewportHeight - anchorRect.top + offset
  } else {
    coordinates.top = anchorRect.bottom + offset
  }
  if (align === 'end') {
    coordinates.right = clamp(viewportWidth - alignRect.right, maxEdge)
  } else if (align === 'center') {
    coordinates.left = clamp(
      alignRect.left + alignRect.width / 2 - panelWidth / 2,
      maxEdge,
    )
  } else {
    coordinates.left = clamp(alignRect.left, maxEdge)
  }
  return { placement: resolved, coordinates }
}

const PopoverPanel = ({
  onClose,
  anchorRef,
  alignRef,
  placement = 'bottom',
  align = 'start',
  offset = 8,
  width,
  modal = true,
  className,
  style,
  children,
  ...rest
}: Omit<PopoverProps, 'open'>) => {
  const [panel, setPanel] = useState<HTMLDivElement | null>(null)
  const [position, setPosition] = useState<Position | null>(null)

  useIsomorphicLayoutEffect(() => {
    const update = () => {
      const anchor = anchorRef.current
      if (!anchor) return
      const next = computePosition(
        anchor,
        alignRef?.current ?? anchor,
        panel,
        placement,
        align,
        offset,
        width,
      )
      // Keeps the previous object so unchanged scroll/resize frames skip a re-render.
      setPosition((prev) => (samePosition(prev, next) ? prev : next))
    }
    update()
    let frame = 0
    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    window.addEventListener('resize', schedule)
    window.addEventListener('scroll', schedule, true)
    const observer =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(schedule)
    if (anchorRef.current) observer?.observe(anchorRef.current)
    return () => {
      observer?.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('scroll', schedule, true)
    }
  }, [anchorRef, alignRef, panel, placement, align, offset, width])

  useFocusTrap(panel, modal && position != null, { restoreFocus: false })
  useEscape(true, onClose)
  useOutsideClick(
    panel,
    (event) => {
      // Anchor clicks are left to the anchor's own toggle handler.
      if (
        event.target instanceof Node &&
        anchorRef.current?.contains(event.target)
      )
        return
      onClose()
    },
    true,
  )

  // Passive cleanup runs after the panel left the DOM; focus is on body unless the user moved it elsewhere.
  useEffect(
    () => () => {
      const active = document.activeElement
      if (!active || active === document.body) anchorRef.current?.focus()
    },
    [anchorRef],
  )

  return (
    <div
      ref={setPanel}
      role='dialog'
      aria-modal={modal || undefined}
      data-placement={position?.placement}
      className={cn(styles.panel, className)}
      style={{
        ...position?.coordinates,
        ...style,
        visibility: position ? undefined : 'hidden',
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export const Popover = ({ open, ...props }: PopoverProps) =>
  open ? (
    <Portal>
      <PopoverPanel {...props} />
    </Portal>
  ) : null
