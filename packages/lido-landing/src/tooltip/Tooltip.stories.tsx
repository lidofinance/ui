import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

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

  const content =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <div style={gridContainerStyle}>
      <div style={sectionStyle}>
        <h3>Tooltip</h3>
        <div style={tooltipGroupStyle}>
          <Tooltip position='top' content={content}>
            top
          </Tooltip>
          <Tooltip position='right' content={content}>
            right
          </Tooltip>
          <Tooltip position='bottom' content={content}>
            bottom
          </Tooltip>
          <Tooltip position='left' content={content}>
            left
          </Tooltip>
          <Tooltip position='top-left' content={content}>
            top-left
          </Tooltip>
          <Tooltip position='top-right' content={content}>
            top-right
          </Tooltip>
          <Tooltip position='bottom-left' content={content}>
            bottom-left
          </Tooltip>
          <Tooltip position='bottom-right' content={content}>
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
