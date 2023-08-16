import { ForwardedRef, forwardRef } from 'react'
import { TbodyProps } from './types'
import { TbodyStyle } from './styles'

export const Tbody = forwardRef(
  (props: TbodyProps, ref?: ForwardedRef<HTMLTableSectionElement>) => {
    return <TbodyStyle ref={ref} {...props} />
  },
)
Tbody.displayName = 'Tbody'
