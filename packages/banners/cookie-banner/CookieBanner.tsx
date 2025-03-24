import cn from 'classnames'
import { ComponentPropsWithoutRef } from 'react'
import { Button } from '../../button'
import { Link } from '../../links'
import style from './CookieBanner.module.css'

export type CookieBannerDataTestId = {
  root?: string
  allowButton?: string
  declineButton?: string
}

export type CookieBannerProps = ComponentPropsWithoutRef<'div'> & {
  privacyUrl: string
  onAllow: () => void
  onDecline: () => void
  dataTestId?: CookieBannerDataTestId
}

export const CookieBanner = ({
  className,
  children,
  privacyUrl,
  onAllow,
  onDecline,
  dataTestId,
  ...rest
}: CookieBannerProps) => {
  return (
    <div
      className={cn(className, style.banner)}
      {...rest}
      data-testid={dataTestId?.root}
      id={'banner-cookie'}
    >
      <span className={style.text}>
        Cookies are used to collect anonymous site visitation data to improve
        the performance of website. For more info read{' '}
        <Link href={privacyUrl}>Privacy Notice</Link>
      </span>
      <div className={style.buttons}>
        <Button
          className={style.button}
          onClick={onAllow}
          data-testid={dataTestId?.allowButton}
        >
          Allow
        </Button>
        <Button
          color={'outline'}
          className={style.button}
          onClick={onDecline}
          data-testid={dataTestId?.declineButton}
        >
          Decline
        </Button>
      </div>
    </div>
  )
}
