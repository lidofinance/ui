import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { IconCheck, IconCopy, TokenSteth } from '../icons'
import { SelectItem } from '.'

const meta = {
  title: 'Inputs & Controls/SelectItem',
  component: SelectItem,
  tags: ['autodocs'],
  args: {
    label: 'stETH',
    secondaryLabel: 'Staked Ether',
    description: 'Rebasing, balance grows with rewards.',
    icon: <TokenSteth />,
    size: 'default',
    labelWeight: 'regular',
    selected: false,
    active: false,
    disabled: false,
  },
  argTypes: {
    size: { options: ['default', 'small'], control: { type: 'radio' } },
    labelWeight: {
      options: ['regular', 'semibold'],
      control: { type: 'radio' },
    },
    as: { options: ['div', 'button'], control: { type: 'radio' } },
    selected: { control: { type: 'boolean' } },
    active: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Presentational list item used by `Select` options and custom menus. The parent supplies role, aria attributes and handlers; `as="button"` makes it a native button for action menus.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SelectItem>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const States: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Default, hover or keyboard-active, selected and disabled. Selected shows the check indicator at default size.',
      },
    },
  },
  render: (args) => (
    <StoryContainer gap={24}>
      {(['default', 'small'] as const).map((size) => (
        <StorySection key={size} title={size} row={false}>
          <StoryContainer gap={4}>
            <SelectItem {...args} size={size} />
            <SelectItem {...args} size={size} active />
            <SelectItem {...args} size={size} selected />
            <SelectItem {...args} size={size} disabled />
          </StoryContainer>
        </StorySection>
      ))}
    </StoryContainer>
  ),
}

export const Content: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Label only, with icon, with secondary label, and with description.',
      },
    },
  },
  render: () => (
    <StoryContainer gap={4}>
      <SelectItem label='Rewards address' />
      <SelectItem label='stETH' icon={<TokenSteth />} />
      <SelectItem
        label='stETH'
        secondaryLabel='Staked Ether'
        icon={<TokenSteth />}
      />
      <SelectItem
        label='stETH'
        secondaryLabel='Staked Ether'
        description='Rebasing, balance grows with rewards.'
        icon={<TokenSteth />}
        labelWeight='semibold'
      />
    </StoryContainer>
  ),
}

export const AsButton: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`as="button"` renders a native button with a focus ring, for action menus.',
      },
    },
  },
  render: () => (
    <StoryContainer gap={4} style={{ width: 240 }}>
      <SelectItem
        as='button'
        size='small'
        icon={<IconCopy />}
        label='Copy address'
      />
      <SelectItem
        as='button'
        size='small'
        icon={<IconCheck />}
        label='Mark as read'
      />
      <SelectItem
        as='button'
        size='small'
        icon={<IconCopy />}
        label='Unavailable'
        disabled
      />
    </StoryContainer>
  ),
}
