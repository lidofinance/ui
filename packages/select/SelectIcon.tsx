import { ForwardedRef, ReactNode, forwardRef } from 'react'
import {
  SelectIconDecoratorStyle,
  SelectIconStyle,
  SelectIconStyleProps,
} from './SelectIconStyles'

export type SelectIconProps = Omit<
  SelectIconStyleProps,
  'leftDecorator' | 'fullwidth' | 'arrow'
> & {
  icon: ReactNode
}

function SelectIcon(
  { icon, ...rest }: SelectIconProps,
  ref?: ForwardedRef<HTMLInputElement>
) {
  return (
    <SelectIconStyle
      {...rest}
      fullwidth={false}
      arrow='small'
      leftDecorator={
        <SelectIconDecoratorStyle>{icon}</SelectIconDecoratorStyle>
      }
      ref={ref}
    />
  )
}

export default forwardRef(SelectIcon)
