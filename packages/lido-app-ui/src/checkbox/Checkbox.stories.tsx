import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { Checkbox } from '.'

const meta: Meta<typeof Checkbox> = {
  title: 'Controls/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    label: 'I have read and agree to the Terms of Use',
  },
  argTypes: {
    label: { description: 'Text next to the box; omit for a bare checkbox' },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A 24px box with a label, wrapped in a `<label>` so the text is clickable. It forwards every native input prop, so use it controlled or uncontrolled as you like.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Controlled: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(false)

    return (
      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        label={checked ? 'Terms accepted' : 'Accept the Terms of Use'}
      />
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Pass `checked` + `onChange` to drive it from your own state.',
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <StoryContainer gap={16}>
      <Checkbox label='Unchecked' defaultChecked={false} />
      <Checkbox label='Checked' defaultChecked />
      <Checkbox aria-label='Without a label' />
      <Checkbox label='Disabled unchecked' disabled />
      <Checkbox label='Disabled checked' disabled defaultChecked />
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
