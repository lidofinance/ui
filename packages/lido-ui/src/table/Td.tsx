import { ForwardedRef, forwardRef } from 'react'
import { TdProps } from './types.js'
import { TdStyle, ThTdContentStyle } from './styles.js'

export const Td = forwardRef(
  (
    {
      align = 'left',
      textColor = 'default',
      variant,
      children,
      numeric = false,
      ...rest
    }: TdProps,
    ref?: ForwardedRef<HTMLTableDataCellElement>,
  ) => {
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
  },
)
Td.displayName = 'Td'
