import {
  useEffect,
  useState,
  useCallback,
  ComponentPropsWithoutRef,
} from 'react'
import { Cookie, CookieInverse } from '../icons'
import { ContentTheme } from '../theme/content-theme'
import { getCrossDomainCookieClientSide } from '../utils'
import { allowCookies, declineCookies } from './utils'
import { COOKIE_ALLOWED_KEY } from './constants'
import styles from './cookies-tooltip.module.css'
import cn from 'classnames'

export type CookiesTooltipProps = ComponentPropsWithoutRef<'div'>

export const CookiesTooltip = ({ className, ...rest }: CookiesTooltipProps) => {
  const [isVisible, setVisibility] = useState(false)

  const checkCookieAllowedEarlier = useCallback(() => {
    // Check if user allowed/declined in other tab or third level domain
    if (getCrossDomainCookieClientSide(COOKIE_ALLOWED_KEY)) {
      setVisibility(false)

      window.removeEventListener('focus', checkCookieAllowedEarlier)
    }
  }, [])

  useEffect(() => {
    // Check cookie after page loaded
    if (getCrossDomainCookieClientSide(COOKIE_ALLOWED_KEY)) {
      return
    }

    setVisibility(true)

    // This code runs after returned to this browser tab (window) from other
    window.addEventListener('focus', checkCookieAllowedEarlier)
  }, [checkCookieAllowedEarlier])

  if (!isVisible) return <></>

  return (
    <div className={cn(styles.wrap, className)} {...rest}>
      <div className={styles.box}>
        <div className={styles.iconWrap}>
          <ContentTheme
            darkContent={<CookieInverse />}
            lightContent={<Cookie />}
          />
        </div>
        <div className={styles.text}>
          We use cookies to collect anonymous site visitation data
          to&nbsp;improve performance of&nbsp;our&nbsp;website. For&nbsp;more
          info, read our&nbsp;
          <a
            className={styles.link}
            target='_blank'
            rel='noopener noreferrer'
            href='https://lido.fi/privacy-notice'
          >
            Privacy Notice
          </a>
        </div>
        <div className={styles.buttonWrap}>
          <button
            className={cn(styles.button, styles.buttonAllow)}
            onClick={() => {
              allowCookies()
              setVisibility(false)
            }}
          >
            Allow
          </button>
          <button
            className={cn(styles.button, styles.buttonDecline)}
            onClick={() => {
              declineCookies()
              setVisibility(false)
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
