import type {
  ComponentPropsWithoutRef,
  HTMLAttributes,
  ComponentPropsWithRef,
  ElementType,
  ReactElement,
  Ref,
} from 'react'

/** Own props plus `as` and the props of the rendered element or component. */
export type PolymorphicProps<E extends ElementType, P> = P & { as?: E } & Omit<
    ComponentPropsWithoutRef<E>,
    keyof P | 'as'
  >

/** Call signature for a `forwardRef` component cast to follow its `as` prop. Intrinsic tags take `Ref<HTMLElement>` so existing `useRef<HTMLElement>` callers keep compiling. The trailing non-generic overload keeps `ComponentProps`/`ElementRef` inference and untyped `as` callers working. */
export type PolymorphicComponent<D extends ElementType, P> = (<
  E extends ElementType = D,
>(
  props: PolymorphicProps<E, P> & {
    ref?: E extends string ? Ref<HTMLElement> : ComponentPropsWithRef<E>['ref']
  },
) => ReactElement | null) &
  ((
    props: HTMLAttributes<HTMLElement> &
      P & { as?: ElementType; ref?: Ref<HTMLElement> },
  ) => ReactElement | null) & { displayName?: string }
