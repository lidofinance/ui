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
          style={{
            padding: '16px',
            border: '1px solid #eaeaea',
            borderRadius: '4px',
          }}
        >
          <h3>Size: {size.toUpperCase()}</h3>
          {variants.map((variant) => (
            <div key={variant} style={{ marginBottom: '16px' }}>
              <h4>
                Variant: {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </h4>
              {disabledStates.map((disabled) => (
                <div key={disabled.toString()} style={{ marginBottom: '16px' }}>
                  <h5
                    style={{ opacity: 0.7, fontSize: '20px', margin: '5px 0' }}
                  >
                    Disabled: {disabled.toString()}
                  </h5>
                  {labelStates.map((hasLabel) => (
                    <div
                      key={hasLabel.toString()}
                      style={{ marginBottom: '16px' }}
                    >
                      <h5
                        style={{
                          opacity: 0.7,
                          fontSize: '14px',
                          margin: '5px 0',
                        }}
                      >
                        Label: {hasLabel ? 'Yes' : 'No'}
                      </h5>
                      <div
                        style={{
                          display: 'flex',
                          gap: '16px',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                        }}
                      >
                        <Checkbox
                          key={`${size}-${variant}-${disabled}-${hasLabel}-checked`}
                          variant={variant}
                          size={size}
                          disabled={disabled}
                          checked={true}
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          {hasLabel ? 'Checkbox Label' : ''}
                        </Checkbox>
                        <Checkbox
                          key={`${size}-${variant}-${disabled}-${hasLabel}-unchecked`}
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
