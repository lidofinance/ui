import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { Breadcrumbs } from './Breadcrumbs'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Trail of ancestors followed by the current page. Items with `href` render links, others render buttons; the last item is plain text with `aria-current="page"`.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const ITEMS = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Operators', href: '#operators' },
  { label: 'CSM#419', onClick: () => undefined },
  { label: 'Keys', href: '#keys' },
  { label: 'Upload' },
]

export const Basic: Story = {
  args: { items: ITEMS.slice(0, 2) },
}

export const Depth: Story = {
  render: () => (
    <StoryContainer>
      {[1, 2, 3, 4, 5].map((depth) => (
        <StorySection key={depth} title={`Depth ${depth}`}>
          <Breadcrumbs items={ITEMS.slice(ITEMS.length - depth)} />
        </StorySection>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'One to five levels.' } },
  },
}

export const Overflow: Story = {
  render: () => (
    <StoryContainer>
      <StorySection title='Constrained width (320px)'>
        <div style={{ width: 320 }}>
          <Breadcrumbs
            items={[
              { label: 'Node Operator Dashboard', href: '#dashboard' },
              { label: 'Community Staking Module Operator Management' },
            ]}
          />
        </div>
      </StorySection>
      <StorySection title='Long ancestor label (480px)'>
        <div style={{ width: 480 }}>
          <Breadcrumbs
            items={[
              {
                label: 'Community Staking Module Operator Management',
                href: '#management',
              },
              { label: 'Keys' },
            ]}
          />
        </div>
      </StorySection>
      <StorySection title='Long ancestor trail (320px)'>
        <div style={{ width: 320 }}>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '#home' },
              { label: 'Operators', href: '#operators' },
              { label: 'Dashboard', href: '#' },
              { label: 'Node Operator Dashboard' },
            ]}
          />
        </div>
      </StorySection>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Row scrolls horizontally, starts at the current page, edges fade while more content is hidden. Labels longer than 22em are ellipsized and show the full text in a native tooltip.',
      },
    },
  },
}
