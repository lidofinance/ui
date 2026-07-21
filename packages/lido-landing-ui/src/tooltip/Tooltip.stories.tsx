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
            <Tooltip position={position} content={content}>
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
