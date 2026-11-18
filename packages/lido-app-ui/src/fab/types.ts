import type {
  IconButtonAsButtonProps,
  IconButtonAsLinkProps,
} from '../icon-button'

type Omitted = 'variant' | 'counter' | 'counterLabel'

export type FabProps =
  | Omit<IconButtonAsButtonProps, Omitted>
  | Omit<IconButtonAsLinkProps, Omitted>
