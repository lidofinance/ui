import { ForwardedRef, ReactNode, forwardRef } from 'react'
import { Select, SelectProps } from './Select'
import cn from 'classnames'
import './SelectIcon.css'

export type SelectIconProps = Omit<
  SelectProps,
  'leftDecorator' | 'fullwidth' | 'arrow'
> & {
  icon: ReactNode
}

export const SelectIcon = forwardRef(
  (
    { icon, className, ...rest }: SelectIconProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Select
        className={cn('select-icon', className)}
        fullwidth={false}
        arrow='small'
        leftDecorator={<span className='select-icon-decorator'>{icon}</span>}
        ref={ref}
        {...rest}
      />
    )
  },
)
SelectIcon.displayName = 'SelectIcon'
