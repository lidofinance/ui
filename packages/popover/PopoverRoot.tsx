import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { modalRoot } from '../utils'
import { useMergeRefs, useOutsideClick, useEscape } from '../hooks'
import {
  TransitionInnerProps,
  TransitionWrapperProps,
  withTransition,
} from '../transition'
import { usePopoverPosition } from './usePopoverPosition'
import { DEFAULT_PLACEMENT } from './constants'
import cn from 'classnames'
import styles from './PopoverRoot.module.css'

export enum PopoverPlacement {
  topLeft,
  top,
  topRight,

  rightTop,
  right,
  rightBottom,

  bottomLeft,
  bottom,
  bottomRight,

  leftTop,
  left,
  leftBottom,
}
export type PopoverPlacements = keyof typeof PopoverPlacement

export type PopoverRootOwnProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
> & {
  wrapperRef?: React.RefObject<HTMLDivElement>
  anchorRef: React.RefObject<HTMLElement | null>
  placement?: PopoverPlacements
  backdrop?: boolean
  onClose?: () => void
}

export type PopoverRootProps = PopoverRootOwnProps & TransitionWrapperProps
export type PopoverRootInnerProps = PopoverRootOwnProps & TransitionInnerProps

export const PopoverRoot = withTransition(
  // eslint-disable-next-line react/display-name
  forwardRef(
    (
      {
        anchorRef,
        wrapperRef: externalWrapperRef,
        placement = DEFAULT_PLACEMENT,
        backdrop = true,
        transitionStatus,
        duration,
        onClose,
        style,
        className,
        ...rest
      }: PopoverRootInnerProps,
      externalRef?: ForwardedRef<HTMLDivElement>,
    ) => {
      useEscape(onClose)
      const { ref: outsidePopoverRef } = useOutsideClick(onClose)

      const {
        popoverRef: positionPopoverRef,
        wrapperRef: positionWrapperRef,
        customStyle,
      } = usePopoverPosition({ placement, anchorRef, style })

      const popoverRef = useMergeRefs([
        positionPopoverRef,
        outsidePopoverRef,
        externalRef,
      ])

      const wrapperRef = useMergeRefs([positionWrapperRef, externalWrapperRef])

      if (!modalRoot) return null

      return ReactDOM.createPortal(
        <div
          className={cn(styles.wrapper, { [styles.backdrop]: backdrop })}
          ref={wrapperRef}
        >
          <div
            className={cn(
              styles.root,
              className,
              ['exiting', 'exited'].includes(transitionStatus)
                ? styles.hidden
                : styles.visible,
            )}
            style={{
              transition: `opacity ${duration}ms ease`,
              ...customStyle,
            }}
            {...rest}
            data-placement={placement}
            ref={popoverRef}
          />
        </div>,
        modalRoot,
      )
    },
  ),
)
PopoverRoot.displayName = 'PopoverRoot'
