import cn from 'classnames'
import Link from 'next/link'

import {
  ForwardedRef,
  forwardRef,
  MouseEvent,
  MouseEventHandler,
  RefObject,
} from 'react'
import { Button } from '../../button'
import { Close } from '../../icons'
import styles from './Banner.module.css'

export type BannerDataTestId = {
  root?: string
  mainButton?: string
  closeButton?: string
}

export type BannerProps = {
  variant?: 'primary' | 'secondary'
  className?: string
  href: string
  title: string
  dataTestId?: BannerDataTestId
  onClose?: MouseEventHandler
  onLinkClick?: MouseEventHandler
}

export const Banner = forwardRef(
  (
    {
      variant = 'primary',
      className,
      href,
      title,
      onClose,
      dataTestId,
      onLinkClick,
      ...rest
    }: BannerProps,
    ref?: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    const handleAnchorClick = (e: MouseEvent) => {
      onLinkClick && onLinkClick(e)
    }
    const handleCloseBanner = (e: MouseEvent) => {
      onClose && onClose(e)
    }
    return (
      <div
        className={cn(className, styles.banner, {
          [styles.variantPrimary]: variant == 'primary',
          [styles.variantSecondary]: variant == 'secondary',
        })}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <Link
          ref={ref as RefObject<HTMLAnchorElement>}
          onClick={handleAnchorClick}
          data-testid={dataTestId?.mainButton}
          href={href}
          className={styles.mainButton}
        >
          <div className={styles.buttonContent}>{title}</div>
        </Link>
        <Button
          size={'s'}
          shape={'circle'}
          icon={<Close />}
          color={'tertiary'}
          data-testid={dataTestId?.closeButton}
          className={styles.closeButton}
          onClick={handleCloseBanner}
        ></Button>
      </div>
    )
  },
)
Banner.displayName = 'Banner'
