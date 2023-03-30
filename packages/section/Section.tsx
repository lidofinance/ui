import React, { ForwardedRef, forwardRef } from 'react'
import { SectionProps } from './types'
import {
  SectionStyle,
  SectionHeaderStyle,
  SectionTitleStyle,
  SectionHeaderDecoratorStyle,
} from './SectionStyles'

function Section(props: SectionProps, ref?: ForwardedRef<HTMLDivElement>) {
  const { title, headerDecorator, children, ...rest } = props

  return (
    <SectionStyle {...rest} ref={ref}>
      {title && (
        <SectionHeaderStyle>
          <SectionTitleStyle>{title}</SectionTitleStyle>
          {headerDecorator && (
            <SectionHeaderDecoratorStyle>
              {headerDecorator}
            </SectionHeaderDecoratorStyle>
          )}
        </SectionHeaderStyle>
      )}
      {children}
    </SectionStyle>
  )
}

export default forwardRef(Section)
