import { ForwardedRef, forwardRef } from 'react'
import { ThProps } from './types'

import {
  ThStyle,
  ThTdContentStyle,
  ArrowBottomStyle,
  ArrowTopStyle,
} from './styles'

function Th(props: ThProps, ref?: ForwardedRef<HTMLTableHeaderCellElement>) {
  const { align = 'left', children, sortDir, variant, ...rest } = props

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
