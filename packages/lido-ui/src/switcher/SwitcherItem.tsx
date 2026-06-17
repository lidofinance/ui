import { ForwardedRef, forwardRef } from 'react'
import { SwitcherItemProps } from './types.js'
import { SwitcherItemStyle, SwitcherLabelStyle } from './SwitcherStyles.js'

/**
 * Switcher option button.
 */
export const SwitcherItem = forwardRef(
  (
    { active = false, children, ...rest }: SwitcherItemProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <SwitcherItemStyle
        $active={active}
        aria-selected={active}
        role='tab'
        tabIndex={active ? 0 : -1}
        type='button'
        ref={ref}
        {...rest}
      >
        <SwitcherLabelStyle $active={active}>{children}</SwitcherLabelStyle>
      </SwitcherItemStyle>
    )
  },
)
SwitcherItem.displayName = 'SwitcherItem'
