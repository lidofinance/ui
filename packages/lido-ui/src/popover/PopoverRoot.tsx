import { ForwardedRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { modalRoot } from '../utils/index.js'
import { useMergeRefs, useOutsideClick, useEscape } from '../hooks/index.js'
import { withTransition } from '../transition/index.js'
import { usePopoverPosition } from './usePopoverPosition.js'
import { PopoverWrapperStyle, PopoverRootStyle } from './PopoverRootStyles.js'
import { PopoverRootInnerProps } from './types.js'
import { DEFAULT_PLACEMENT } from './constants.js'

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
        style: propsStyle,
        onClose,
        ...rest
      }: PopoverRootInnerProps,
      externalRef?: ForwardedRef<HTMLDivElement>,
    ) => {
      useEscape(onClose)
      const { ref: outsidePopoverRef } = useOutsideClick(onClose)

      const {
        popoverRef: positionPopoverRef,
        wrapperRef: positionWrapperRef,
        style,
      } = usePopoverPosition({ placement, anchorRef, style: propsStyle })

      const popoverRef = useMergeRefs([
        positionPopoverRef,
        outsidePopoverRef,
        externalRef,
      ])

      const wrapperRef = useMergeRefs([positionWrapperRef, externalWrapperRef])

      if (!modalRoot) return null

      return ReactDOM.createPortal(
        <PopoverWrapperStyle $backdrop={backdrop} ref={wrapperRef}>
          <PopoverRootStyle
            {...rest}
            $transition={transitionStatus}
            $duration={duration}
            data-placement={placement}
            style={style}
            ref={popoverRef}
          />
        </PopoverWrapperStyle>,
        modalRoot,
      )
    },
  ),
)
PopoverRoot.displayName = 'PopoverRoot'
