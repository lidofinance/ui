import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { ETH } from '../icons'

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
  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  }

  const sectionStyle: React.CSSProperties = {
    padding: '16px',
    border: '1px solid #eaeaea',
  }

  const sectionHeadingStyle: React.CSSProperties = {
    marginBottom: '30px',
  }

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  }

  const groupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }

  const h5HeadingStyle: React.CSSProperties = {
    marginBottom: '16px',
  }

  return (
    <div style={gridContainerStyle}>
      {/* Size: M */}
      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>Size: m</h3>
        <div style={columnStyle}>
          {/* Default States */}
          <div>
            <h5 style={h5HeadingStyle}>Default</h5>
            <div style={groupStyle}>
              <div>
                <Input size='m' placeholder='Default input' />
              </div>
              <div>
                <Input
                  size='m'
                  placeholder='Input with error border'
                  error=''
                />
              </div>
              <div style={{ marginBottom: '25px' }}>
                <Input
                  size='m'
                  placeholder='Input with error'
                  error='Error message'
                />
              </div>
              <div>
                <Input size='m' placeholder='Disabled input' disabled />
              </div>
              <div>
                <Input
                  size='m'
                  placeholder='Disabled input with button'
                  disabled
                  rightDecorator={{
                    children: 'Click me',
                    onClick: () => console.log('Button clicked'),
                    withArrow: false,
                  }}
                  rightDecoratorType='button'
                />
              </div>
            </div>
          </div>

          {/* Input with Button */}
          <div>
            <h5 style={h5HeadingStyle}>Input with button</h5>
            <div style={groupStyle}>
              <div>
                <Input
                  size='m'
                  placeholder='Input with button'
                  rightDecorator={{
                    children: 'Click me',
                    onClick: () => console.log('Button clicked'),
                    withArrow: false,
                  }}
                  rightDecoratorType='button'
                />
              </div>
            </div>
          </div>

          {/* Input with Left Icon */}
          <div>
            <h5 style={h5HeadingStyle}>Left decorator icon</h5>
            <div style={groupStyle}>
              <div>
                <Input
                  size='m'
                  placeholder='Input with left icon'
                  leftDecorator={<ETH width={24} height={24} />}
                />
              </div>
            </div>
          </div>

          {/* Types */}
          <div>
            <h5 style={h5HeadingStyle}>Types</h5>
            <div style={groupStyle}>
              <div>
                <Input size='m' type='text' placeholder='text' />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='m'
                  type='text'
                  placeholder='Enter your name'
                  value='John Doe'
                />
              </div>
              <div>
                <Input
                  size='m'
                  type='email'
                  placeholder='email'
                  validation={{
                    required: true,
                    email: true,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='m'
                  type='email'
                  placeholder='Enter your email'
                  value='john@example.com'
                  validation={{
                    required: true,
                    email: true,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div>
                <Input
                  size='m'
                  type='password'
                  placeholder='password'
                  validation={{
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
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='m'
                  type='password'
                  placeholder='Enter password'
                  value='Password123!'
                  validation={{
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
                  }}
                />
              </div>
              <div>
                <Input size='m' type='search' placeholder='search' />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='m'
                  type='search'
                  placeholder='Search...'
                  value='ethereum'
                />
              </div>
              <div>
                <Input
                  size='m'
                  type='url'
                  placeholder='url'
                  validation={{
                    required: true,
                    url: true,
                    trigger: 'onBlur',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='m'
                  type='url'
                  placeholder='Enter URL'
                  value='https://lido.fi'
                  validation={{
                    required: true,
                    url: true,
                    trigger: 'onBlur',
                  }}
                />
              </div>
              <div>
                <Input
                  size='m'
                  type='tel'
                  placeholder='tel'
                  validation={{
                    required: true,
                    tel: true,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='m'
                  type='tel'
                  placeholder='Enter phone'
                  value='+1234567890'
                  validation={{
                    required: true,
                    tel: true,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div>
                <Input
                  size='m'
                  type='number'
                  placeholder='number'
                  validation={{
                    required: true,
                    min: 0,
                    max: 1000,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div>
                <Input
                  size='m'
                  type='number'
                  placeholder='Enter amount'
                  value='123.45'
                  validation={{
                    required: true,
                    min: 0,
                    max: 1000,
                    trigger: 'onChange',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Size: L */}
      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>Size: l</h3>
        <div style={columnStyle}>
          {/* Default States */}
          <div>
            <h5 style={h5HeadingStyle}>Default</h5>
            <div style={groupStyle}>
              <div>
                <Input size='l' placeholder='Default input' />
              </div>
              <div>
                <Input
                  size='l'
                  placeholder='Input with error border'
                  error=''
                />
              </div>
              <div style={{ marginBottom: '25px' }}>
                <Input
                  size='l'
                  placeholder='Input with error'
                  error='Error message'
                />
              </div>
              <div>
                <Input size='l' placeholder='Disabled input' disabled />
              </div>
              <div>
                <Input
                  size='l'
                  placeholder='Disabled input with button'
                  disabled
                  rightDecorator={{
                    children: 'Click me',
                    onClick: () => console.log('Button clicked'),
                    withArrow: true,
                  }}
                  rightDecoratorType='button'
                />
              </div>
            </div>
          </div>

          {/* Input with Label */}
          <div>
            <h5 style={h5HeadingStyle}>Input with label and placeholder</h5>
            <div style={groupStyle}>
              <div>
                <Input size='l' placeholder='Enter value' />
              </div>
            </div>
          </div>

          {/* Input with Button */}
          <div>
            <h5 style={h5HeadingStyle}>Input with button</h5>
            <div style={groupStyle}>
              <div>
                <Input
                  size='l'
                  placeholder='Input with button'
                  rightDecorator={{
                    children: 'Click me',
                    onClick: () => console.log('Button clicked'),
                    withArrow: true,
                  }}
                  rightDecoratorType='button'
                />
              </div>
            </div>
          </div>

          {/* Input with Left Icon */}
          <div>
            <h5 style={h5HeadingStyle}>Left decorator icon</h5>
            <div style={groupStyle}>
              <div>
                <Input
                  size='l'
                  placeholder='Input with left icon'
                  leftDecorator={<ETH width={24} height={24} />}
                />
              </div>
            </div>
          </div>

          {/* Types */}
          <div>
            <h5 style={h5HeadingStyle}>Types</h5>
            <div style={groupStyle}>
              <div>
                <Input size='l' type='text' placeholder='text' />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='l'
                  type='text'
                  placeholder='Enter your name'
                  value='John Doe'
                />
              </div>
              <div>
                <Input
                  size='l'
                  type='email'
                  placeholder='email'
                  validation={{
                    required: true,
                    email: true,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='l'
                  type='email'
                  placeholder='Enter your email'
                  value='john@example.com'
                  validation={{
                    required: true,
                    email: true,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div>
                <Input
                  size='l'
                  type='password'
                  placeholder='password'
                  validation={{
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
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='l'
                  type='password'
                  placeholder='Enter password'
                  value='Password123!'
                  validation={{
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
                  }}
                />
              </div>
              <div>
                <Input size='l' type='search' placeholder='search' />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='l'
                  type='search'
                  placeholder='Search...'
                  value='ethereum'
                />
              </div>
              <div>
                <Input
                  size='l'
                  type='url'
                  placeholder='url'
                  validation={{
                    required: true,
                    url: true,
                    trigger: 'onBlur',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='l'
                  type='url'
                  placeholder='Enter URL'
                  value='https://lido.fi'
                  validation={{
                    required: true,
                    url: true,
                    trigger: 'onBlur',
                  }}
                />
              </div>
              <div>
                <Input
                  size='l'
                  type='tel'
                  placeholder='tel'
                  validation={{
                    required: true,
                    tel: true,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='l'
                  type='tel'
                  placeholder='Enter phone'
                  value='+1234567890'
                  validation={{
                    required: true,
                    tel: true,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div>
                <Input
                  size='l'
                  type='number'
                  placeholder='number'
                  validation={{
                    required: true,
                    min: 0,
                    max: 1000,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div>
                <Input
                  size='l'
                  type='number'
                  placeholder='Enter amount'
                  value='123.45'
                  validation={{
                    required: true,
                    min: 0,
                    max: 1000,
                    trigger: 'onChange',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Size: XL */}
      <div style={sectionStyle}>
        <h3 style={sectionHeadingStyle}>Size: xl</h3>
        <div style={columnStyle}>
          {/* Default States */}
          <div>
            <h5 style={h5HeadingStyle}>Default</h5>
            <div style={groupStyle}>
              <div>
                <Input size='xl' placeholder='Default input' />
              </div>
              <div>
                <Input
                  size='xl'
                  placeholder='Input with error border'
                  error=''
                />
              </div>
              <div style={{ marginBottom: '25px' }}>
                <Input
                  size='xl'
                  placeholder='Input with error'
                  error='Error message'
                />
              </div>
              <div>
                <Input size='xl' placeholder='Disabled input' disabled />
              </div>
              <div>
                <Input
                  size='xl'
                  placeholder='Disabled input with button'
                  disabled
                  rightDecorator={{
                    children: 'Click me',
                    onClick: () => console.log('Button clicked'),
                    withArrow: true,
                  }}
                  rightDecoratorType='button'
                />
              </div>
            </div>
          </div>

          {/* Input with Label */}
          <div>
            <h5 style={h5HeadingStyle}>Input with label and placeholder</h5>
            <div style={groupStyle}>
              <div>
                <Input size='xl' placeholder='Enter value' />
              </div>
            </div>
          </div>

          {/* Input with Button */}
          <div>
            <h5 style={h5HeadingStyle}>Input with button</h5>
            <div style={groupStyle}>
              <div>
                <Input
                  size='xl'
                  placeholder='Input with button'
                  rightDecorator={{
                    children: 'Click me',
                    onClick: () => console.log('Button clicked'),
                    withArrow: true,
                  }}
                  rightDecoratorType='button'
                />
              </div>
            </div>
          </div>

          {/* Input with Left Icon */}
          <div>
            <h5 style={h5HeadingStyle}>Left decorator icon</h5>
            <div style={groupStyle}>
              <div>
                <Input
                  size='xl'
                  placeholder='Input with left icon'
                  leftDecorator={<ETH width={24} height={24} />}
                />
              </div>
            </div>
          </div>

          {/* Input with Right Text */}
          <div>
            <h5 style={h5HeadingStyle}>With right decorator text</h5>
            <div style={groupStyle}>
              <div>
                <Input
                  size='xl'
                  placeholder='0.00'
                  rightDecorator='Sample Text'
                  rightDecoratorType='text'
                />
              </div>
            </div>
          </div>

          {/* Types */}
          <div>
            <h5 style={h5HeadingStyle}>Types</h5>
            <div style={groupStyle}>
              <div>
                <Input size='xl' type='text' placeholder='text' />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='xl'
                  type='text'
                  placeholder='Enter your name'
                  value='John Doe'
                />
              </div>
              <div>
                <Input
                  size='xl'
                  type='email'
                  placeholder='email'
                  validation={{
                    required: true,
                    email: true,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='xl'
                  type='email'
                  placeholder='Enter your email'
                  value='john@example.com'
                  validation={{
                    required: true,
                    email: true,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div>
                <Input
                  size='xl'
                  type='password'
                  placeholder='password'
                  validation={{
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
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='xl'
                  type='password'
                  placeholder='Enter password'
                  value='Password123!'
                  validation={{
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
                  }}
                />
              </div>
              <div>
                <Input size='xl' type='search' placeholder='search' />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='xl'
                  type='search'
                  placeholder='Search...'
                  value='ethereum'
                />
              </div>
              <div>
                <Input
                  size='xl'
                  type='url'
                  placeholder='url'
                  validation={{
                    required: true,
                    url: true,
                    trigger: 'onBlur',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='xl'
                  type='url'
                  placeholder='Enter URL'
                  value='https://lido.fi'
                  validation={{
                    required: true,
                    url: true,
                    trigger: 'onBlur',
                  }}
                />
              </div>
              <div>
                <Input
                  size='xl'
                  type='tel'
                  placeholder='tel'
                  validation={{
                    required: true,
                    tel: true,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <Input
                  size='xl'
                  type='tel'
                  placeholder='Enter phone'
                  value='+1234567890'
                  validation={{
                    required: true,
                    tel: true,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div>
                <Input
                  size='xl'
                  type='number'
                  placeholder='number'
                  validation={{
                    required: true,
                    min: 0,
                    max: 1000,
                    trigger: 'onChange',
                  }}
                />
              </div>
              <div>
                <Input
                  size='xl'
                  type='number'
                  placeholder='Enter amount'
                  value='123.45'
                  validation={{
                    required: true,
                    min: 0,
                    max: 1000,
                    trigger: 'onChange',
                  }}
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
      story: 'Displays all possible Input states for easy review.',
    },
  },
}
