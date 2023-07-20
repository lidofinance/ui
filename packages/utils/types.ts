export type LidoComponentProps<
  T extends keyof JSX.IntrinsicElements,
  // eslint-disable-next-line
  Props extends object = any,
> = Props &
  Omit<
    JSX.IntrinsicElements[T] & {
      as?: keyof JSX.IntrinsicElements
      forwardedAs?: keyof JSX.IntrinsicElements
    },
    'ref' | keyof Props
  >
