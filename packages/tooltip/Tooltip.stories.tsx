import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    content: 'This is a tooltip content',
    position: 'right',
    children: <>Hover me</>,
  },
  argTypes: {
    position: {
      options: [
        'right',
        'bottom-right',
        'top-right',
        'bottom-center',
        'card-bottom',
        'card-no',
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
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Basic: Story = {}

type TooltipSectionProps = {
  title: string
  positions: TooltipProps['position'][]
  getTooltipProps: (position: TooltipProps['position']) => Partial<TooltipProps>
}

const TooltipSection = ({
  title,
  positions,
  getTooltipProps,
}: TooltipSectionProps) => (
  <div style={{ padding: '16px', border: '1px solid #eaeaea' }}>
    <h3>{title}</h3>
    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
      {positions.map((position) => (
        <Tooltip
          key={position}
          position={position}
          {...getTooltipProps(position)}
        >
          {position} {title.toLowerCase()}
        </Tooltip>
      ))}
    </div>
  </div>
)

export const AllStates = () => {
  const positions: TooltipProps['position'][] = [
    'right',
    'bottom',
    'top',
    'left',
  ]

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    padding: '50px',
  }

  return (
    <div style={gridContainerStyle}>
      <TooltipSection
        title='Default'
        positions={positions}
        getTooltipProps={(position) => ({
          content: `Position: ${position}`,
        })}
      />

      <TooltipSection
        title='Long Content'
        positions={positions}
        getTooltipProps={() => ({
          content:
            'This is a tooltip with very long content that will be wrapped to multiple lines to demonstrate how the tooltip handles long text content.',
        })}
      />
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
