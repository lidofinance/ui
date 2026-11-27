import type {
  IconButtonAsButtonProps,
  IconButtonAsLinkProps,
} from '../icon-button'

type Omitted = 'variant' | 'counter' | 'counterLabel'

type FabOwnProps = {
  /** Distance in px from the viewport bottom (plus the safe-area inset) while floating, e.g. to clear a bottom bar. Applies at every width unless `mobileBottomOffset` is set. Defaults to 20. */
  bottomOffset?: number
  /** Distance in px at 600px and below. Defaults to `bottomOffset` when it is set, otherwise 12. */
  mobileBottomOffset?: number
}

export type FabProps = FabOwnProps &
  (
    | Omit<IconButtonAsButtonProps, Omitted>
    | Omit<IconButtonAsLinkProps, Omitted>
  )
