import { ForwardedRef, forwardRef } from 'react'
import { Address } from '../address'
import { Identicon, IdenticonProps } from './Identicon'
import cn from 'classnames'
import styles from './IdenticonBadge.module.css'

export enum IdenticonBadgeColor {
  background,
  accent,
}
export type IdenticonBadgeColors = keyof typeof IdenticonBadgeColor

export type IdenticonBadgeProps = IdenticonProps & {
  symbols?: number
  color?: IdenticonBadgeColors
}

export const IdenticonBadge = forwardRef(
  (
    {
      symbols = 3,
      color = 'background',
      diameter,
      address,
      paperStyles,
      svgStyles,
      className,
      ...rest
    }: IdenticonBadgeProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const identiconProps = { address, diameter, paperStyles, svgStyles }

    return (
      <div
        className={cn(styles.identiconBadge, className, {
          [styles.background]: color === 'background',
          [styles.accent]: color === 'accent',
        })}
        {...rest}
        ref={ref}
      >
        {symbols > 0 ? (
          <div className={styles.wrapper}>
            <Address address={address} symbols={symbols} />
          </div>
        ) : (
          ''
        )}
        <Identicon {...identiconProps} />
      </div>
    )
  },
)
IdenticonBadge.displayName = 'IdenticonBadge'
