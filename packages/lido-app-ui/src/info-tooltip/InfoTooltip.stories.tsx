import type { Meta, StoryObj } from '@storybook/react'

import { IconLockKeyhole } from '../icons'
import { InfoTooltip } from '.'

const meta: Meta<typeof InfoTooltip> = {
  title: 'Content & Data/InfoTooltip',
  component: InfoTooltip,
  tags: ['autodocs'],
  args: {
    content: 'Splitter addresses receive stETH.',
  },
  argTypes: {
    size: { control: { type: 'inline-radio' }, options: [16, 20] },
    tone: {
      control: { type: 'inline-radio' },
      options: ['secondary', 'tertiary'],
    },
    position: {
      control: { type: 'select' },
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ],
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An icon (info by default) that reveals a `Tooltip` on hover or keyboard focus. Focusable, with an `aria-label` of "More info" unless overridden.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Size20: Story = {
  args: { size: 20 },
}

export const TertiaryTone: Story = {
  args: { tone: 'tertiary' },
}

export const RichContent: Story = {
  args: {
    content: (
      <>
        <strong>Rewards Address</strong>
        <br />
        Splitter addresses receive stETH. Choose the token for your Rewards
        Address.
      </>
    ),
  },
}

export const CustomIcon: Story = {
  args: {
    icon: <IconLockKeyhole />,
    size: 20,
    'aria-label': 'Locked',
    content: 'Amount is fixed by the bond curve.',
  },
}
