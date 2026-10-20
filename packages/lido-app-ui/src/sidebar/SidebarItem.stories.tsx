import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { Counter } from '../counter'
import { IconDashboard } from '../icons'
import { Tag } from '../tag'
import { SidebarItem, type SidebarItemProps } from './SidebarItem'

type LinkItemProps = Extract<SidebarItemProps, { href: string }>

const meta: Meta<LinkItemProps> = {
  title: 'Navigation/SidebarItem',
  component: SidebarItem as Meta<LinkItemProps>['component'],
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 264 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Dashboard',
    href: '#',
    icon: <IconDashboard />,
  },
  argTypes: {
    active: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Navigation row. With `href` it renders a link through `LinkProvider`, otherwise a button. `active` sets `aria-current="page"`. `trailing` is a decorative slot, usually a `Counter`.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const States: Story = {
  render: () => (
    <StoryContainer gap={24}>
      {(
        [
          ['link', { href: '#' }],
          ['button', { href: undefined }],
        ] as const
      ).map(([title, props]) => (
        <StorySection key={title} title={title} row={false}>
          <SidebarItem icon={<IconDashboard />} {...props}>
            Default
          </SidebarItem>
          <SidebarItem icon={<IconDashboard />} active {...props}>
            Active
          </SidebarItem>
          <SidebarItem icon={<IconDashboard />} disabled {...props}>
            Disabled
          </SidebarItem>
          <SidebarItem icon={<IconDashboard />} active disabled {...props}>
            Active and disabled
          </SidebarItem>
        </StorySection>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Each group is default, active, disabled, then active and disabled.',
      },
    },
  },
}

export const Trailing: Story = {
  render: () => (
    <StorySection row={false}>
      <SidebarItem
        href='#'
        icon={<IconDashboard />}
        trailing={<Counter variant='error'>1</Counter>}
      >
        Error counter
      </SidebarItem>
      <SidebarItem
        href='#'
        icon={<IconDashboard />}
        trailing={<Counter variant='default'>12</Counter>}
      >
        Default counter
      </SidebarItem>
      <SidebarItem
        href='#'
        icon={<IconDashboard />}
        trailing={<Tag variant='success'>New</Tag>}
      >
        Tag
      </SidebarItem>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The `trailing` slot is aria-hidden, so put anything essential in the label.',
      },
    },
  },
}

export const ContentEdgeCases: Story = {
  render: () => (
    <StorySection row={false}>
      <SidebarItem href='#'>No icon</SidebarItem>
      <SidebarItem
        href='#'
        icon={<IconDashboard />}
        trailing={<Counter variant='error'>99+</Counter>}
      >
        A very long navigation label that should truncate with an ellipsis
      </SidebarItem>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Without an icon the label starts at the edge; long labels truncate.',
      },
    },
  },
}
