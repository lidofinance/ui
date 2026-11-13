import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from '.'

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs & Controls/Checkbox',
  component: Checkbox,
  args: {
    label: 'I have read and agree to the Terms of Use',
  },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    indeterminate: { control: { type: 'boolean' } },
    error: { control: { type: 'text' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox label='Unchecked' />
      <Checkbox label='Checked' defaultChecked />
      <Checkbox label='Indeterminate' indeterminate checked={false} />
      <Checkbox aria-label='Without a label' />
      <Checkbox label='Disabled unchecked' disabled />
      <Checkbox label='Disabled checked' disabled checked={true} />
    </div>
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

export const Error: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox label='Styling only' error />
      <Checkbox
        label='I have read and agree to the Terms of Use'
        error='Accept the terms to continue'
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`error` sets `aria-invalid` and outlines the unchecked box; a checked box keeps its fill. `true` is styling only, a node also renders the message below the label.',
      },
    },
  },
}

const cycle = ['unchecked', 'indeterminate', 'checked'] as const

export const Cycle: Story = {
  render: function Render() {
    const [step, setStep] = useState(0)
    const state = cycle[step]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Checkbox
          label={`State: ${state}`}
          checked={state !== 'unchecked'}
          indeterminate={state === 'indeterminate'}
          onChange={() => setStep((step + 1) % cycle.length)}
        />
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Click to cycle unchecked, indeterminate, checked; the tick draws in left to right, the dash grows from the centre; the outgoing glyph fades out over the fast-exit duration while the new one draws in, a brief cross-fade.',
      },
    },
  },
}
