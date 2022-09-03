import React, { ForwardedRef, forwardRef } from 'react'
import { AccordionProps } from './types'
import {
  AccordionStyle,
  AccordionSummaryStyle,
  AccordionTitleStyle,
  AccordionArrowStyle,
  AccordionContentStyle,
} from './AccordionStyles'
import { useExpanded } from './useExpanded'

function Accordion(props: AccordionProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { defaultExpanded, summary, children, ...rest } = props
  const { toggleProps, collapseProps, isExpanded } = useExpanded(props)

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
}

export default forwardRef(Accordion)
