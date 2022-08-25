import { ForwardedRef, forwardRef } from 'react'
import { TdProps } from './types'

import { TdStyle, ThTdContentStyle } from './styles'

function Td(props: TdProps, ref?: ForwardedRef<HTMLTableDataCellElement>) {
  const {
    align = 'left',
    textColor = 'default',
    variant,
    children,
    numeric = false,
    ...rest
  } = props

  return (
    <TdStyle
      $align={align}
      $textColor={textColor}
      $variant={variant}
      $interactive={!!rest.onClick}
      $numeric={numeric}
      ref={ref}
      {...rest}
    >
      <ThTdContentStyle>{children}</ThTdContentStyle>
    </TdStyle>
  )
}

export default forwardRef(Td)
