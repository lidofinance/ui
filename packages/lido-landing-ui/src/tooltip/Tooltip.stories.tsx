import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipPosition } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Content helpers/Tooltip',
  component: Tooltip,
  args: {
    content: 'This is a tooltip content',
    position: 'right',
    children: <>Hover me</>,
    width: 352,
  },
  argTypes: {
    position: {
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
      control: { type: 'radio' },
    },
    content: {
      control: { type: 'text' },
    },
    width: { control: { type: 'text' } },
    adaptive: { control: { type: 'boolean' } },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Basic: Story = {}

export const AllStates = () => {
  const content =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  // Triggers are arranged in a 3x3 circle so every tooltip opens outwards
  // into empty space and never covers another trigger.
  const positions: Array<TooltipPosition | null> = [
    'top-left',
    'top',
    'top-right',
    'left',
    null,
    'right',
    'bottom-left',
    'bottom',
    'bottom-right',
  ]

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 140px)',
    rowGap: '140px',
    columnGap: '160px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '160px 80px',
  }

  const cellStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
  }

  const triggerStyle: React.CSSProperties = {
    // inline-block so the chip's vertical padding counts towards its box —
    // an inline span paints outside it and eats the tooltip's gap
    display: 'inline-block',
    padding: '8px 16px',
    border: '1px solid var(--lido-ui-color-borders-default)',
    borderRadius: '20px',
    whiteSpace: 'nowrap',
  }

  return (
    <div style={gridStyle}>
      {positions.map((position, index) =>
        position ? (
          <div key={position} style={cellStyle}>
            {/* adaptive off: this is a catalogue, so each state must render
                exactly as requested instead of flipping to fit the screen */}
            <Tooltip position={position} content={content} adaptive={false}>
              <span style={triggerStyle}>{position}</span>
            </Tooltip>
          </div>
        ) : (
          <div key={`center-${index}`} />
        ),
      )}
    </div>
  )
}

AllStates.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Displays all possible Tooltip states for easy review.',
    },
  },
}

// Storybook's global decorator puts a theme-toggler bar above every story:
// 1em top padding + a 33px button
const TOGGLER_BAR_HEIGHT = 49

export const AdaptiveNearViewportEdges = () => {
  const content =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  // Same positions as AllStates, but each trigger sits at the screen edge its
  // position points to, leaving no room — so the adaptive flip/shift kicks in.
  const positions: Array<TooltipPosition | null> = [
    'top-left',
    'top',
    'top-right',
    'left',
    null,
    'right',
    'bottom-left',
    'bottom',
    'bottom-right',
  ]

  // Fixed positioning ignores the padding Storybook decorators add around the
  // story, so triggers sit at the real viewport edges where adaptation kicks in.
  // The top inset clears Storybook's theme-toggler bar, which would otherwise be
  // covered by this layer and unclickable; being out of flow, the layer also has
  // to paint the theme background itself or dark theme shows light behind it.
  const gridStyle: React.CSSProperties = {
    position: 'fixed',
    inset: `${TOGGLER_BAR_HEIGHT}px 0 0 0`,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gridTemplateRows: 'auto 1fr auto',
    padding: '8px',
    boxSizing: 'border-box',
    background: 'var(--lido-ui-color-text-inverted)',
    color: 'var(--lido-ui-color-text-primary)',
  }

  const triggerStyle: React.CSSProperties = {
    // inline-block so the chip's vertical padding counts towards its box —
    // an inline span paints outside it and eats the tooltip's gap
    display: 'inline-block',
    padding: '8px 16px',
    border: '1px solid var(--lido-ui-color-borders-default)',
    borderRadius: '20px',
    whiteSpace: 'nowrap',
  }

  // Grid cell -> edge alignment, so each trigger hugs its own corner or edge
  const edges = ['start', 'center', 'end'] as const

  return (
    <div style={gridStyle}>
      {positions.map((position, index) =>
        position ? (
          <Tooltip
            key={position}
            position={position}
            content={content}
            style={{
              justifySelf: edges[index % 3],
              alignSelf: edges[Math.floor(index / 3)],
            }}
          >
            <span style={triggerStyle}>{position}</span>
          </Tooltip>
        ) : (
          <div key={`center-${index}`} />
        ),
      )}
    </div>
  )
}

AdaptiveNearViewportEdges.parameters = {
  controls: { disable: true },
  layout: 'fullscreen',
  docs: {
    description: {
      story:
        'Tooltips near the viewport edges flip and shift to stay fully visible. Resize the window while hovering to see the position update.',
    },
  },
}
