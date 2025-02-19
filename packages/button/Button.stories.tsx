import { StoryFn, Meta } from '@storybook/react'
import { Button, ButtonProps } from './Button'
import { Eth } from '../icons'

export default {
  component: Button,
  title: 'Buttons/Button',
  args: {
    children: 'Text',
    color: 'default',
    size: 'l',
    shape: 'oval',
    textStyle: 'semibold',
    disabled: false,
    icon: false,
    loading: false,
    withArrow: false,
    loaderVariant: 'transparent',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    color: {
      options: ['default', 'secondary', 'outline', 'success', 'transparent'],
      control: { type: 'radio' },
    },
    size: {
      options: ['s', 'm', 'l', 'xl', 'xxl'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['oval', 'circle'],
      control: { type: 'radio' },
    },
    textStyle: {
      options: ['normal', 'semibold', 'subhead', 'description'],
      control: { type: 'radio' },
    },
    loaderVariant: {
      options: ['transparent', 'opaque'],
      control: { type: 'radio' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'boolean' },
    },
    withArrow: {
      control: { type: 'boolean' },
    },
  },
  decorators: [
    (Story, context) => {
      const icon = context.args.icon ? <Eth /> : null
      return <Story {...context} args={{ ...context.args, icon }} />
    },
  ],
  tags: ['autodocs'],
} satisfies Meta

export const Basic: StoryFn<ButtonProps> = (props) => <Button {...props} />

export const AllStates: StoryFn<ButtonProps> = () => {
  const colors: ButtonProps['color'][] = [
    'default',
    'secondary',
    'outline',
    'success',
    'transparent',
  ]
  const sizes: ButtonProps['size'][] = ['s', 'm', 'l', 'xl']
  const textStyles: ButtonProps['textStyle'][] = [
    'normal',
    'semibold',
    'subhead',
    'description',
  ]

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  }

  return (
    <div style={gridContainerStyle}>
      {sizes.map((size) => (
        <div
          key={size}
          style={{ padding: '16px', border: '1px solid #eaeaea' }}
        >
          <h3>Size: {size}</h3>

          <div>
            {colors.map((color) => (
              <div key={color} style={{ marginBottom: '16px' }}>
                <h5>Color: {color}</h5>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {textStyles.map((textStyle) => (
                    <Button
                      key={`oval-${size}-${color}-${textStyle}`}
                      color={color}
                      size={size}
                      shape='oval'
                      textStyle={textStyle}
                      disabled={false}
                      icon={undefined}
                      withArrow={false}
                      loading={false}
                      loaderVariant='transparent'
                    >
                      {textStyle}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '16px' }}>
            <h5>Shape: Circle</h5>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button
                key={`circle-${size}`}
                color='default'
                size={size}
                shape='circle'
                textStyle='normal'
                disabled={false}
                icon={<Eth />}
                withArrow={false}
                loading={false}
                loaderVariant='transparent'
              >
                Circle
              </Button>
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
      story: 'Displays all possible Button states for easy review.',
    },
  },
}
