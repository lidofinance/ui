import {
  FC,
  useEffect,
  useState,
  useCallback,
  ComponentPropsWithoutRef,
} from 'react'
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

const DefaultContent = () => (
  <>
    Cookies are used to collect anonymous site visitation data to&nbsp;improve
    website performance. For&nbsp;more info, read&nbsp;
    <ExternalLink href='https://lido.fi/privacy-notice'>
      Privacy Notice
    </ExternalLink>
  </>
)

export type CookiesTooltipProps = ComponentPropsWithoutRef<'div'>

export const CookiesTooltip: FC<CookiesTooltipProps> = ({
  children,
  ...rest
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
    <Wrap {...rest}>
      <Box>
        <Text>{children ?? <DefaultContent />}</Text>
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
