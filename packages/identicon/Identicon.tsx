import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import cn from 'classnames'
import styles from './Identicon.module.css'

export type IdenticonProps = ComponentPropsWithoutRef<'div'> & {
  address: string
  diameter?: number
  paperStyles?: React.CSSProperties
  svgStyles?: React.CSSProperties
}

export const Identicon = forwardRef(
  (
    {
      diameter = 24,
      address,
      paperStyles,
      svgStyles,
      className,
      ...rest
    }: IdenticonProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const iconProps = { diameter, paperStyles, svgStyles }

    return (
      <div className={cn(styles.identicon, className)} {...rest} ref={ref}>
        <Jazzicon seed={jsNumberForAddress(address)} {...iconProps} />
      </div>
    )
  },
)
Identicon.displayName = 'Identicon'
