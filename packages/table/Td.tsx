import { ForwardedRef, forwardRef } from 'react'
import { TdStyle, TdStyleProps, ThTdContentStyle } from './styles'
import { TableAligns, TableTextColors, ThTdVariants } from './constants'

export type TdProps = Omit<TdStyleProps, '$align' | '$textColor' | '$variant' | '$interactive' | '$numeric'> & {
  align?: TableAligns
  textColor?: TableTextColors
  variant?: ThTdVariants
  numeric?: boolean
}

function Td(
  {
    align = 'left',
    textColor = 'default',
    variant,
    children,
    numeric = false,
    ...rest
  }: TdProps,
  ref?: ForwardedRef<HTMLTableDataCellElement>
) {
  return (
    <TdStyle
      {...rest}
      $align={align}
      $textColor={textColor}
      $variant={variant}
      $interactive={!!rest.onClick}
      $numeric={numeric}
      ref={ref}
    >
      <ThTdContentStyle>{children}</ThTdContentStyle>
    </TdStyle>
  )
}

export default forwardRef(Td)
