import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { SectionTitle } from '.'

const meta: Meta<typeof SectionTitle> = {
  title: 'Layout/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
  args: {
    title: 'Choose a token to claim',
    subtitle:
      'Splitter addresses receive stETH. Choose the token for your Rewards Address.',
  },
  argTypes: {
    title: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
  },
  render: (args) => (
    <div style={{ width: 620 }}>
      <SectionTitle {...args} />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A title row for a `Card` or any content section: title, optional subtitle, an optional info glyph that shows a `tooltip` on hover, and an optional `action` slot on the right (typically a `Button`). `tooltip` and `action` are independent — toggle either one on its own, or both together. Stories below are wrapped in a fixed-width container to match how it sits inside a real `Card` — otherwise `action` ends up far from the title.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Just a title and subtitle — no icon, no action.',
      },
    },
  },
}

export const WithTooltip: Story = {
  args: {
    tooltip: 'Splitter addresses receive stETH.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Adds the info glyph after the title — hover or focus it to reveal the `tooltip` content. No action button here.',
      },
    },
  },
}

export const WithAction: Story = {
  args: {
    action: (
      <Button variant='outline' size='small'>
        Learn more
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          '`action` (typically a `Button`) pinned to the top-right of the row — independent of `tooltip`, no info glyph here.',
      },
    },
  },
}

export const WithTooltipAndAction: Story = {
  args: {
    tooltip: 'Splitter addresses receive stETH.',
    action: (
      <Button variant='outline' size='small'>
        Learn more
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: '`tooltip` and `action` can be turned on at the same time.',
      },
    },
  },
}
