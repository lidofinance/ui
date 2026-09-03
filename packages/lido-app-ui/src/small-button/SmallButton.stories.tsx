import type { Meta, StoryObj } from '@storybook/react'

import { DarkSurface, StorySection } from '../../.storybook/components'
import { IconArrowRight } from '../icons'
import { SmallButton } from '.'

const meta: Meta<typeof SmallButton> = {
  title: 'Buttons/SmallButton',
  component: SmallButton,
  tags: ['autodocs'],
  args: {
    variant: 'back',
    children: 'Back',
  },
  argTypes: {
    variant: {
      description: 'back for light surfaces, white for the navy band',
      options: ['back', 'white'],
      control: { type: 'inline-radio' },
    },
    children: { description: 'Label', control: { type: 'text' } },
    icon: { description: 'Optional glyph before the label' },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The 36px secondary button — Back, Manage, Repay. Sits between `Button` and `MiniButton`.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const OnLight: Story = {
  render: () => (
    <StorySection>
      <SmallButton variant='back'>Back</SmallButton>
      <SmallButton
        variant='back'
        icon={<IconArrowRight width={16} height={16} />}
      >
        With icon
      </SmallButton>
      <SmallButton variant='back' disabled>
        Disabled
      </SmallButton>
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'The `back` variant: plain, with a leading icon, and disabled.',
      },
    },
  },
}

export const OnDark: Story = {
  render: () => (
    <DarkSurface>
      <StorySection>
        <SmallButton variant='white'>View on Explorer</SmallButton>
        <SmallButton variant='white' disabled>
          Disabled
        </SmallButton>
      </StorySection>
    </DarkSurface>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'The `white` variant on the navy band.',
      },
    },
  },
}
