import type { HTMLAttributes } from 'react'

import cn from 'classnames'

import { alignToCss, type StackAlign } from '../stack/Stack'
import styles from './Card.module.css'

export type CardDataTestId = {
  root?: string
}

export type CardAlign = Exclude<StackAlign, 'baseline'>

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Cross-axis alignment of children; `stretch` makes tables and full-width buttons fill the card. */
  align?: CardAlign
  dataTestId?: CardDataTestId
}

/** Rounded, bordered surface that fills the width its parent gives it. */
export const Card = ({
  align,
  className,
  style,
  children,
  dataTestId,
  ...rest
}: CardProps) => (
  <div
    className={cn(styles.card, className)}
    style={align ? { ...style, alignItems: alignToCss(align) } : style}
    data-testid={dataTestId?.root}
    {...rest}
  >
    {children}
  </div>
)
