import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { TabButton } from '.'

const meta: Meta<typeof TabButton> = {
  title: 'Navigation/TabButton',
  component: TabButton,
  tags: ['autodocs'],
  args: {
    children: 'Supply',
    active: false,
  },
  argTypes: {
    active: {
      description: 'Darkens the label; the pill itself is drawn by TabBar',
      control: { type: 'boolean' },
    },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The primitive behind `TabBar` — a 26px text button with no background of its own. The white sliding pill belongs to `TabBar`, which is why this renders as plain text on its own. Reach for it only when you are building a custom tab layout.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Text only by design. Toggle `active` to see the label darken — that is the whole visual difference at this level.',
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <StorySection
      style={{
        gap: 4,
        padding: 4,
        borderRadius: 'var(--lido-app-ui-border-radius-control)',
        background: 'var(--lido-app-ui-color-backgrounds-tab-bar)',
        width: 'fit-content',
      }}
    >
      <TabButton>Idle</TabButton>
      <TabButton active>Active</TabButton>
      <TabButton disabled>Disabled</TabButton>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Shown on the grey track `TabBar` provides, since that is the only place these buttons ever appear.',
      },
    },
  },
}
