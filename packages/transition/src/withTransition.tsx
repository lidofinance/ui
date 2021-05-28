import React, { ForwardedRef, forwardRef } from 'react'
import { Transition } from 'react-transition-group'
import { DEFAULT_DURATION } from './constants'
import { TransitionWrapperProps, TransitionInnerProps } from './types'

export default function withTransition<
  P extends TransitionInnerProps,
  E extends HTMLElement
>(
  Component: React.ComponentType<P>
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<
    Omit<P, keyof TransitionInnerProps> & TransitionWrapperProps
  > &
    React.RefAttributes<E>
> {
  function Wrapped(
    props: Omit<P, keyof TransitionInnerProps> & TransitionWrapperProps,
    ref: ForwardedRef<E>
  ) {
    const {
      in: state = false,
      timeout = DEFAULT_DURATION,
      mountOnEnter = true,
      unmountOnExit = true,
      appear = true,
      enter = true,
      exit = true,
      addEndListener,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      ...rest
    } = props

    const transitionProps = {
      in: state,
      timeout,
      mountOnEnter,
      unmountOnExit,
      appear,
      enter,
      exit,
      addEndListener,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
    }

    return (
      <Transition {...transitionProps}>
        {(status) => (
          <Component
            {...(rest as P)}
            duration={timeout}
            transitionStatus={status}
            ref={ref}
          />
        )}
      </Transition>
    )
  }

  return forwardRef(Wrapped)
}
