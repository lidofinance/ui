import { FC, useEffect, useState, useCallback, ComponentPropsWithoutRef } from 'react'
import { getCrossDomainCookieClientSide } from '../utils/index.js'
import {
  Wrap,
  Box,
  Text,
  ButtonsWrap,
  AllowButton,
  DeclineButton,
  ExternalLink,
} from './styles.js'
import { allowCookies, declineCookies } from './utils.js'
import { COOKIE_ALLOWED_KEY } from './constants.js'

export type CookiesTooltipProps = ComponentPropsWithoutRef<'div'> & {
  privacyNoticeUrl?: string
}

export const CookiesTooltip: FC<CookiesTooltipProps> = ({
  privacyNoticeUrl = 'https://lido.fi/privacy-notice'
}) => {
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
    <Wrap>
      <Box>
        <Text>
          Cookies are used to collect anonymous site visitation data
          to&nbsp;improve website performance. For&nbsp;more info, read&nbsp;
          <ExternalLink href={privacyNoticeUrl}>
            Privacy Notice
          </ExternalLink>
        </Text>
        <ButtonsWrap>
          <AllowButton
            onClick={() => {
              allowCookies()
              setVisibility(false)
            }}
          >
            Allow
          </AllowButton>
          <DeclineButton
            onClick={() => {
              declineCookies()
              setVisibility(false)
            }}
          >
            Decline
          </DeclineButton>
        </ButtonsWrap>
      </Box>
    </Wrap>
  )
}
