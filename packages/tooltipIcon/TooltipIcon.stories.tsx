import type { Meta, StoryObj } from '@storybook/react'
import { TooltipIcon } from './TooltipIcon'
import React from 'react'

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
  return (
    <div style={{ display: 'flex', gap: '32px' }}>
      <div
        style={{
          flex: 1,
          border: '1px solid #eaeaea',
          padding: '16px 16px 16px 60px',
        }}
      >
        <h2>TooltipIcon</h2>

        <div style={{ marginBottom: '32px' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                <TooltipIcon position='top' width={352} content={content} />
                <TooltipIcon position='right' width={352} content={content} />
                <TooltipIcon position='bottom' width={352} content={content} />
                <TooltipIcon position='left' content={content} />
                <TooltipIcon
                  position='top-left'
                  width={352}
                  content={content}
                />
                <TooltipIcon
                  position='top-right'
                  width={352}
                  content={content}
                />
                <TooltipIcon
                  position='bottom-left'
                  width={352}
                  content={content}
                />
                <TooltipIcon
                  position='bottom-right'
                  width={352}
                  content={content}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
