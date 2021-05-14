import styled, { AnyStyledComponent } from 'styled-components'
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

function withStyledSystem<
  C extends
    | AnyStyledComponent
    | (keyof JSX.IntrinsicElements | React.ComponentType<any>)
>(Component: C) {
  return styled(Component).withConfig({ shouldForwardProp })<StyledSystemProps>(
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
      shadow
    )
  )
}

export default withStyledSystem
