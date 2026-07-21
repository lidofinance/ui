import type { Meta, StoryObj } from '@storybook/react'
import { TooltipIcon } from './TooltipIcon'
import { TooltipPosition } from '../tooltip'

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const meta: Meta<typeof TooltipIcon> = {
  title: 'Content helpers/TooltipIcon',
  component: TooltipIcon,
  args: {
    content: content,
    position: 'right',
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
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TooltipIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const AllStates = () => {
  const shortContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  // Icons are arranged in a 3x3 circle so every tooltip opens outwards
  // into empty space and never covers another icon.
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
    alignItems: 'center',
    gap: '8px',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'var(--lido-ui-color-text-secondary)',
    whiteSpace: 'nowrap',
  }

  return (
    <div style={gridStyle}>
      {positions.map((position, index) =>
        position ? (
          <div key={position} style={cellStyle}>
            <span style={labelStyle}>{position}</span>
            <TooltipIcon
              position={position}
              width={352}
              content={shortContent}
            />
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
      story:
        'Displays TooltipIcon states organized in 2 columns by variant. Within each variant, examples are grouped by size and content length.',
    },
  },
}
