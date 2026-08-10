import type { Meta, StoryObj } from '@storybook/react'

import {
  DarkSurface,
  StoryContainer,
  StorySection,
} from '../../.storybook/components'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'black',
    children: 'Connect wallet',
  },
  argTypes: {
    variant: {
      description:
        'black / blackOutline for light surfaces, white / whiteOutline for the navy band',
      options: ['white', 'black', 'blackOutline', 'whiteOutline'],
      control: { type: 'inline-radio' },
    },
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

export const OnLight: Story = {
  render: () => (
    <StoryContainer>
      <StorySection title='default'>
        <Button variant='black'>Black</Button>
        <Button variant='blackOutline'>Black outline</Button>
      </StorySection>
      <StorySection title='disabled'>
        <Button variant='black' disabled>
          Black
        </Button>
        <Button variant='blackOutline' disabled>
          Black outline
        </Button>
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

export const OnDark: Story = {
  render: () => (
    <DarkSurface>
      <StoryContainer>
        <StorySection title='default'>
          <Button variant='white'>White</Button>
          <Button variant='whiteOutline'>White outline</Button>
        </StorySection>
        <StorySection title='disabled'>
          <Button variant='white' disabled>
            White
          </Button>
          <Button variant='whiteOutline' disabled>
            White outline
          </Button>
        </StorySection>
      </StoryContainer>
    </DarkSurface>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'The same two states on the navy band the app uses for heroes.',
      },
    },
  },
}
