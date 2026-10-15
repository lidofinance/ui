import cn from 'classnames'

import {
  ForwardedRef,
  forwardRef,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  RefObject,
} from 'react'
import { Button } from '../../button'
import { Close } from '../../icons'
import styles from './Banner.module.css'
import { DynamicLink } from '../../links'

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
  /** Rendered before the title */
  icon?: ReactNode
  /** Rendered after the title; wraps onto the next line together with the last word */
  endIcon?: ReactNode
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
      icon,
      endIcon,
      onClose,
      dataTestId,
      onLinkClick,
      ...rest
    }: BannerProps,
    ref?: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    // The last word is kept on the same line as the end icon,
    // so the icon never wraps onto a line of its own
    const lastSpaceIndex = title.trimEnd().lastIndexOf(' ')
    const titleHead = title.slice(0, lastSpaceIndex + 1)
    const titleTail = title.slice(lastSpaceIndex + 1).trimEnd()

    const handleAnchorClick = (e: MouseEvent) => {
      onLinkClick?.(e)
    }
    const handleCloseBanner = (e: MouseEvent) => {
      onClose?.(e)
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
        <DynamicLink
          ref={ref as RefObject<HTMLAnchorElement>}
          onClick={handleAnchorClick}
          data-testid={dataTestId?.mainButton}
          href={href}
          className={styles.mainButton}
        >
          <div className={styles.buttonContent}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {endIcon ? (
              <span className={styles.title}>
                {titleHead}
                <span className={styles.titleTail}>
                  {titleTail}
                  <span className={styles.endIcon}>
                    <span className={styles.icon}>{endIcon}</span>
                  </span>
                </span>
              </span>
            ) : icon ? (
              <span className={styles.title}>{title}</span>
            ) : (
              title
            )}
          </div>
        </DynamicLink>
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
