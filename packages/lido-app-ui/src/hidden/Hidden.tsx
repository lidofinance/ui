import type { HTMLAttributes } from 'react'

import cn from 'classnames'

import { capitalize, type Breakpoint } from '../utils'
import styles from './Hidden.module.css'

export type HiddenProps = HTMLAttributes<HTMLDivElement> & {
  /** Hides at this breakpoint's width and below. */
  below?: Breakpoint
  /** Hides at widths above this breakpoint. */
  above?: Breakpoint
}

/** CSS-only responsive visibility, safe for SSR. Wrapper is `display: contents` while visible. */
export const Hidden = ({ below, above, className, ...rest }: HiddenProps) => (
  <div
    className={cn(
      styles.root,
      below && styles[`below${capitalize(below)}`],
      above && styles[`above${capitalize(above)}`],
      className,
    )}
    {...rest}
  />
)
