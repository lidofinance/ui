import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { MiniButton } from '.'

const meta: Meta<typeof MiniButton> = {
  title: 'Buttons/MiniButton',
  component: MiniButton,
  tags: ['autodocs'],
  args: {
    children: 'Max',
  },
  argTypes: {
    children: { description: 'Label', control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The 26px pill that sits inside other controls — the Max button in `RichInput` is this. Too small for a standalone action; use `SmallButton` for that.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const States: Story = {
  render: () => (
    <StorySection>
      <MiniButton>Max</MiniButton>
      <MiniButton disabled>Max</MiniButton>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Default and disabled. At this size the label dims further than on the bigger buttons so it stays legible.',
      },
    },
  },
}
