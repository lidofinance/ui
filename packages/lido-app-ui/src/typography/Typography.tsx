import type { ElementType, HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Typography.module.css'

export const typographyColors = [
  'default',
  'secondary',
  'tertiary',
  'neutral',
  'active',
  'success',
  'warning',
  'error',
  'info',
  'inverse',
  'disabled',
] as const

export type TypographyColor = (typeof typographyColors)[number]

export const typographyWeights = [
  'thin',
  'regular',
  'medium',
  'semibold',
  'bold',
] as const

export type TypographyWeight = (typeof typographyWeights)[number]

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'amount'
  | 'bodyLarge'
  | 'body'
  | 'description'
  | 'caption'

/** @deprecated `richInput` → `amount`, `groupName` → `caption` */
type DeprecatedTypographyVariant = 'richInput' | 'groupName'

export type TypographyDataTestId = {
  root?: string
}

export type TypographyProps = Omit<HTMLAttributes<HTMLElement>, 'color'> & {
  /** Type style; also decides the default tag. */
  variant?: TypographyVariant | DeprecatedTypographyVariant
  /** Overrides the variant's font weight. */
  weight?: TypographyWeight
  /** Text color token; omit to inherit. */
  color?: TypographyColor
  /** Overrides the rendered tag without changing the style. */
  as?: ElementType
  dataTestId?: TypographyDataTestId
}

const resolveVariant = (
  variant: TypographyVariant | DeprecatedTypographyVariant,
): TypographyVariant =>
  variant === 'richInput'
    ? 'amount'
    : variant === 'groupName'
      ? 'caption'
      : variant

const variantTag: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  amount: 'p',
  bodyLarge: 'p',
  body: 'p',
  description: 'p',
  caption: 'p',
}

/** Typed text in Manrope; use the shortcuts (`H1`, `Body`, ...) in app code and `Typography` when the variant is dynamic. The same styles ship as PostCSS mixins from `@lidofinance/lido-app-ui/styles`. */
export const Typography = ({
  variant = 'body',
  weight,
  color,
  as,
  className,
  children,
  dataTestId,
  ...rest
}: TypographyProps) => {
  const resolved = resolveVariant(variant)
  const Component = as ?? variantTag[resolved]

  return (
    <Component
      className={cn(
        styles.root,
        styles[resolved],
        color && styles[`color-${color}`],
        weight && styles[`weight-${weight}`],
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

export const Caption = (props: ShorthandProps) => (
  <Typography {...props} variant='caption' />
)

/** @deprecated use Caption */
export const GroupName = Caption
