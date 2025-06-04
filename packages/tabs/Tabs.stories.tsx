import { StoryFn, Meta } from '@storybook/react'
import { Tabs, TabsProps } from './Tabs'
import { Eth } from '../icons'

export default {
  component: Tabs,
  title: 'Navigation/Tabs',
  args: {
    type: 'text',
    items: [
      { key: '1', children: 'Tab 1' },
      { key: '2', children: 'Tab 222222' },
      { key: '3', children: 'Tab 3' },
    ],
  },
  argTypes: {
    onKeyChange: { action: 'changed' },
    items: {
      control: 'object',
      description:
        'Array of tab items. Each item can have a disabled property to disable individual tabs.',
    },

    type: {
      options: ['text', 'icon'],
      control: { type: 'radio' },
      description:
        'Type of content: text for oval shape, icon for circle shape',
    },
    defaultKey: {
      control: 'text',
      description: 'Key of the initially active tab (uncontrolled mode)',
    },
    activeKey: {
      control: 'text',
      description: 'Key of the active tab (controlled mode)',
    },
    dataTestId: {
      control: 'object',
      description: 'Test IDs for automated testing',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<TabsProps>

export const Basic: StoryFn<TabsProps> = (props) => <Tabs {...props} />

export const AllStates: StoryFn<TabsProps> = () => {
  const textItems = [
    { key: '1', children: 'Tab 1' },
    { key: '2', children: 'Tab 2' },
    { key: '3', children: 'Tab 3' },
  ]
  const circleItems = [
    { key: '1', children: <Eth /> },
    {
      key: '2',
      children: (
        <img src='https://lido.fi/static/index/defi/metamask.svg' alt={'img'} />
      ),
    },
    { key: '3', children: <Eth /> },
  ]

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  }

  const headingStyle: React.CSSProperties = {
    fontSize: '24px',
    marginBottom: '16px',
  }

  return (
    <div style={gridContainerStyle}>
      {['text', 'icon'].map((type: 'text' | 'icon') => (
        <div key={type}>
          <h3 style={headingStyle}>Type: {type}</h3>
          <div
            style={{
              display: 'flex',
              gap: '32px',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                padding: '16px',
                border: '1px solid var(--deprecated-lido-ui-color-borders-fog)',
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <h6 style={{ marginBottom: '8px' }}>Regular:</h6>
                <Tabs
                  type={type}
                  items={type === 'text' ? textItems : circleItems}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <h6 style={{ marginBottom: '8px' }}>
                  With individual disabled items:
                </h6>
                <Tabs
                  type={type}
                  items={
                    type === 'text'
                      ? [
                          { key: '1', children: 'Tab 1' },
                          {
                            key: '2',
                            children: 'Tab 2',
                            disabled: true,
                          },
                          { key: '3', children: 'Tab 3' },
                        ]
                      : [
                          { key: '1', children: <Eth /> },
                          { key: '4', children: <Eth /> },
                          {
                            key: '2',
                            children: (
                              <img
                                src='https://lido.fi/static/index/defi/metamask.svg'
                                alt={'img'}
                              />
                            ),
                            disabled: true,
                          },
                          { key: '3', children: <Eth />, disabled: true },
                        ]
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

AllStates.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story:
        'Displays all possible Tabs states for easy review. The tabs automatically adjust their size based on screen width: small on mobile screens (max-width: 768px), medium on tablets and small desktops, and large on larger screens (min-width: 1200px).',
    },
  },
}
