import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { RadioButton } from '.'

const meta: Meta<typeof RadioButton> = {
  title: 'Inputs & Controls/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  args: {
    label: 'Option',
  },
  argTypes: {
    label: { description: 'Text next to the circle; omit for a bare radio' },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A 24px circle with a label, wrapped in a `<label>` so the text is clickable. It forwards every native input prop — group multiple radios with a shared `name`.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Group: Story = {
  render: function Render() {
    const [value, setValue] = useState('a')

    return (
      <StoryContainer gap={16}>
        <RadioButton
          name='group'
          label='Option A'
          checked={value === 'a'}
          onChange={() => setValue('a')}
        />
        <RadioButton
          name='group'
          label='Option B'
          checked={value === 'b'}
          onChange={() => setValue('b')}
        />
        <RadioButton
          name='group'
          label='Option C'
          checked={value === 'c'}
          onChange={() => setValue('c')}
        />
      </StoryContainer>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Share a `name` and drive `checked`/`onChange` to form a group.',
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <StoryContainer gap={16}>
      <RadioButton label='Unchecked' name='states-1' defaultChecked={false} />
      <RadioButton label='Checked' name='states-2' defaultChecked />
      <RadioButton aria-label='Without a label' name='states-3' />
      <RadioButton label='Disabled unchecked' name='states-4' disabled />
      <RadioButton
        label='Disabled checked'
        name='states-5'
        disabled
        defaultChecked
      />
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
