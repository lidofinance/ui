import { ForwardedRef, forwardRef } from 'react'
import { TbodyProps } from './types.js'
import { TbodyStyle } from './styles.js'

export const Tbody = forwardRef(
  (props: TbodyProps, ref?: ForwardedRef<HTMLTableSectionElement>) => {
    return <TbodyStyle ref={ref} {...props} />
  },
)
Tbody.displayName = 'Tbody'
