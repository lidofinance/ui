import type { Meta, StoryObj } from '@storybook/react'

import {
  StoryBox,
  StoryContainer,
  StorySection,
} from '../../.storybook/components'
import { breakpoints } from '../utils'
import { Hidden } from './Hidden'

const meta: Meta<typeof Hidden> = {
  title: 'Layout/Hidden',
  component: Hidden,
  tags: ['autodocs'],
  globals: { viewport: { value: 'px1440' } },
  argTypes: {
    below: {
      control: 'select',
      options: [undefined, ...breakpoints],
    },
    above: {
      control: 'select',
      options: [undefined, ...breakpoints],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "CSS-only responsive visibility, so it is safe for SSR and causes no layout flash. `below` hides at that breakpoint's width and narrower, `above` hides on wider screens. While visible the wrapper is `display: contents`, so it does not affect the flex or gap of its parent.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    below: 'sm',
    children: <StoryBox>Hidden at 599px and below</StoryBox>,
  },
}

export const BelowAndAbove: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Resize with the viewport toolbar: the first block disappears at `sm` and below, the second at widths above `sm`.',
      },
    },
  },
  render: () => (
    <StoryContainer>
      <StorySection title='below="sm"'>
        <Hidden below='sm'>
          <StoryBox>Desktop only</StoryBox>
        </Hidden>
      </StorySection>
      <StorySection title='above="sm"'>
        <Hidden above='sm'>
          <StoryBox>Mobile only</StoryBox>
        </Hidden>
      </StorySection>
    </StoryContainer>
  ),
}
