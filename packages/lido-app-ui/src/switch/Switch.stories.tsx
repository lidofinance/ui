import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '.'

import { StoryContainer } from '../../.storybook/components'

const meta: Meta<typeof Switch> = {
  title: 'Inputs & Controls/Switch',
  component: Switch,
  args: {
    label: 'Enable notifications',
  },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
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
