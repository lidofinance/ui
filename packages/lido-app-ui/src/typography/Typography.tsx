import type { ElementType, HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Typography.module.css'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'richInput'
  | 'bodyLarge'
  | 'body'
  | 'description'
  | 'groupName'

// Weight only applies to bodyLarge/body/description; headings are single-weight by design.
export type TypographyWeight = 'regular' | 'semibold'

export type TypographyDataTestId = {
  root?: string
}

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  /** Type style; also decides the default tag. */
  variant: TypographyVariant
  /** Only `bodyLarge`, `body` and `description` have two weights. */
  weight?: TypographyWeight
  /** Overrides the rendered tag without changing the style. */
  as?: ElementType
  dataTestId?: TypographyDataTestId
}

const variantTag: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  richInput: 'p',
  bodyLarge: 'p',
  body: 'p',
  description: 'p',
  groupName: 'p',
}

const isBodyVariant = (variant: TypographyVariant): boolean =>
  variant === 'bodyLarge' || variant === 'body' || variant === 'description'

/** Typed text in Manrope; use the shortcuts (`H1`, `Body`, ...) in app code and `Typography` when the variant is dynamic. The same styles ship as PostCSS mixins from `@lidofinance/lido-app-ui/styles`. */
export const Typography = ({
  variant,
  weight,
  as,
  className,
  children,
  dataTestId,
  ...rest
}: TypographyProps) => {
  const Component = as ?? variantTag[variant]

  return (
    <Component
      className={cn(
        styles.root,
        styles[variant],
        weight === 'semibold' && isBodyVariant(variant) && styles.semibold,
        className,
      )}
      data-testid={dataTestId?.root}
      {...rest}
    >
      {children}
    </Component>
  )
}

type ShorthandProps = Omit<TypographyProps, 'variant'>

export const H1 = (props: ShorthandProps) => (
  <Typography {...props} variant='h1' />
)

export const H2 = (props: ShorthandProps) => (
  <Typography {...props} variant='h2' />
)

export const H3 = (props: ShorthandProps) => (
  <Typography {...props} variant='h3' />
)

export const BodyLarge = (props: ShorthandProps) => (
  <Typography {...props} variant='bodyLarge' />
)

export const Body = (props: ShorthandProps) => (
  <Typography {...props} variant='body' />
)

export const Description = (props: ShorthandProps) => (
  <Typography {...props} variant='description' />
)

export const GroupName = (props: ShorthandProps) => (
  <Typography {...props} variant='groupName' />
)
