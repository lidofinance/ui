import type {
  TransitionProps,
  TransitionStatus,
  TransitionActions,
} from 'react-transition-group/Transition'

export type TransitionWrapperProps = Partial<
  Pick<
    TransitionProps<HTMLElement>,
    | 'in'
    | 'mountOnEnter'
    | 'unmountOnExit'
    | 'timeout'
    | 'addEndListener'
    | 'onEnter'
    | 'onEntering'
    | 'onEntered'
    | 'onExit'
    | 'onExiting'
    | 'onExited'
  > &
    Pick<TransitionActions, 'appear' | 'enter' | 'exit'>
>

export type TransitionInnerProps = {
  duration: number
  transitionStatus: TransitionStatus
}
