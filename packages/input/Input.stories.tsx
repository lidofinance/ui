import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Eth } from '../icons'
import { CSSProperties } from 'react'

type InputState = {
  props: Record<string, unknown>
  style?: CSSProperties
  title?: string
}

const meta: Meta<typeof Input> = {
  title: 'Controls/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Placeholder text',
    size: 'l',
    type: 'text',
    error: '',
    disabled: false,
    isLoading: false,
    fullwidth: false,
    rightDecorator: undefined,
    rightDecoratorType: 'element',
    leftDecorator: undefined,
  },
  argTypes: {
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
    size: {
      options: ['m', 'l', 'xl'],
      control: { type: 'radio' },
    },
    type: {
      options: ['text', 'email', 'password', 'search', 'url', 'tel', 'number'],
      control: { type: 'radio' },
    },
    rightDecoratorType: {
      options: ['element', 'text', 'button'] as const,
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    fullwidth: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Base: Story = {
  args: {
    placeholder: 'Enter text',
  },
}

export const AllStates = () => {
  const sizes = ['m', 'l', 'xl'] as const

  const defaultStates: InputState[] = [
    {
      props: { placeholder: 'Default input' },
      title: 'Default',
    },
    {
      props: { placeholder: 'Input with error border', error: '' },
    },
    {
      props: { placeholder: 'Input with error', error: 'Error message' },
      style: { marginBottom: '25px' },
    },
    {
      props: { placeholder: 'Disabled input', disabled: true },
    },
    {
      props: {
        placeholder: 'Disabled input with button',
        disabled: true,
        rightDecorator: {
          children: 'Click me',
          onClick: () => console.log('Button clicked'),
          withArrow: true,
        },
        rightDecoratorType: 'button',
      },
    },
    {
      props: { placeholder: 'Loading input', isLoading: true },
    },
  ]

  const withLabelStates: InputState[] = [
    {
      props: {
        placeholder: 'Enter value',
      },
      title: 'Input with label and placeholder (not supported for size m)',
    },
  ]

  const withRightIconStates: InputState[] = [
    {
      props: {
        placeholder: 'Input with right icon',
        rightDecorator: <Eth width={34} height={34} />,
        rightDecoratorType: 'element',
      },
      title: 'Right decorator icon',
    },
  ]

  const withLeftIconStates: InputState[] = [
    {
      props: {
        placeholder: 'Input with left icon',
        leftDecorator: <Eth width={24} height={24} />,
      },
      title: 'Left decorator icon',
    },
  ]

  const withRightTextStates: InputState[] = [
    {
      props: {
        placeholder: '0.00',
        rightDecorator: 'Sample Text',
        rightDecoratorType: 'text',
      },
      title: 'With right decorator text',
    },
  ]

  const typeStates: InputState[] = [
    {
      props: {
        type: 'text',
        placeholder: 'text',
      },
    },
    {
      props: {
        type: 'text',
        placeholder: 'Enter your name',
        value: 'John Doe',
      },
      style: { marginBottom: '24px' },
      title: 'Types',
    },
    {
      props: {
        type: 'email',
        placeholder: 'email',
        validation: {
          required: true,
          email: true,
          trigger: 'onChange',
        },
      },
    },
    {
      props: {
        type: 'email',
        placeholder: 'Enter your email',
        value: 'john@example.com',
        validation: {
          required: true,
          email: true,
          trigger: 'onChange',
        },
      },
      style: { marginBottom: '24px' },
    },
    {
      props: {
        type: 'password',
        placeholder: 'password',
        validation: {
          required: true,
          minLength: 8,
          customRules: [
            {
              validate: (value: string) => /[A-Z]/.test(value),
              message: 'Must contain uppercase letter',
            },
            {
              validate: (value: string) => /[0-9]/.test(value),
              message: 'Must contain number',
            },
            {
              validate: (value: string) => /[!@#$%^&*]/.test(value),
              message: 'Must contain special character',
            },
          ],
          trigger: 'onBlur',
        },
      },
    },
    {
      props: {
        type: 'password',
        placeholder: 'Enter password',
        value: 'Password123!',
        validation: {
          required: true,
          minLength: 8,
          customRules: [
            {
              validate: (value: string) => /[A-Z]/.test(value),
              message: 'Must contain uppercase letter',
            },
            {
              validate: (value: string) => /[0-9]/.test(value),
              message: 'Must contain number',
            },
            {
              validate: (value: string) => /[!@#$%^&*]/.test(value),
              message: 'Must contain special character',
            },
          ],
          trigger: 'onBlur',
        },
      },
      style: { marginBottom: '24px' },
    },
    {
      props: {
        type: 'search',
        placeholder: 'search',
      },
    },
    {
      props: {
        type: 'search',
        placeholder: 'Search...',
        value: 'ethereum',
      },
      style: { marginBottom: '24px' },
    },
    {
      props: {
        type: 'url',
        placeholder: 'url',
        validation: {
          required: true,
          url: true,
          trigger: 'onBlur',
        },
      },
    },
    {
      props: {
        type: 'url',
        placeholder: 'Enter URL',
        value: 'https://lido.fi',
        validation: {
          required: true,
          url: true,
          trigger: 'onBlur',
        },
      },
      style: { marginBottom: '24px' },
    },
    {
      props: {
        type: 'tel',
        placeholder: 'tel',
        validation: {
          required: true,
          tel: true,
          trigger: 'onChange',
        },
      },
    },
    {
      props: {
        type: 'tel',
        placeholder: 'Enter phone',
        value: '+1234567890',
        validation: {
          required: true,
          tel: true,
          trigger: 'onChange',
        },
      },
      style: { marginBottom: '24px' },
    },
    {
      props: {
        type: 'number',
        placeholder: 'number',
        validation: {
          required: true,
          min: 0,
          max: 1000,
          trigger: 'onChange',
        },
      },
    },
    {
      props: {
        type: 'number',
        placeholder: 'Enter amount',
        value: '123.45',
        validation: {
          required: true,
          min: 0,
          max: 1000,
          trigger: 'onChange',
        },
      },
    },
  ]

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  }

  return (
    <div style={gridContainerStyle}>
      {sizes.map((size) => {
        const withButtonStates: InputState[] = [
          {
            props: {
              placeholder: 'Input with button',
              rightDecorator: {
                children: 'Click me',
                onClick: () => console.log('Button clicked'),
                withArrow: ['l', 'xl'].includes(size),
              },
              rightDecoratorType: 'button',
            },
            title: 'Input with button',
          },
        ]

        return (
          <div
            key={size}
            style={{ padding: '16px', border: '1px solid #eaeaea' }}
          >
            <h3 style={{ marginBottom: '30px' }}>Size: {size}</h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {[
                defaultStates,
                size !== 'm' ? withLabelStates : null,
                withButtonStates,
                withRightIconStates,
                withLeftIconStates,
                withRightTextStates,
                typeStates,
              ]
                .filter((group): group is InputState[] => Boolean(group))
                .map((stateGroup, groupIndex) => (
                  <div key={groupIndex}>
                    {stateGroup[0].title === 'Types' && (
                      <h5 style={{ marginBottom: '4px' }}>
                        {stateGroup[0].title}
                      </h5>
                    )}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                      }}
                    >
                      {stateGroup.map(({ props, style }, index) => {
                        if (
                          props.rightDecoratorType === 'text' &&
                          size !== 'xl'
                        ) {
                          return null
                        }

                        return (
                          <div key={index} style={style}>
                            <Input size={size} {...props} />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

AllStates.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Displays all possible Input states for easy review.',
    },
  },
}
