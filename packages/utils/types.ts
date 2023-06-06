import { ComponentType } from 'react'
import {
  AnyStyledComponent,
  StyledComponent,
  StyledComponentProps,
} from 'styled-components'

// @deprecated
export type LidoComponentProps<
  T extends keyof JSX.IntrinsicElements,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props extends object = {}
> = Props &
  Omit<
    JSX.IntrinsicElements[T] & {
      as?: keyof JSX.IntrinsicElements
      forwardedAs?: keyof JSX.IntrinsicElements
    },
    'ref' | keyof Props
  >

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type InferStyledComponentProps<T extends AnyStyledComponent> =
  T extends StyledComponent<
    infer Component,
    infer Theme,
    infer OtherProps,
    infer Attrs
  >
    ? StyledComponentProps<Component, Theme, OtherProps, Attrs> & {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        as?: keyof JSX.IntrinsicElements | ComponentType<any>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        forwardedAs?: keyof JSX.IntrinsicElements | ComponentType<any>
      }
    : never

export type InferStyledComponentPropsWithoutRef<T extends AnyStyledComponent> =
  Omit<InferStyledComponentProps<T>, 'ref'>
