import { ForwardedRef, forwardRef } from 'react'
import { useMergeRefs } from '../hooks'
import { PopupMenuProvider } from './PopupMenuProvider'
import { usePopupFocus } from './usePopupFocus'
import { Popover, PopoverProps } from '../popover'
import cn from 'classnames'
import styles from './PopupMenu.module.css'

export enum PopupMenuVariant {
  small,
  default,
}
export type PopupMenuVariants = keyof typeof PopupMenuVariant

export type PopupMenuProps = {
  variant?: PopupMenuVariants
} & PopoverProps

export const PopupMenu = forwardRef(
  (
    {
      variant,
      children,
      onKeyDown,
      onMouseMove,
      className,
      ...rest
    }: PopupMenuProps,
    externalRef?: ForwardedRef<HTMLDivElement>,
  ) => {
    const {
      ref: controlRef,
      handleMouseMove,
      handleKeyDown,
      handleEnter,
      handleExit,
    } = usePopupFocus({ onKeyDown, onMouseMove })
    const popupRef = useMergeRefs([controlRef, externalRef])

    return (
      <Popover
        className={cn(styles.popupMenu, className)}
        onMouseMove={handleMouseMove}
        onKeyDown={handleKeyDown}
        onEnter={handleEnter}
        onExit={handleExit}
        tabIndex={-1}
        role='listbox'
        {...rest}
        ref={popupRef}
      >
        <PopupMenuProvider variant={variant}>{children}</PopupMenuProvider>
      </Popover>
    )
  },
)
PopupMenu.displayName = 'PopupMenu'
