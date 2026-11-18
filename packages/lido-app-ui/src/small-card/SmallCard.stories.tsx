import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { IconArrowNarrowUpRight, IconBell } from '../icons'
import { Tag } from '../tag'
import { SmallCard, type SmallCardProps } from '.'

const meta: Meta<typeof SmallCard> = {
  title: 'Cards/SmallCard',
  component: SmallCard,
  args: {
    logo: <IconBell />,
    icon: <IconArrowNarrowUpRight />,
    title: 'CSM Sentinel',
    description: 'Provides your CSM Node Operator events to the telegram chats',
    href: 'https://lido.fi',
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
  // SmallCard sizes to its content/container, so the canvas needs a width —
  // kept out of each story's own code so the example stays just
  // `<SmallCard {...props} />`.
  decorators: [
    (Story, { parameters }) =>
      parameters.fixedWidth === false ? (
        <Story />
      ) : (
        <div style={{ width: 248 }}>
          <Story />
        </div>
      ),
  ],
  parameters: {
    storyBackground: 'page',
    layout: 'padded',
  },
}

export default meta
// A union of props breaks `StoryObj<typeof meta>` (args collapse to never).
type Story = StoryObj<SmallCardProps>

export const Basic: Story = {}

export const WithFooter: Story = {
  args: {
    footer: (
      <>
        <Tag variant='info'>Notification tool</Tag>
        <Tag variant='active'>Lido</Tag>
        <Tag variant='success'>Design</Tag>
      </>
    ),
  },
}

export const WithImage: Story = {
  args: {
    image: (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #6c8cff, #ff6cab)',
        }}
      />
    ),
    title:
      'Introducing CSM Sentinel: Your Ultimate Solution for Comprehensive Cybersecurity Management!',
    description:
      "In today's fast-paced digital landscape, staying connected with your team and stakeholders is crucial. This integration allows for real-time updates and notifications, ensuring that everyone involved is informed about important events as they happen.",
    footer: (
      <>
        <Tag variant='info'>Notification tool</Tag>
        <Tag variant='active'>Lido</Tag>
        <Tag variant='success'>Design</Tag>
        <Tag variant='warning'>Dev</Tag>
        <Tag variant='error'>Tag</Tag>
        <Tag variant='neutral'>Tag 2</Tag>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'With an `image` and a long title/description — both wrap instead of clipping, and the footer wraps multiple tags across rows.',
      },
    },
  },
}

export const AsButton: Story = {
  args: {
    href: undefined,
    icon: undefined,
    onClick: fn(),
    description: 'Opens setup instructions in a modal',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Without `href` the card renders a `<button type="button">` for in-app actions like opening a modal.',
      },
    },
  },
}

export const Fill: Story = {
  decorators: [
    (Story: () => ReactNode) => (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 248px)',
          gap: 16,
          width: 'max-content',
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: (args: SmallCardProps) => (
    <>
      <SmallCard
        {...args}
        fill
        description='Short description'
        footer={<Tag variant='info'>Notification tool</Tag>}
      />
      <SmallCard
        {...args}
        fill
        description="In today's fast-paced digital landscape, staying connected with your team and stakeholders is crucial. This integration allows for real-time updates and notifications."
        footer={<Tag variant='active'>Lido</Tag>}
      />
    </>
  ),
  parameters: {
    fixedWidth: false,
    docs: {
      description: {
        story:
          '`fill` stretches the card to the row height and pins the footer to the bottom, so a row of cards lines up.',
      },
    },
  },
}
