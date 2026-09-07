import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

import { StoryContainer, StorySection } from '../../.storybook/components'

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Connect wallet',
  },
  argTypes: {
    children: { description: 'Button label', control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The primary call to action — 48px tall, fully rounded. Variants come in pairs: pick the black ones on light surfaces and the white ones on the dark hero band.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Disabled: Story = {
  render: () => (
    <StoryContainer>
      <StorySection title='default'>
        <Button>Button</Button>
      </StorySection>
      <StorySection title='disabled'>
        <Button disabled>Button</Button>
      </StorySection>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Disabled swaps the background and dims the label, and turns the border transparent so the button keeps its size.',
      },
    },
  },
}
