import type { Meta, StoryObj } from '@storybook/react'
import { TooltipIcon, TooltipIconProps, TooltipIconSize } from './TooltipIcon'
import React from 'react'

const meta: Meta<typeof TooltipIcon> = {
  title: 'Feedback/TooltipIcon',
  component: TooltipIcon,
  args: {
    content: 'This is a tooltip content',
    position: 'right',
    size: 'M',
    variant: 'default',
  },
  argTypes: {
    position: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'radio' },
    },
    size: {
      options: ['S', 'M'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['default', 'primary'],
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
  const positions: TooltipIconProps['position'][] = [
    'top',
    'right',
    'bottom',
    'left',
  ]
  return (
    <div style={{ display: 'flex', gap: '32px' }}>
      <div
        style={{
          flex: 1,
          border: '1px solid #eaeaea',
          padding: '16px 16px 16px 60px',
        }}
      >
        <h2>Variant: Default</h2>
        {(['M', 'S'] as TooltipIconSize[]).map((size) => (
          <div key={size} style={{ marginBottom: '32px' }}>
            <h3>Size: {size}</h3>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div style={{ padding: '16px' }}>
                <h3>Short Content</h3>
                <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                  {positions.map((position) => (
                    <TooltipIcon
                      key={position}
                      position={position}
                      size={size}
                      content={`Position: ${position}`}
                    />
                  ))}
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <h3>Long Content</h3>
                <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                  {positions.map((position) => (
                    <TooltipIcon
                      key={position}
                      position={position}
                      size={size}
                      content='This is a tooltip with very long content that will be wrapped to multiple lines to demonstrate how the tooltip handles long text content.'
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          flex: 1,
          border: '1px solid #eaeaea',
          padding: '16px 16px 16px 60px',
        }}
      >
        <h2>Variant: Primary</h2>
        {(['M', 'S'] as TooltipIconSize[]).map((size) => (
          <div key={size} style={{ marginBottom: '32px' }}>
            <h3>Size: {size}</h3>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div style={{ padding: '16px' }}>
                <h3>Short Content</h3>
                <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                  {positions.map((position) => (
                    <TooltipIcon
                      key={position}
                      position={position}
                      size={size}
                      content={`Position: ${position}`}
                    />
                  ))}
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <h3>Long Content</h3>
                <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                  {positions.map((position) => (
                    <TooltipIcon
                      key={position}
                      position={position}
                      size={size}
                      content='This is a tooltip with very long content that will be wrapped to multiple lines to demonstrate how the tooltip handles long text content.'
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
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
