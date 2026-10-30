import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '.'

import { StoryContainer } from '../../.storybook/components'

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs & Controls/Checkbox',
  component: Checkbox,
  args: {
    label: 'I have read and agree to the Terms of Use',
  },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const States: Story = {
  args: {
    icon: undefined,
    action: undefined,
  },
  render: () => (
    <StoryContainer gap={16}>
      <Checkbox label='Unchecked' defaultChecked={false} />
      <Checkbox label='Checked' defaultChecked />
      <Checkbox aria-label='Without a label' />
      <Checkbox label='Disabled unchecked' disabled />
      <Checkbox label='Disabled checked' disabled checked={true} />
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Checked/unchecked, the label-less form (drop `label` and pass `aria-label` when the text lives elsewhere), and the two disabled states.',
      },
    },
  },
}
