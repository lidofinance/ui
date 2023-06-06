import { ForwardedRef, forwardRef } from 'react'
import { TfootStyle, TfootStyleProps } from './styles'

export type TfootProps = TfootStyleProps

function Tfoot(props: TfootProps, ref?: ForwardedRef<HTMLTableSectionElement>) {
  return <TfootStyle ref={ref} {...props} />
}

export default forwardRef(Tfoot)
