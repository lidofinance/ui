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
  const shapes: ButtonProps['shape'][] = ['oval', 'circle']
  const textStyles: ButtonProps['textStyle'][] = [
    'normal',
    'semibold',
    'subhead',
    'description',
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3>Default Buttons</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {colors.map((color) => (
            <Button
              key={`default-${color}`}
              color={color}
              size='m'
              shape='oval'
              textStyle='semibold'
              icon={undefined}
              withArrow={false}
              loading={false}
            >
              {color}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3>Disabled Buttons</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {colors.map((color) => (
            <Button
              key={`disabled-${color}`}
              color={color}
              size='m'
              shape='oval'
              textStyle='semibold'
              disabled={true}
              icon={undefined}
              withArrow={false}
              loading={false}
              loaderVariant='transparent'
            >
              {color}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3>Loading Buttons</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {colors.map((color) => (
            <Button
              key={`loading-${color}`}
              color={color}
              size='m'
              shape='oval'
              textStyle='semibold'
              disabled={false}
              icon={undefined}
              withArrow={false}
              loading={true}
              loaderVariant='opaque'
            >
              {color}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3>Buttons with Icon</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {colors.map((color) => (
            <Button
              key={`icon-${color}`}
              color={color}
              size='m'
              shape='oval'
              textStyle='semibold'
              disabled={false}
              icon={<Eth />}
              withArrow={false}
              loading={false}
              loaderVariant='transparent'
            >
              {color}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3>Buttons with Arrow</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {colors.map((color) => (
            <Button
              key={`arrow-${color}`}
              color={color}
              size='m'
              shape='oval'
              textStyle='semibold'
              disabled={false}
              icon={undefined}
              withArrow={true}
              loading={false}
              loaderVariant='transparent'
            >
              {color}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3>Buttons with Icon and Arrow</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {colors.map((color) => (
            <Button
              key={`icon-arrow-${color}`}
              color={color}
              size='m'
              shape='oval'
              textStyle='semibold'
              disabled={false}
              icon={<Eth />}
              withArrow={true}
              loading={false}
              loaderVariant='transparent'
            >
              {color}
            </Button>
          ))}
        </div>
      </div>

      {colors.map((color) => (
        <div key={color}>
          <h3>Color: {color}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {sizes.map((size) => (
              <div key={size} style={{ marginBottom: '16px' }}>
                <h4>Size: {size}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {shapes.map((shape) => (
                    <div key={shape}>
                      <h5>Shape: {shape}</h5>
                      <div
                        style={{
                          display: 'flex',
                          gap: '8px',
                          flexWrap: 'wrap',
                        }}
                      >
                        {textStyles.map((textStyle, index) => (
                          <>
                            {shape === 'circle' && index === 0 && (
                              <Button
                                key={`${color}-${size}-${shape}-${textStyle}`}
                                color={color}
                                size={size}
                                shape={shape}
                                textStyle={textStyle}
                                disabled={false}
                                icon={<Eth />}
                                withArrow={false}
                                loading={false}
                                loaderVariant='transparent'
                              >
                                {`${textStyle}`}
                              </Button>
                            )}
                            {shape !== 'circle' && (
                              <Button
                                key={`${color}-${size}-${shape}-${textStyle}`}
                                color={color}
                                size={size}
                                shape={shape}
                                textStyle={textStyle}
                                disabled={false}
                                icon={<Eth />}
                                withArrow={false}
                                loading={false}
                                loaderVariant='transparent'
                              >
                                {`${textStyle}`}
                              </Button>
                            )}
                          </>
                        ))}
                      </div>
                    </div>
                  ))}
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
  docs: {
    description: {
      story: 'Displays all possible Button states for easy review.',
    },
  },
}
