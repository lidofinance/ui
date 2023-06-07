import React, { ForwardedRef, forwardRef } from 'react'
import {
  SectionStyle,
  SectionHeaderStyle,
  SectionTitleStyle,
  SectionHeaderDecoratorStyle,
  SectionStyleProps,
} from './SectionStyles'

export type SectionProps = SectionStyleProps & {
  title?: React.ReactNode
  headerDecorator?: React.ReactNode
}

function Section(
  { title, headerDecorator, children, ...rest }: SectionProps,
  ref?: ForwardedRef<HTMLDivElement>
) {
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
