export type LidoComponentProps<
  T extends keyof JSX.IntrinsicElements,
  Props extends object = {},
> = Props &
  Omit<
    JSX.IntrinsicElements[T] & {
      as?: keyof JSX.IntrinsicElements
      forwardedAs?: keyof JSX.IntrinsicElements
    },
    'ref' | keyof Props
  >
