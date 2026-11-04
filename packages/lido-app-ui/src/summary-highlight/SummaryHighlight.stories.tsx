import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { SummaryHighlight } from '.'

const meta: Meta<typeof SummaryHighlight> = {
  title: 'Cards/SummaryHighlight',
  component: SummaryHighlight,
  parameters: {
    docs: {
      description: {
        component:
          'Tinted box with the headline total of a form, optional from/to change and hint.',
      },
    },
  },
  args: {
    label: 'You will receive',
    value: '6.2 stETH',
    change: { from: '5.8 stETH', to: '6.2 stETH' },
    hint: 'Add 50 LDO for +6%',
  },
  argTypes: {
    tone: {
      control: { type: 'select' },
      options: ['success', 'warning', 'error', 'info', 'active', 'neutral'],
    },
    change: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 420 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Tones: Story = {
  render: () => (
    <StorySection row={false}>
      <SummaryHighlight label='You will receive' value='6.2 stETH' />
      <SummaryHighlight
        label='Bond shortfall'
        value='0.4 stETH'
        tone='warning'
      />
      <SummaryHighlight label='Slashing risk' value='2 keys' tone='error' />
      <SummaryHighlight label='Pending' value='12 keys' tone='info' />
      <SummaryHighlight label='Selected' value='3 keys' tone='active' />
      <SummaryHighlight label='Total keys' value='128' tone='neutral' />
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'All tones.' } },
  },
}
