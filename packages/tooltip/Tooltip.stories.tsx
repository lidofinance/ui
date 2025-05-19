import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

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
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Basic: Story = {}

export const AllStates = () => {
  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '32px',
    padding: '50px',
  }

  const sectionStyle: React.CSSProperties = {
    padding: '16px',
    border: '1px solid #eaeaea',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }

  const tooltipGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 0',
  }

  const longContent =
    'This is a tooltip with very long content that will be wrapped to multiple lines to demonstrate how the tooltip handles long text content.'

  return (
    <div style={gridContainerStyle}>
      <div style={sectionStyle}>
        <h3>Default</h3>
        <div style={tooltipGroupStyle}>
          <Tooltip position='top' content='Position: top'>
            top
          </Tooltip>
          <Tooltip position='right' content='Position: right'>
            right
          </Tooltip>
          <Tooltip position='bottom' content='Position: bottom'>
            bottom
          </Tooltip>
          <Tooltip position='left' content='Position: left'>
            left
          </Tooltip>
          <Tooltip position='top-left' content='Position: top-left'>
            top-left
          </Tooltip>
          <Tooltip position='top-right' content='Position: top-right'>
            top-right
          </Tooltip>
          <Tooltip position='bottom-left' content='Position: bottom-left'>
            bottom-left
          </Tooltip>
          <Tooltip position='bottom-right' content='Position: bottom-right'>
            bottom-right
          </Tooltip>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3>Long Content</h3>
        <div style={tooltipGroupStyle}>
          <Tooltip position='top' content={longContent}>
            top
          </Tooltip>
          <Tooltip position='right' content={longContent}>
            right
          </Tooltip>
          <Tooltip position='bottom' content={longContent}>
            bottom
          </Tooltip>
          <Tooltip position='left' content={longContent}>
            left
          </Tooltip>
          <Tooltip position='top-left' content={longContent}>
            top-left
          </Tooltip>
          <Tooltip position='top-right' content={longContent}>
            top-right
          </Tooltip>
          <Tooltip position='bottom-left' content={longContent}>
            bottom-left
          </Tooltip>
          <Tooltip position='bottom-right' content={longContent}>
            bottom-right
          </Tooltip>
        </div>
      </div>
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
