import cn from 'classnames'

import {
  ForwardedRef,
  forwardRef,
  MouseEvent,
  MouseEventHandler,
  RefObject,
} from 'react'
import { Button } from '../../button'
import { ThinClose } from '../../icons'
import styles from './Banner.module.css'

export type BannerProps = {
  variant?: 'primary' | 'secondary'
  className?: string
  href: string
  text: string
  title?: string
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
      text,
      onClose,
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
        {...rest}
      >
        <Button
          ref={ref as RefObject<HTMLAnchorElement>}
          textStyle={'normal'}
          onClick={handleAnchorClick}
          href={href}
          className={styles.mainButton}
          withArrow={true}
          hideArrowOnMobile={true}
          color={'transparent'}
          size={'s'}
        >
          <div className={styles.buttonContent}>
            {title && <div className={styles.title}>{title}</div>}
            {text && <div>{text}</div>}
          </div>
        </Button>

        <Button
          size={'s'}
          shape={'circle'}
          icon={<ThinClose />}
          color={'outline'}
          className={styles.closeButton}
          onClick={handleCloseBanner}
        ></Button>
      </div>
    )
  },
)
Banner.displayName = 'Banner'
