import { ForwardedRef, forwardRef } from 'react'
import { SectionProps } from './types'
import {
  SectionStyle,
  SectionHeaderStyle,
  SectionTitleStyle,
  SectionHeaderDecoratorStyle,
} from './SectionStyles'

function Section(
  { title, headerDecorator, children, ...rest }: SectionProps,
  ref?: ForwardedRef<HTMLDivElement>,
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
