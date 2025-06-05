import { StoryFn, Meta } from '@storybook/react'
import { TextTabs, TextTabsProps } from './TextTabs'

export default {
  component: TextTabs,
  title: 'Navigation/TextTabs',
  args: {
    items: [
      { key: '1', text: 'Tab text 1' },
      { key: '2', text: 'Tab text 222222' },
      { key: '3', text: 'Tab text 3' },
    ],
  },
  argTypes: {
    onKeyChange: { action: 'changed' },
    items: {
      control: 'object',
      description:
        'Array of tab items. Each item can have a disabled property to disable individual tabs. Text must be strings.',
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
} satisfies Meta<TextTabsProps>

export const Basic: StoryFn<TextTabsProps> = (props) => <TextTabs {...props} />

export const AllStates: StoryFn<TextTabsProps> = () => {
  const textItems = [
    { key: '1', text: 'Tab text 1' },
    { key: '2', text: 'Tab text 2222' },
    { key: '3', text: 'Tab text 3' },
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
      <div>
        <h3 style={headingStyle}>TextTabs</h3>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            flexDirection: 'column',
            marginBottom: '32px',
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
              <TextTabs items={textItems} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h6 style={{ marginBottom: '8px' }}>
                With individual disabled items:
              </h6>
              <TextTabs
                items={[
                  { key: '1', text: 'Tab text 1' },
                  {
                    key: '2',
                    text: 'Tab text 2222',
                    disabled: true,
                  },
                  { key: '3', text: 'Tab text 3' },
                ]}
              />
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
        'Displays all possible TextTabs states for easy review. This story shows different states of the TextTabs component, providing a comprehensive view of all possible variations.',
    },
  },
}
