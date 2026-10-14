import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { Breadcrumbs, type BreadcrumbItem, type BreadcrumbsProps } from '.'

const items: BreadcrumbItem[] = [
  { label: 'Node Operator Dashboard', href: '#' },
  { label: 'Community Staking Module Operator Management' },
]

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: {
    items,
  },
  argTypes: {
    items: {
      description:
        'Trail of crumbs; the last one renders as the current page. Labels past 40 characters are truncated with an ellipsis.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A row of page titles separated by chevrons. Every crumb but the last is a link; the last one marks the current page. Scrolls horizontally, starting scrolled to the current page, when the trail is wider than its container.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const LongTrail: Story = {
  args: {
    items: [
      { label: 'Node Operator Dashboard', href: '' },
      { label: 'Community Staking Module Operator Management' },
      { label: 'Community Staking Module Operator Management' },
    ],
  },
}

export const NarrowContainer: Story = {
  render: (args: BreadcrumbsProps) => (
    <StoryContainer style={{ maxWidth: 500 }}>
      <Breadcrumbs {...args} />
    </StoryContainer>
  ),
  args: LongTrail.args,
  parameters: {
    docs: {
      description: {
        story:
          'When the trail overflows its container it scrolls, starting scrolled to the right so the current page stays visible.',
      },
    },
  },
}
