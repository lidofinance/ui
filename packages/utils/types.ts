import { Ref } from 'react'

export type HTMLElementByName<T extends keyof JSX.IntrinsicElements> =
  T extends React.DetailedHTMLProps<React.HTMLAttributes<infer H>, infer H>
    ? H
    : never

// Joins { a: 'b' } & { c: 'd' } into { a: 'b', c: 'd' }
export type Simplify<T> = {
  [K in keyof T]: T[K]
}

// eslint-disable-next-line
export type SafeObj = {}

// eslint-disable-next-line
export type SafeAny = any

export type NewLidoComponentProps<
  ElementName extends keyof JSX.IntrinsicElements,
  Props extends object = SafeObj,
  ElementType = HTMLElementByName<ElementName>
> = Props &
  Simplify<
    Omit<JSX.IntrinsicElements[ElementName], 'ref' | keyof Props> & {
      ref: Ref<ElementType>
    }
  >

export type LidoComponentProps<
  T extends keyof JSX.IntrinsicElements,
  Props extends object = SafeObj
> = Props &
  Omit<
    JSX.IntrinsicElements[T] & {
      as?: keyof JSX.IntrinsicElements
      forwardedAs?: keyof JSX.IntrinsicElements
    },
    'ref' | keyof Props
  >
