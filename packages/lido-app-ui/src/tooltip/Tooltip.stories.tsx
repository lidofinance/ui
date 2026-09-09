import type { Meta, StoryObj } from '@storybook/react'

import { StorySection } from '../../.storybook/components'
import { IconInfo } from '../icons'
import { Tooltip } from '.'

const meta: Meta<typeof Tooltip> = {
  title: 'Content helpers/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    content: 'Annual percentage yield, net of protocol fees.',
    position: 'top',
    width: 320,
    children: <IconInfo />,
  },
  argTypes: {
    content: { description: 'Bubble text; omit to disable the tooltip' },
    position: {
      description: 'Where the bubble opens relative to the trigger',
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ],
      control: { type: 'select' },
    },
    width: { description: 'Bubble width in px', control: { type: 'number' } },
    children: { description: 'The trigger — usually an info icon' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'CSS-only tooltip: the bubble is a sibling revealed on `:hover` and `:focus-within`, so there is no portal and no JS. That also means it is clipped by any ancestor with `overflow: clip` — inside `Modal`, open it downwards.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--lido-app-ui-font-family)',
        color: 'var(--lido-app-ui-color-text-secondary)',
      }}
    >
      Hover the icon
      <Tooltip {...args} />
    </span>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Hover or tab to the trigger to reveal the bubble — nothing is visible until then.',
      },
    },
  },
}

export const Positions: Story = {
  render: () => (
    <StorySection style={{ gap: 40, padding: '32px 24px' }}>
      {(
        [
          'top',
          'right',
          'bottom',
          'left',
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right',
        ] as const
      ).map((position) => (
        <Tooltip
          key={position}
          position={position}
          content={position}
          width={160}
        >
          <IconInfo />
        </Tooltip>
      ))}
    </StorySection>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'All eight anchors — hover each icon; the bubble names its own position. There is no flipping logic, so pick the one that fits the space you have.',
      },
    },
  },
}

export const RichContent: Story = {
  args: {
    width: 320,
    content: (
      <>
        <p
          style={{
            margin: 0,
            fontWeight: 600,
            fontSize: 16,
            lineHeight: '28px',
          }}
        >
          Your key got a strike
        </p>
        <div>
          <p style={{ margin: '0 0 8px' }}>
            The following keys got strikes for low performance during the latest
            monitoring frame (Nov 12 — Dec 12):
          </p>
          <ul style={{ margin: 0, paddingLeft: 21 }}>
            <li>0x1234...0982</li>
            <li>0x1234...0982</li>
          </ul>
        </div>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'The bubble stacks arbitrary content in a column with an 8px gap — pass a title plus a paragraph/list as `content` for richer bubbles like this one.',
      },
    },
  },
}

export const WithoutContent: Story = {
  args: {
    content: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'With no `content` the wrapper renders its children untouched — handy when the hint is optional data.',
      },
    },
  },
}
