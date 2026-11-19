import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import type { AnchorProps } from '../link-provider/Anchor'
import { ActionElement, type ActionElementProps } from '../utils'
import styles from './SmallCard.module.css'

export type SmallCardDataTestId = {
  root?: string
  image?: string
  logo?: string
  icon?: string
  title?: string
  description?: string
  footer?: string
}

type SmallCardOwnProps = {
  /** Fixed-height (120px) media slot above the header — an image or illustration. */
  image?: ReactNode
  logo?: ReactNode
  /** Trailing glyph next to the title — an external-link arrow, a badge, etc. */
  icon?: ReactNode
  title: ReactNode
  description?: ReactNode
  /** Arbitrary content below the description — wraps in a row, e.g. a list of `Tag`s. */
  footer?: ReactNode
  /** Stretches to the parent's height and pins `footer` to the bottom; for equal-height cards in a row or grid. */
  fill?: boolean
  dataTestId?: SmallCardDataTestId
}

export type SmallCardProps = SmallCardOwnProps &
  (
    | (Omit<AnchorProps, 'title' | 'href'> & { href: string })
    | (Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> & {
        href?: undefined
      })
  )

/** Clickable card: a link with `href`, otherwise a `<button type="button">`; optional `image`, `logo`, title with trailing `icon`, `description` and `footer`; title and description wrap instead of truncating. */
export const SmallCard = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  SmallCardProps
>(
  (
    {
      image,
      logo,
      icon,
      title,
      description,
      footer,
      fill = false,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => (
    <ActionElement
      ref={ref}
      className={cn(styles.card, fill && styles.fill, className)}
      data-testid={dataTestId?.root}
      {...(rest as ActionElementProps)}
    >
      <span className={styles.content}>
        {image != null ? (
          <span className={styles.image} data-testid={dataTestId?.image}>
            {image}
          </span>
        ) : null}
        <span className={styles.header}>
          {logo != null ? (
            <span className={styles.logo} data-testid={dataTestId?.logo}>
              {logo}
            </span>
          ) : null}
          <span className={styles.title} data-testid={dataTestId?.title}>
            {title}
          </span>
          {icon != null ? (
            <span
              className={styles.icon}
              aria-hidden='true'
              data-testid={dataTestId?.icon}
            >
              {icon}
            </span>
          ) : null}
        </span>
        {description != null ? (
          <span
            className={styles.description}
            data-testid={dataTestId?.description}
          >
            {description}
          </span>
        ) : null}
      </span>
      {footer != null ? (
        <span className={styles.footer} data-testid={dataTestId?.footer}>
          {footer}
        </span>
      ) : null}
    </ActionElement>
  ),
)

SmallCard.displayName = 'SmallCard'
