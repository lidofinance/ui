import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body'
  | 'bodyLarge'
  | 'description'

export type TypographyWeight = 'regular' | 'bold' | 'medium'

export type TypographyDataTestId = {
  root?: string
}

export interface TypographyProps extends PropsWithChildren {
  variant: TypographyVariant
  weight?: TypographyWeight
  className?: string
  dataTestId?: TypographyDataTestId
}

export const Typography: FC<TypographyProps> = ({
  variant,
  className,
  weight,
  children,
  dataTestId,
}) => {
  const baseClass = `ui-typography-${variant.replace(/([A-Z])/g, '-$1').toLowerCase()}`

  // Handle weight classes based on variant and weight
  const getWeightClass = (): Omit<TypographyWeight, 'regular'> => {
    // Special handling for h3 and h4 which use 'medium' instead of 'bold'
    if (variant === 'h1' || variant === 'h2') {
      return ''
    }

    // All other variants use 'bold' class for bold weight
    if (weight === 'bold') {
      return 'bold'
    }
    if (weight === 'medium') {
      if (variant === 'bodyLarge') {
        return 'medium'
      }
    }
    return ''
  }

  const getBaseClass = (): string => {
    const weightClass = getWeightClass()
    if (weightClass) {
      return `${baseClass}-${weightClass}`
    }
    return baseClass
  }
  const classes = cn(getBaseClass(), className)

  const componentMap: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    body: 'p',
    bodyLarge: 'p',
    description: 'p',
  }

  const Component = componentMap[variant]

  return (
    <Component className={classes} data-testid={dataTestId?.root}>
      {children}
    </Component>
  )
}

export const H1: FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant='h1' />
)

export const H2: FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant='h2' />
)

export const H3: FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant='h3' />
)

export const H4: FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant='h4' />
)

export const H5: FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant='h5' />
)

export const BodyLarge: FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant={'bodyLarge'} />
)

export const Body: FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant='body' />
)

export const Description: FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant='description' />
)
