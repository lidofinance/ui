import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Steps } from './Steps'

const meta: Meta<typeof Steps> = {
  title: 'Navigation/Steps',
  component: Steps,
  tags: ['autodocs'],
  args: {
    current: 1,
    steps: [
      { label: 'Connect wallet' },
      { label: 'Add keys' },
      { label: 'Confirm bond' },
    ],
  },
  argTypes: {
    current: { control: { type: 'number', min: 0, max: 4 } },
    orientation: {
      control: { type: 'inline-radio' },
      options: ['auto', 'horizontal', 'vertical'],
    },
    onStepClick: { control: false },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Wizard progress. In `auto` mode it is a row when its container is wide enough for all steps (about 160px per step) and a column below that. Pass `onStepClick` to let users go back to completed steps.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const TwoSteps: Story = {
  args: {
    current: 0,
    steps: [{ label: 'Upload deposit data' }, { label: 'Submit bond' }],
  },
}

export const FiveSteps: Story = {
  args: {
    current: 2,
    steps: [
      { label: 'Connect wallet' },
      { label: 'Choose bond' },
      { label: 'Upload keys' },
      { label: 'Sign transaction' },
      { label: 'Done' },
    ],
  },
}

export const ClickablePreviousSteps: Story = {
  render: function Render() {
    const steps = [
      { label: 'Connect wallet' },
      { label: 'Add keys' },
      { label: 'Confirm bond' },
      { label: 'Done' },
    ]
    const [current, setCurrent] = useState(3)
    return (
      <>
        <Steps steps={steps} current={current} onStepClick={setCurrent} />
        <p>Click a completed step to go back; use Next to advance.</p>
        <Button
          size='small'
          disabled={current === steps.length - 1}
          onClick={() => setCurrent(current + 1)}
        >
          Next
        </Button>
      </>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: { source: { type: 'code' } },
  },
}

export const NarrowContainer: Story = {
  args: { current: 1 },
  parameters: { docs: { source: { type: 'code' } } },
  render: function Render(args) {
    return (
      <div style={{ width: 280 }}>
        <Steps
          current={args.current}
          steps={[
            { label: 'Connect wallet' },
            { label: 'Add keys' },
            { label: 'Confirm bond' },
            { label: 'Done' },
          ]}
        />
      </div>
    )
  },
}

export const ForcedVertical: Story = {
  args: { orientation: 'vertical' },
}

export const ForcedHorizontal: Story = {
  args: { orientation: 'horizontal' },
  parameters: { docs: { source: { type: 'code' } } },
  render: function Render(args) {
    return (
      <div style={{ width: 280, overflowX: 'auto' }}>
        <Steps
          current={args.current}
          steps={args.steps}
          orientation='horizontal'
        />
      </div>
    )
  },
}
