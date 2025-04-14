import { StoryFn, Meta } from '@storybook/react'
import { Tabs, TabsProps } from './Tabs'
import { Eth } from '../icons'

export default {
  component: Tabs,
  title: 'Navigation/Tabs',
  args: {
    size: 'l',
    shape: 'oval',
    direction: 'horizontal',
    items: [
      { key: '1', children: 'Tab 1' },
      { key: '2', children: 'Tab 2' },
      { key: '3', children: 'Tab 3' },
    ],
  },
  argTypes: {
    onKeyChange: { action: 'changed' },
    size: {
      options: ['m', 'l', 'xl'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['oval', 'circle'],
      control: { type: 'radio' },
    },
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<TabsProps>

export const Basic: StoryFn<TabsProps> = (props) => <Tabs {...props} />

export const AllStates: StoryFn<TabsProps> = () => {
  const baselineSizes: NonNullable<TabsProps['size']>[] = ['m', 'l']
  const shapes: NonNullable<TabsProps['shape']>[] = ['oval', 'circle']
  const directions: NonNullable<TabsProps['direction']>[] = [
    'horizontal',
    'vertical',
  ]

  const ovalItems = [
    { key: '1', children: 'Tab 1' },
    { key: '2', children: 'Tab 2' },
    { key: '3', children: 'Tab 3' },
  ]

  const ovalItemsWithDecorator = [
    { key: '1', children: 'Tab 1', rightDecorator: '(1)' },
    { key: '2', children: 'Tab 2', rightDecorator: '(2)' },
    { key: '3', children: 'Tab 3', rightDecorator: '(3)' },
  ]

  const circleItems = [
    { key: '1', children: <Eth /> },
    { key: '2', children: <Eth /> },
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

  const subHeadingStyle: React.CSSProperties = {
    fontSize: '20px',
    marginBottom: '12px',
  }

  const sectionHeadingStyle: React.CSSProperties = {
    fontSize: '18px',
    marginBottom: '8px',
  }

  const partiallyDisabledOvalItems = [
    { key: '1', children: 'Active Tab' },
    {
      key: '2',
      children: 'Disabled Tab',
      disabled: true,
    },
    { key: '3', children: 'Active Tab' },
  ]

  const partiallyDisabledCircleItems = [
    { key: '1', children: <Eth /> },
    {
      key: '2',
      children: <Eth />,
      disabled: true,
    },
    { key: '3', children: <Eth /> },
  ]

  return (
    <div style={gridContainerStyle}>
      {shapes.map((shape) => (
        <div key={shape}>
          <h3 style={headingStyle}>Shape: {shape}</h3>
          <div
            style={{
              display: 'flex',
              gap: '32px',
              flexDirection: 'column',
            }}
          >
            {[
              ...baselineSizes,
              ...(shape === 'circle' ? ['xl' as const] : []),
            ].map((size) => (
              <div
                key={size}
                style={{
                  padding: '16px',
                  border: '1px solid var(--lido-ui-color-borders-fog)',
                }}
              >
                <h5 style={subHeadingStyle}>Size: {size}</h5>
                {directions.map((direction) => (
                  <div key={direction} style={{ marginBottom: '16px' }}>
                    <h6 style={sectionHeadingStyle}>Direction: {direction}</h6>
                    <Tabs
                      size={size}
                      shape={shape}
                      direction={direction}
                      items={shape === 'oval' ? ovalItems : circleItems}
                    />
                  </div>
                ))}
                {shape === 'oval' && (
                  <div style={{ marginBottom: '16px' }}>
                    <h6 style={sectionHeadingStyle}>With Decorators</h6>
                    <Tabs
                      size={size}
                      shape={shape}
                      items={ovalItemsWithDecorator}
                    />
                  </div>
                )}
                <div style={{ marginBottom: '16px' }}>
                  <h6 style={sectionHeadingStyle}>Partially Disabled</h6>
                  <Tabs
                    size={size}
                    shape={shape}
                    items={
                      shape === 'oval'
                        ? partiallyDisabledOvalItems
                        : partiallyDisabledCircleItems
                    }
                  />
                </div>
                <div>
                  <h6 style={sectionHeadingStyle}>All Disabled</h6>
                  <Tabs
                    size={size}
                    shape={shape}
                    items={(shape === 'oval' ? ovalItems : circleItems).map(
                      (item) => ({
                        ...item,
                        disabled: true,
                      }),
                    )}
                  />
                </div>
              </div>
            ))}
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
      story: 'Displays all possible Tabs states for easy review.',
    },
  },
}
