import { ForwardedRef, forwardRef } from 'react'
import { AccordionTransparentProps } from './types.js'
import {
  AccordionTransparentStyle,
  AccordionTransparentSummaryStyle,
  AccordionTransparentTitleStyle,
  AccordionTransparentArrowStyle,
  AccordionTransparentContentStyle,
} from './AccordionTransparentStyles.js'
import { useExpanded } from './useExpanded.js'

export const AccordionTransparent = forwardRef(
  (
    {
      defaultExpanded,
      summary,
      children,
      onExpand,
      onCollapse,
      ...rest
    }: AccordionTransparentProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const { toggleProps, collapseProps, isExpanded } = useExpanded({
      defaultExpanded,
      onExpand,
      onCollapse,
    })

    return (
      <AccordionTransparentStyle {...rest} ref={ref}>
        <AccordionTransparentSummaryStyle {...toggleProps}>
          <AccordionTransparentTitleStyle>
            {summary}
          </AccordionTransparentTitleStyle>
          <AccordionTransparentArrowStyle $expanded={isExpanded} />
        </AccordionTransparentSummaryStyle>
        <div {...collapseProps}>
          <AccordionTransparentContentStyle $expanded={isExpanded}>
            {children}
          </AccordionTransparentContentStyle>
        </div>
      </AccordionTransparentStyle>
    )
  },
)
AccordionTransparent.displayName = 'AccordionTransparent'
