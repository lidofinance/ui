import { StoryFn, Meta } from '@storybook/react'
import { Tabs, TabsProps } from './Tabs'
import { Checkmark, Metamask } from '../../icons'

export default {
  component: Tabs,
  title: 'Navigation/Tabs',
  args: {
    type: 'text',
    size: 'l',
    items: [
      { key: '1', children: 'Tab text 1' },
      { key: '2', children: 'Tab text 222222' },
      { key: '3', children: 'Tab text 3' },
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
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'radio' },
      description: 'Size of the tabs: s (small), m (medium), l (large)',
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

export const Basic: StoryFn<TabsProps> = (props) => {
  return (
    <div style={{ maxWidth: '100%', overflow: 'auto' }}>
      <div style={{ minWidth: 'min-content', width: '100%' }}>
        <Tabs {...props} />
      </div>
    </div>
  )
}

export const AllStates: StoryFn<TabsProps> = () => {
  const textItems = [
    { key: '1', children: 'Tab text 1' },
    { key: '2', children: 'Tab text 2222' },
    { key: '3', children: 'Tab text 3' },
  ]
  const circleItems = [
    { key: '1', children: <Checkmark /> },
    {
      key: '2',
      children: <Metamask />,
    },
    { key: '3', children: <Checkmark /> },
  ]

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px',
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  }

  const headingStyle: React.CSSProperties = {
    fontSize: '24px',
    marginBottom: '16px',
  }

  const sizes: Array<'s' | 'm' | 'l'> = ['s', 'm', 'l']

  return (
    <div style={gridContainerStyle}>
      {['text', 'icon'].map((type: 'text' | 'icon') => (
        <div key={type}>
          <h3 style={headingStyle}>Type: {type}</h3>
          {sizes.map((size) => (
            <div
              key={`${type}-${size}`}
              style={{
                display: 'flex',
                gap: '32px',
                flexDirection: 'column',
                marginBottom: '32px',
              }}
            >
              <h4 style={{ marginBottom: '16px' }}>Size: {size}</h4>
              <div
                style={{
                  padding: '16px',
                  border: '1px solid var(--lido-ui-color-borders-inverted)',
                  maxWidth: '100%',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    marginBottom: '16px',
                    maxWidth: '100%',
                    overflow: 'auto',
                  }}
                >
                  <h6 style={{ marginBottom: '8px' }}>Regular:</h6>
                  <div style={{ minWidth: 'min-content', width: '100%' }}>
                    <Tabs
                      type={type}
                      size={size}
                      items={type === 'text' ? textItems : circleItems}
                    />
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: '16px',
                    maxWidth: '100%',
                    overflow: 'auto',
                  }}
                >
                  <h6 style={{ marginBottom: '8px' }}>
                    With individual disabled items:
                  </h6>
                  <div style={{ minWidth: 'min-content', width: '100%' }}>
                    <Tabs
                      type={type}
                      size={size}
                      items={
                        type === 'text'
                          ? [
                              { key: '1', children: 'Tab text 1' },
                              {
                                key: '2',
                                children: 'Tab text 2222',
                                disabled: true,
                              },
                              { key: '3', children: 'Tab text 3' },
                            ]
                          : [
                              { key: '1', children: <Checkmark /> },
                              { key: '4', children: <Checkmark /> },
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
                              {
                                key: '3',
                                children: <Checkmark />,
                                disabled: true,
                              },
                            ]
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
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
        'Displays all possible Tabs states and sizes for easy review. This story shows all three sizes ("s", "m", "l") for each tab type and state, providing a comprehensive view of all possible combinations. You can control the size of the tabs using the "size" property, which accepts values "s" (small), "m" (medium), or "l" (large).',
    },
  },
}
