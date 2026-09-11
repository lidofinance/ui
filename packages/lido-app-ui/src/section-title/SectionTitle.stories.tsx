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
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A title row for a `Card` or any content section: title, optional subtitle, an optional info glyph that shows a tooltip on hover, and an optional `action` slot on the right (typically a `Button`).',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithTooltip: Story = {
  args: {
    tooltip: 'Splitter addresses receive stETH.',
  },
}

export const WithAction: Story = {
  args: {
    tooltip: 'Splitter addresses receive stETH.',
    action: (
      <Button variant='outline' size='small'>
        Learn more
      </Button>
    ),
  },
}
