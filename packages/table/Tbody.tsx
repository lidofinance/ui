import { ForwardedRef, forwardRef } from 'react'
import { TbodyStyle, TbodyStyleProps } from './styles'

export type TbodyProps = TbodyStyleProps

function Tbody(props: TbodyProps, ref?: ForwardedRef<HTMLTableSectionElement>) {
  return <TbodyStyle ref={ref} {...props} />
}

export default forwardRef(Tbody)
