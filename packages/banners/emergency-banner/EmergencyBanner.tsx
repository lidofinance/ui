import cn from 'classnames'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Button } from '../../button'
import { UrgentIcon } from './assets/UrgentIcon'

import styles from './EmergencyBanner.module.css'

export type EmergencyBannerDataProps = {
  title?: ReactNode
  description?: ReactNode
  link?: string
  linkText?: string
}

export type EmergencyBannerProps = ComponentPropsWithoutRef<'div'> &
  EmergencyBannerDataProps

export const EmergencyBanner = ({
  className,
  title,
  description,
  link,
  linkText,
  ...rest
}: EmergencyBannerProps) => {
  return (
    <div className={cn(className, styles.banner)} {...rest}>
      <div className={styles.content}>
        <UrgentIcon className={styles.icon} width={80} height={80} />
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>

        <Button
          rel='noreferrer'
          className={styles.button}
          href={link}
          size={'s'}
          textStyle={'semibold'}
          target='_blank'
        >
          <span className={styles.buttonContent}>{linkText}</span>
        </Button>
      </div>
    </div>
  )
}
