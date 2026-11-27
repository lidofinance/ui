import type { HTMLAttributes } from 'react'

import cn from 'classnames'

import { alignToCss, type StackAlign } from '../stack/Stack'
import { spaceToCss, type Space } from '../utils'
import styles from './Card.module.css'

export type CardDataTestId = {
  root?: string
}

export type CardAlign = Exclude<StackAlign, 'baseline'>

/** Corner radius token: `lg` 20px, `xl` 32px. */
export type CardRadius = 'lg' | 'xl'

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Cross-axis alignment of children; `stretch` makes tables and full-width buttons fill the card. */
  align?: CardAlign
  /** Uniform padding from the spacing scale in px; `0` makes a flush card. Defaults to 32, or 20 in a narrow container. */
  padding?: Space
  /** Gap between children from the spacing scale in px. Defaults to 32. */
  gap?: Space
  /** Corner radius: `lg` 20px, `xl` 32px. Defaults to `lg`. */
  radius?: CardRadius
  /** Clips overflowing children to the card's rounded corners (flush tables, images). */
  clip?: boolean
  dataTestId?: CardDataTestId
}

/** Rounded surface that fills the width its parent gives it and tightens its padding in narrow containers; needs a definite-width parent. */
export const Card = ({
  align,
  padding,
  gap,
  radius = 'lg',
  clip = false,
  className,
  style,
  children,
  dataTestId,
  ...rest
}: CardProps) => (
  <div
    className={cn(
      styles.card,
      radius === 'xl' && styles.radiusXl,
      clip && styles.clip,
      className,
    )}
    style={style}
    data-testid={dataTestId?.root}
    {...rest}
  >
    <div
      className={styles.content}
      style={{
        ...(align && { alignItems: alignToCss(align) }),
        ...(padding !== undefined && { padding: spaceToCss(padding) }),
        ...(gap !== undefined && { gap: spaceToCss(gap) }),
      }}
    >
      {children}
    </div>
  </div>
)
