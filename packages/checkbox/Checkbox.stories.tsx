import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxSize, CheckboxVariant } from '.'

const meta: Meta<typeof Checkbox> = {
  title: 'Controls/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Checkbox text',
    disabled: false,
    variant: 'accent',
    size: 's',
  },
  argTypes: {
    variant: {
      options: ['accent', 'primary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['xs', 's', 'm', 'l'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
export const AllStates: Story = () => {
  const variants: CheckboxVariant[] = ['accent', 'primary']
  const sizes: CheckboxSize[] = ['xs', 's', 'm', 'l']
  const disabledStates: boolean[] = [false, true]
  const labelStates: boolean[] = [true, false]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {variants.map((variant) => (
        <div key={variant}>
          <h2>Variant: {variant.charAt(0).toUpperCase() + variant.slice(1)}</h2>
          {sizes.map((size) => (
            <div key={size} style={{ marginBottom: '100px' }}>
              <h3>Size: {size.toUpperCase()}</h3>
              {disabledStates.map((disabled) => (
                <div key={disabled.toString()} style={{ marginBottom: '30px' }}>
                  <h4
                    style={{
                      margin: '10px 0 0 0',
                      fontSize: '20px',
                      opacity: '.7',
                    }}
                  >
                    Disabled: {disabled.toString()}
                  </h4>
                  <div
                    style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}
                  >
                    {labelStates.map((hasLabel) => (
                      <div
                        key={hasLabel.toString()}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <h5
                          style={{
                            margin: '6px 0',
                            fontSize: '15px',
                            opacity: '.7',
                          }}
                        >
                          Label: {hasLabel ? 'Yes' : 'No'}
                        </h5>
                        <div
                          style={{
                            display: 'flex',
                            gap: '24px',
                            alignItems: 'center',
                          }}
                        >
                          <Checkbox
                            key={`${variant}-${size}-${disabled}-${hasLabel}-checked`}
                            variant={variant}
                            size={size}
                            disabled={disabled}
                            checked={true}
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            {hasLabel ? 'Checkbox Label' : ''}
                          </Checkbox>
                          <Checkbox
                            key={`${variant}-${size}-${disabled}-${hasLabel}-unchecked`}
                            variant={variant}
                            size={size}
                            disabled={disabled}
                            checked={false}
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            {hasLabel ? 'Checkbox Label' : ''}
                          </Checkbox>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
      story: 'Displays all possible Checkbox states for easy review.',
    },
  },
}
