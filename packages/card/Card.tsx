import cn from 'classnames'
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import { Button } from '../button'
import styles from './Card.module.css'

export type CardProps = ComponentPropsWithoutRef<'div'> & {}

export const Card = forwardRef(
  (
    { ...rest }: CardProps,
    ref?: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    return (
      <div className={styles.item}>
        <h2
          className={styles.titleItem}
          data-testid='steth-section__blockThreeTitle'
        >
          Competitive rewards, deep liquidity
        </h2>
        <h5
          className={styles.descriptionItem}
          data-testid='steth-section__blockThreeDescription'
        >
          Trade stETH on secondary markets, use as collateral in lending or
          restaking
        </h5>
        <div className={styles.logos}>
          <div
            className={styles.logoWrapper}
            data-testid='steth-section__blockThreeAaveLogo'
          ></div>
          <div
            className={styles.logoWrapper}
            data-testid='steth-section__blockThreeMellowLogo'
          ></div>
          <Button
            color={'outline'}
            className={cn(styles.button, styles.exploreButton)}
            //href={URLS.STETH_IN_DEFI}
            data-testid='steth-section__blockThreeExploreButton'
          >
            Explore
          </Button>
        </div>
      </div>
    )
  },
)

Card.displayName = 'Card'
