import { ForwardedRef, forwardRef } from 'react'
import { SectionProps } from './types.js'
import {
  SectionStyle,
  SectionHeaderStyle,
  SectionTitleStyle,
  SectionHeaderDecoratorStyle,
} from './SectionStyles.js'

export const Section = forwardRef(
  (
    { title, headerDecorator, children, ...rest }: SectionProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
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
  },
)
Section.displayName = 'Section'
