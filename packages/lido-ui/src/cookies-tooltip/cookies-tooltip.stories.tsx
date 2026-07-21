import { StoryFn, Meta } from '@storybook/react'
import { Text } from '../text/index.js'
import { CookiesTooltip } from './index.js'

export default {
  title: 'CookiesTooltip/Basic',
} as Meta

export const Basic: StoryFn = () => (
  <>
    <Text>
      CookiesTooltip component has an ability to detect a user choice in other
      tabs and third level domain.
    </Text>
    <Text>
      You can check above if you:
      <br />
      1. duplicate this tab;
      <br />
      2. allow or decline cookie;
      <br />
      3. and check in another tab;
      <br />
      4. and click to work area (to handler window.onfocus event).
    </Text>
    <CookiesTooltip />
  </>
)

export const WithPrivacyLinkEnabled: StoryFn = () => (
  <>
    <Text>
      This story shows the CookiesTooltip with the privacy link enabled (default
      behavior). The privacy link appears in the text and links to the privacy
      notice.
    </Text>
    <CookiesTooltip privacyLinkEnabled={true} />
  </>
)

export const WithPrivacyLinkDisabled: StoryFn = () => (
  <>
    <Text>
      This story shows the CookiesTooltip with the privacy link disabled. Notice
      that no privacy link appears in the text.
    </Text>
    <CookiesTooltip privacyLinkEnabled={false} />
  </>
)

export const WithCustomPrivacyTextAndLink: StoryFn = () => (
  <>
    <Text>
      This story shows the CookiesTooltip with custom privacy text and a custom
      privacy link. The privacy link is enabled and points to a custom URL.
    </Text>
    <CookiesTooltip
      privacyLinkEnabled={true}
      privacyLink='https://example.com/custom-privacy'
      privacyText={
        <>
          We use cookies to enhance your experience on our website. By
          continuing to browse, you agree to our use of cookies.
        </>
      }
    />
  </>
)

export const WithCustomPrivacyTextNoLink: StoryFn = () => (
  <>
    <Text>
      This story shows the CookiesTooltip with custom privacy text but no
      privacy link. Even though custom text is provided, the privacy link is
      disabled.
    </Text>
    <CookiesTooltip
      privacyLinkEnabled={false}
      privacyText={
        <>
          We use cookies to improve our services. You can accept or decline
          cookies using the buttons below.
        </>
      }
    />
  </>
)
