import type { Meta, StoryObj } from '@storybook/react'

import { TextLink } from '../text-link'
import { Disclaimer } from '.'

const meta: Meta<typeof Disclaimer> = {
  title: 'Content & Data/Disclaimer',
  component: Disclaimer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Page-level legal or privacy note. Defaults to the privacy text with a Privacy Notice link; children replace it. Place it as the last child of `PageContent`: `margin-top: auto` pins it to the bottom.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const CustomText: Story = {
  args: {
    children: (
      <>
        Staking involves risks, including smart contract and slashing risks.
        Read the{' '}
        <TextLink href='https://lido.fi/terms-of-use' external>
          Terms of Use
        </TextLink>
        .
      </>
    ),
  },
}
