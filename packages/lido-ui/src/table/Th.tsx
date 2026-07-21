import { ForwardedRef, forwardRef } from 'react'
import { ThProps } from './types.js'
import {
  ThStyle,
  ThTdContentStyle,
  ArrowBottomStyle,
  ArrowTopStyle,
} from './styles.js'

export const Th = forwardRef(
  (
    { align = 'left', children, sortDir, variant, ...rest }: ThProps,
    ref?: ForwardedRef<HTMLTableHeaderCellElement>,
  ) => {
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
  },
)
Th.displayName = 'Th'
