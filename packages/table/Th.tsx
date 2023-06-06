import { ForwardedRef, forwardRef } from 'react'
import {
  ThStyle,
  ThTdContentStyle,
  ArrowBottomStyle,
  ArrowTopStyle,
  ThStyleProps,
} from './styles'
import { TableAligns, ThSortDirs, ThTdVariants } from './constants'

export type ThProps = Omit<
  ThStyleProps,
  '$align' | '$interactive' | '$variant'
> & {
  align?: TableAligns
  sortDir?: ThSortDirs
  variant?: ThTdVariants
}

function Th(
  { align = 'left', children, sortDir, variant, ...rest }: ThProps,
  ref?: ForwardedRef<HTMLTableHeaderCellElement>
) {
  return (
    <ThStyle
      {...rest}
      $interactive={!!rest.onClick}
      $align={align}
      $variant={variant}
      ref={ref}
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
