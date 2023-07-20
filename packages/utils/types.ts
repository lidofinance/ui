import { Ref } from 'react'

export type HTMLElementByName<T extends keyof JSX.IntrinsicElements> =
  T extends React.DetailedHTMLProps<React.HTMLAttributes<infer H>, infer H>
    ? H
    : never

// Joins { a: 'b' } & { c: 'd' } into { a: 'b', c: 'd' }
export type Simplify<T> = {
  [K in keyof T]: T[K]
}

export type NewLidoComponentProps<
  ElementName extends keyof JSX.IntrinsicElements,
  // eslint-disable-next-line
  Props extends object = any,
  ElementType = HTMLElementByName<ElementName>,
> = Props &
  Simplify<
    Omit<JSX.IntrinsicElements[ElementName], 'ref' | keyof Props> & {
      ref: Ref<ElementType>
    }
  >

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
