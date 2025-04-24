import { FC, PropsWithChildren } from 'react'
import styles from './Typography.module.css'
import cn from 'classnames'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subheader'
  | 'control'
  | 'body'
  | 'description'

export type TypographyWeight = 'regular' | 'bold' | 'medium' | 'light'

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
  weight,
  className,
  children,
  dataTestId,
}) => {
  const baseClass = `ui-typography-${variant}`

  // Handle weight classes based on variant and weight
  const getWeightClass = () => {
    if (!weight || weight === 'regular') return ''

    // Special handling for h3 and h4 which use 'medium' instead of 'bold'
    if ((variant === 'h3' || variant === 'h4') && weight === 'medium') {
      return 'medium'
    }

    // All other variants use 'bold' class for bold weight
    if (weight === 'bold') {
      return 'bold'
    }

    return ''
  }

  const classes = cn(baseClass, getWeightClass(), styles.typography, className)

  const componentMap: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    subheader: 'h5',
    control: 'label',
    body: 'p',
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

export const Subheader: FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant='subheader' />
)

export const Control: FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant='control' />
)

export const Body: FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant='body' />
)

export const Description: FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography {...props} variant='description' />
)
