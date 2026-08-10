import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { IconCheck } from '../icons'
import { Badge } from '.'

const meta: Meta<typeof Badge> = {
  title: 'Data display/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    variant: 'success',
    children: 'Active',
  },
  argTypes: {
    variant: {
      description: 'Colour set: success (green), warning (orange), error (red)',
      options: ['success', 'warning', 'error'],
      control: { type: 'inline-radio' },
    },
    children: { description: 'Badge label', control: { type: 'text' } },
    icon: { description: 'Optional glyph rendered before the label' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Small status pill for a position or an asset — active, maturing, liquidated. Text only by default, with room for a leading icon.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Variants: Story = {
  render: () => (
    <StorySection>
      <Badge variant='success'>Active</Badge>
      <Badge variant='warning'>Maturing</Badge>
      <Badge variant='error'>Liquidated</Badge>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The three colour sets. Badge and LtvSlider use different orange-red shades on purpose — they are not one shared risk scale.',
      },
    },
  },
}

export const WithIcon: Story = {
  args: {
    icon: <IconCheck width={12} height={12} />,
    children: 'Confirmed',
  },
  parameters: {
    docs: {
      description: {
        story: 'The icon inherits the variant colour through `currentColor`.',
      },
    },
  },
}
