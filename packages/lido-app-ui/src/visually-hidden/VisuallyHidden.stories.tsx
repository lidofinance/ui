import type { Meta, StoryObj } from '@storybook/react'

import { StatItem } from '../stat-item'
import { VisuallyHidden } from '.'

const meta: Meta<typeof VisuallyHidden> = {
  title: 'Foundations/VisuallyHidden',
  component: VisuallyHidden,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Hides content visually but keeps it for screen readers. Use it to give a styled visual fragment a plain-text reading.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const MutedTotal: Story = {
  render: () => (
    <StatItem
      label='Active keys'
      value={
        <>
          <span aria-hidden='true'>
            10
            <span style={{ color: 'var(--lido-app-ui-color-text-tertiary)' }}>
              /15
            </span>
          </span>
          <VisuallyHidden>10 of 15</VisuallyHidden>
        </>
      }
    />
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The visual "10/15" is hidden from assistive tech; screen readers get "10 of 15".',
      },
    },
  },
}
