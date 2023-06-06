import { ForwardedRef, forwardRef } from 'react'
import { TrStyle, TrStyleProps } from './styles'
import { TrHighlights } from './constants'

export type TrProps = Omit<TrStyleProps, '$highlight' | '$interactive'> & {
  highlight?: TrHighlights
}

function Tr(
  { highlight, ...rest }: TrProps,
  ref?: ForwardedRef<HTMLTableRowElement>
) {
  return (
    <TrStyle
      {...rest}
      $highlight={highlight}
      $interactive={!!rest.onClick}
      ref={ref}
    />
  )
}

export default forwardRef(Tr)
