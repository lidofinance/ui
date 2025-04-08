import cn from 'classnames'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Button } from '../../button'
import { UrgentIcon } from './assets/UrgentIcon'

import styles from './EmergencyBanner.module.css'

export type EmergencyBannerDataTestId = {
  root?: string
  button?: string
}

export type EmergencyBannerDataProps = {
  title?: ReactNode
  description?: ReactNode
  link?: string
  linkText?: string
  dataTestId?: EmergencyBannerDataTestId
}

export type EmergencyBannerProps = ComponentPropsWithoutRef<'div'> &
  EmergencyBannerDataProps

export const EmergencyBanner = ({
  className,
  title,
  description,
  link,
  dataTestId,
  linkText,
  ...rest
}: EmergencyBannerProps) => {
  return (
    <div
      className={cn(className, styles.banner)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div className={styles.content}>
        <UrgentIcon className={styles.icon} width={80} height={80} />
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>

        <Button
          rel='noreferrer'
          className={styles.button}
          href={link}
          size={'s'}
          data-testid={dataTestId?.button}
          textStyle={'semibold'}
          target='_blank'
        >
          {linkText}
        </Button>
      </div>
    </div>
  )
}
