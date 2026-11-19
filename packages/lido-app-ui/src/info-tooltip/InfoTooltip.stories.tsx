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
      options: ['secondary', 'tertiary', 'inherit'],
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
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
      ],
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An icon (info by default) that reveals a `Tooltip` on hover, keyboard focus or tap. Focusable, with an `aria-label` of "More info" unless overridden.',
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

export const InheritTone: Story = {
  render: () => (
    <span style={{ color: 'var(--lido-app-ui-color-text-warning)' }}>
      <InfoTooltip content='Inherits the warning colour.' tone='inherit' />
    </span>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: '`inherit` takes the surrounding text colour.' },
    },
  },
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

export const Row: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {['Operator', 'Keys', 'Bond', 'Rewards', 'Status'].map((name) => (
        <InfoTooltip key={name} content={`About ${name.toLowerCase()}.`} />
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Once one tooltip is open, moving to a neighbour opens it at once, without the 400ms wait, and only one stays open.',
      },
    },
  },
}
