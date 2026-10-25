import type { Meta, StoryObj } from '@storybook/react'

import {
  StoryBox,
  StoryContainer,
  StorySection,
} from '../../.storybook/components'
import { Typography } from '../typography'
import { breakpoints, breakpointWidths } from '../utils'
import { Hidden } from './Hidden'

const meta: Meta<typeof Hidden> = {
  title: 'Layout/Hidden',
  component: Hidden,
  argTypes: {
    below: {
      control: 'select',
      options: breakpoints,
    },
    above: {
      control: 'select',
      options: breakpoints,
    },
    as: {
      control: 'select',
      options: ['span', 'div'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    as: 'div',
    below: 'sm',
    children: <StoryBox>{`Hidden below ${breakpointWidths.sm}px`}</StoryBox>,
  },
}

export const BelowAndAbove: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Resize with the viewport toolbar: the first block disappears below `sm`, the second at `sm` and above.',
      },
    },
  },
  render: () => (
    <StoryContainer>
      <StorySection title='below="sm"'>
        <Hidden as='div' below='sm'>
          <StoryBox>Desktop only</StoryBox>
        </Hidden>
      </StorySection>
      <StorySection title='above="sm"'>
        <Hidden as='div' above='sm'>
          <StoryBox>Mobile only</StoryBox>
        </Hidden>
      </StorySection>
    </StoryContainer>
  ),
}

export const AtSmDown: Story = {
  ...BelowAndAbove,
  tags: ['!autodocs'],
  globals: { viewport: { value: 'sm-down' } },
  parameters: {
    ...BelowAndAbove.parameters,
    docs: {
      description: {
        story: 'The same blocks pinned at 599px: only "Mobile only" shows.',
      },
    },
  },
}

export const AtSmUp: Story = {
  ...BelowAndAbove,
  tags: ['!autodocs'],
  globals: { viewport: { value: 'sm-up' } },
  parameters: {
    ...BelowAndAbove.parameters,
    docs: {
      description: {
        story: 'The same blocks pinned at 600px: only "Desktop only" shows.',
      },
    },
  },
}

export const InsideText: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The default `span` wrapper keeps the paragraph intact. Keep the hidden children phrasing content.',
      },
    },
  },
  render: () => (
    <Typography variant='body'>
      Stake <Hidden below='sm'>your ETH </Hidden>now
    </Typography>
  ),
}
