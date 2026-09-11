import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '.'

import { StoryContainer } from '../../.storybook/components'

const meta: Meta<typeof Switch> = {
  title: 'Controls/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    label: 'Enable notifications',
  },
  argTypes: {
    label: { description: 'Text next to the control; omit for a bare switch' },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A 40×24 toggle track with a label, wrapped in a `<label>` so the text is clickable. It forwards every native input prop, so use it controlled or uncontrolled as you like.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const States: Story = {
  render: () => (
    <StoryContainer gap={16}>
      <Switch label='Off' defaultChecked={false} />
      <Switch label='On' defaultChecked />
      <Switch aria-label='Without a label' />
      <Switch label='Disabled off' disabled />
      <Switch label='Disabled on' disabled checked={true} />
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'On/off, the label-less form (drop `label` and pass `aria-label` when the text lives elsewhere), and the two disabled states.',
      },
    },
  },
}
