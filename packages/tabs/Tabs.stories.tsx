import { StoryFn, Meta } from '@storybook/react'
import { Tabs, TabsProps } from './Tabs'
import { Check } from '../icons'

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

export const Basic: StoryFn<TabsProps> = (props) => <Tabs {...props} />

export const AllSizes: StoryFn<TabsProps> = () => {
  const textItems = [
    { key: '1', children: 'Tab text 1' },
    { key: '2', children: 'Tab text 2222' },
    { key: '3', children: 'Tab text 3' },
  ]
  const iconItems = [
    { key: '1', children: <Check /> },
    { key: '2', children: <Check /> },
    { key: '3', children: <Check /> },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
      <div
        style={{
          display: 'flex',
          gap: '32px',
          flexDirection: 'column',
        }}
      >
        <h3 style={{ marginBottom: '16px' }}>Text Tabs - Different Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Small (s)</h4>
            <Tabs type='text' size='s' items={textItems} />
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Medium (m)</h4>
            <Tabs type='text' size='m' items={textItems} />
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Large (l)</h4>
            <Tabs type='text' size='l' items={textItems} />
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Icon Tabs - Different Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Small (s)</h4>
            <Tabs type='icon' size='s' items={iconItems} />
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Medium (m)</h4>
            <Tabs type='icon' size='m' items={iconItems} />
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Large (l)</h4>
            <Tabs type='icon' size='l' items={iconItems} />
          </div>
        </div>
      </div>
    </div>
  )
}

AllSizes.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story:
        'Displays all available sizes for the Tabs component. The size property can be set to "s" (small), "m" (medium), or "l" (large).',
    },
  },
}

export const AllStates: StoryFn<TabsProps> = () => {
  const textItems = [
    { key: '1', children: 'Tab text 1' },
    { key: '2', children: 'Tab text 2222' },
    { key: '3', children: 'Tab text 3' },
  ]
  const circleItems = [
    { key: '1', children: <Check /> },
    {
      key: '2',
      children: (
        <img src='https://lido.fi/static/index/defi/metamask.svg' alt={'img'} />
      ),
    },
    { key: '3', children: <Check /> },
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
                  border:
                    '1px solid var(--deprecated-lido-ui-color-borders-fog)',
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <h6 style={{ marginBottom: '8px' }}>Regular:</h6>
                  <Tabs
                    type={type}
                    size={size}
                    items={type === 'text' ? textItems : circleItems}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <h6 style={{ marginBottom: '8px' }}>
                    With individual disabled items:
                  </h6>
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
                            { key: '1', children: <Check /> },
                            { key: '4', children: <Check /> },
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
                            { key: '3', children: <Check />, disabled: true },
                          ]
                    }
                  />
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
