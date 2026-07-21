import { ForwardedRef, forwardRef } from 'react'
import { TabProps } from './types.js'
import { TabButtonStyle, TabLabelStyle } from './TabsStyles.js'

export const Tab = forwardRef(
  (
    { active = false, children, ...rest }: TabProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <TabButtonStyle
        $active={active}
        aria-selected={active}
        role='tab'
        tabIndex={active ? 0 : -1}
        type='button'
        ref={ref}
        {...rest}
      >
        <TabLabelStyle $active={active}>{children}</TabLabelStyle>
      </TabButtonStyle>
    )
  },
)
Tab.displayName = 'Tab'
