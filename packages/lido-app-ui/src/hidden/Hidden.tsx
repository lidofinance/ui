import { forwardRef, type ElementType, type HTMLAttributes } from 'react'

import cn from 'classnames'

import { capitalize, type Breakpoint } from '../utils'
import styles from './Hidden.module.css'

export type HiddenDataTestId = { root?: string }

export type HiddenProps = HTMLAttributes<HTMLElement> & {
  /** Hides below this breakpoint's width. */
  below?: Breakpoint
  /** Hides at this breakpoint's width and above. */
  above?: Breakpoint
  /** Wrapper tag; `span` is valid inside text, use `div` around block content. */
  as?: 'span' | 'div'
  dataTestId?: HiddenDataTestId
}

/** CSS-only responsive visibility, safe for SSR. Wrapper is `display: contents` while visible. Inside a `<p>` (Typography `body`, `description`...) children must be phrasing content too: a block child closes the paragraph in server HTML and breaks hydration. */
export const Hidden = forwardRef<HTMLElement, HiddenProps>(
  (
    {
      as: Tag = 'span' as ElementType,
      below,
      above,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <Tag
      ref={ref}
      className={cn(
        styles.root,
        below && styles[`below${capitalize(below)}`],
        above && styles[`above${capitalize(above)}`],
        className,
      )}
      data-testid={dataTestId?.root}
      {...rest}
    />
  ),
)

Hidden.displayName = 'Hidden'
