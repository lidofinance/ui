import {
  ComponentType,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react'
import { useMergeRefs } from '@lidofinance/hooks'
import { Transition } from 'react-transition-group'
import { DEFAULT_DURATION } from './constants'
import { TransitionWrapperProps, TransitionInnerProps } from './types'

type WrappedProps<T> = Omit<T, keyof TransitionInnerProps> &
  TransitionWrapperProps

export default function withTransition<
  P extends TransitionInnerProps,
  E extends HTMLElement,
>(
  Component: ComponentType<P>,
): ForwardRefExoticComponent<
  PropsWithoutRef<WrappedProps<P>> & RefAttributes<E>
> {
  function Wrapped(
    {
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
    }: WrappedProps<P>,
    externalRef: ForwardedRef<E>,
  ) {
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

    const ref = useMergeRefs([externalRef])

    return (
      <Transition {...transitionProps} nodeRef={ref}>
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
