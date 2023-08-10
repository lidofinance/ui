/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import styled, {
  AnyStyledComponent,
  StyledComponent,
  StyledComponentInnerComponent,
  StyledComponentInnerOtherProps,
  StyledComponentInnerAttrs,
  DefaultTheme,
} from 'styled-components'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  compose,
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from 'styled-system'

import { StyledSystemProps } from './types'
import React from 'react'

type MergePropsWithSS<T extends object> = Omit<T, keyof StyledSystemProps> &
  StyledSystemProps

function withStyledSystem<
  C extends AnyStyledComponent,
  T extends object = DefaultTheme,
  O extends object = {},
  A extends keyof any = never,
>(
  Component: C,
): StyledComponent<
  StyledComponentInnerComponent<C>,
  T,
  MergePropsWithSS<O & StyledComponentInnerOtherProps<C>>,
  A | StyledComponentInnerAttrs<C>
>

function withStyledSystem<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  T extends object = DefaultTheme,
  O extends object = {},
  A extends keyof any = never,
>(Component: C): StyledComponent<C, T, MergePropsWithSS<O>, A>

function withStyledSystem(Component: any) {
  return styled(Component).withConfig<{}>({
    shouldForwardProp,
  })<StyledSystemProps>(
    compose(
      space,
      color,
      typography,
      layout,
      flexbox,
      grid,
      background,
      border,
      position,
      shadow,
    ),
  )
}

export default withStyledSystem
