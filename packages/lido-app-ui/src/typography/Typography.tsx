import type { ElementType, HTMLAttributes } from 'react'

import cn from 'classnames'

import styles from './Typography.module.css'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'bodyLarge'
  | 'body'
  | 'description'
  | 'groupName'

// Weight only applies to bodyLarge/body; headings are single-weight by design.
export type TypographyWeight = 'regular' | 'semibold'

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant: TypographyVariant
  weight?: TypographyWeight
  as?: ElementType
}

const variantTag: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  bodyLarge: 'p',
  body: 'p',
  description: 'p',
  groupName: 'p',
}

const isBodyVariant = (variant: TypographyVariant): boolean =>
  variant === 'bodyLarge' || variant === 'body'

export const Typography = ({
  variant,
  weight,
  as,
  className,
  children,
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
