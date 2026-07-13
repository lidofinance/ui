import { ForwardedRef, forwardRef } from 'react'
import { AccordionProps } from './types.js'
import {
  AccordionStyle,
  AccordionSummaryStyle,
  AccordionTitleStyle,
  AccordionArrowStyle,
  AccordionContentStyle,
} from './AccordionStyles.js'
import { useExpanded } from './useExpanded.js'

export const Accordion = forwardRef(
  (
    {
      defaultExpanded,
      summary,
      children,
      onExpand,
      onCollapse,
      ...rest
    }: AccordionProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const { toggleProps, collapseProps, isExpanded } = useExpanded({
      defaultExpanded,
      onExpand,
      onCollapse,
    })

    return (
      <AccordionStyle {...rest} ref={ref}>
        <AccordionSummaryStyle {...toggleProps}>
          <AccordionTitleStyle>{summary}</AccordionTitleStyle>
          <AccordionArrowStyle $expanded={isExpanded} />
        </AccordionSummaryStyle>
        <div {...collapseProps}>
          <AccordionContentStyle>{children}</AccordionContentStyle>
        </div>
      </AccordionStyle>
    )
  },
)
Accordion.displayName = 'Accordion'
