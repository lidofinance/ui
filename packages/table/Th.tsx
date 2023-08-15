import { ForwardedRef, forwardRef } from 'react'
import { ThProps } from './types'
import {
  ThStyle,
  ThTdContentStyle,
  ArrowBottomStyle,
  ArrowTopStyle,
} from './styles'

function Th(
  { align = 'left', children, sortDir, variant, ...rest }: ThProps,
  ref?: ForwardedRef<HTMLTableHeaderCellElement>,
) {
  return (
    <ThStyle
      $interactive={!!rest.onClick}
      $align={align}
      $variant={variant}
      ref={ref}
      {...rest}
    >
      <ThTdContentStyle>
        {children}
        {sortDir === 'ASC' && <ArrowBottomStyle />}
        {sortDir === 'DESC' && <ArrowTopStyle />}
      </ThTdContentStyle>
    </ThStyle>
  )
}

export default forwardRef(Th)
