import React, { FC, useEffect, useState } from 'react'
import { Cookie, CookieInverse } from '@lidofinance/icons'
import { ContentTheme } from '@lidofinance/content-theme'
import { getCrossDomainCookieClientSide } from '@lidofinance/utils'

import {
  Wrap,
  Box,
  CookieIconWrap,
  Text,
  ButtonsWrap,
  AllowButton,
  DeclineButton,
  Link,
} from './styles'
import { allowCookies, declineCookies } from './utils'
import { COOKIE_ALLOWED_KEY } from './constants'

export const CookiesTooltip: FC = () => {
  const [isVisible, setVisibility] = useState(false)

  useEffect(() => {
    if (getCrossDomainCookieClientSide(COOKIE_ALLOWED_KEY) === null) {
      setVisibility(true)
    }
  }, [])

  if (!isVisible) return <></>

  return (
    <Wrap>
      <Box>
        <CookieIconWrap>
          <ContentTheme
            darkContent={<CookieInverse />}
            lightContent={<Cookie />}
          />
        </CookieIconWrap>
        <Text>
          We use cookies to collect anonymous site visitation data
          to&nbsp;improve the performance of&nbsp;our&nbsp;website.
          For&nbsp;more info read our&nbsp;
          <Link href='https://lido.fi/privacy-notice'>Privacy Notice</Link>
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
