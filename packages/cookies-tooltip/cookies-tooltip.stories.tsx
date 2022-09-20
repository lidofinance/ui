import { Story, Meta } from '@storybook/react'

import { Text } from '@lidofinance/text'
import { CookiesTooltip } from './cookies-tooltip'

export default {
  title: 'CookiesTooltip/Basic',
} as Meta

export const Basic: Story = () => (
  <>
    <Text>
      CookiesTooltip component have a ability to detect a user choice in other
      tabs and third level domain.
    </Text>
    <Text>
      You can check above if you:
      <br />
      - duplicate this tab;
      <br />
      - allow or decline cookie;
      <br />
      - and check in another tab;
      <br />- and click to work area (to handler window.onfocus event).
    </Text>
    <CookiesTooltip />
  </>
)
