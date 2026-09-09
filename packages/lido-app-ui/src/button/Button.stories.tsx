import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonVariant } from '.'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { IconInfo } from '../icons'

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  argTypes: {
    children: { description: 'Button label', control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'outlineSecondary', 'ghost', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['big', 'small'],
    },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Fully rounded call to action. `variant` picks the fill/border treatment, `size` picks big (52px) or small (36px), `loading` swaps the icon slot for a spinner and disables the button.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

const variants: ButtonVariant[] = [
  'primary',
  'outline',
  'outlineSecondary',
  'ghost',
  'danger',
]

export const Variants: Story = {
  render: () => (
    <StoryContainer>
      <StorySection title='big'>
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
      </StorySection>
      <StorySection title='small'>
        {variants.map((variant) => (
          <Button key={variant} variant={variant} size='small'>
            {variant}
          </Button>
        ))}
      </StorySection>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'The five variants at both sizes.',
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <StoryContainer>
      {variants.map((variant) => (
        <StorySection key={variant} title={variant}>
          <Button variant={variant}>Default</Button>
          <Button variant={variant} loading>
            Loading
          </Button>
          <Button variant={variant} disabled>
            Disabled
          </Button>
        </StorySection>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Loading swaps the leading icon slot for a spinner and disables the button; disabled flattens the background and dims the label.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <StorySection>
      <Button iconLeft={<IconInfo />}>Left icon</Button>
      <Button iconRight={<IconInfo />}>Right icon</Button>
      <Button variant='outline' size='small' iconLeft={<IconInfo />}>
        Small
      </Button>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
  },
}
