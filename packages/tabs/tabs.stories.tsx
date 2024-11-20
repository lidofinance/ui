import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from '.'
// import TabIconOrbitrum from "./icons/tab-icon-arbitrum.svg";
// import TabIconOptimizm from "./icons/tab-icon-optimizm.svg";

const meta = {
  title: 'Layout/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'buttons',
    size: 'm',
  },
  argTypes: {
    activeKey: {
      control: {
        type: 'number',
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    items: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const TabButtons: Story = {
  args: {
    items: [
      {
        key: '1',
        children: 'Tab',
      },
      {
        key: '2',
        children: 'Taaaaaaaaaaaaaaaaaaaaaaaaab',
        rightDecorator: 3,
      },
      {
        key: '3',
        children: 'Yet Another Tab',
      },
      {
        key: '4',
        disabled: true,
        children: 'Disabled tab',
      },
    ],
  },
}

export const TabIcons: Story = {
  args: {
    type: 'icons',
    items: [
      {
        key: '1',
        children: 'text',
      },
      {
        key: '2',
        children: 'text',
      },
      {
        key: '3',
        disabled: true,
        children: 'text',
      },
    ],
  },
}
