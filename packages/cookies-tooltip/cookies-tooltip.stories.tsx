import { StoryFn, Meta } from '@storybook/react'
import { Text } from '../text'
import { CookiesTooltip } from '.'

export default {
  title: 'CookiesTooltip/Basic',
} satisfies Meta

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
