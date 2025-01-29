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
  const labels: { label: boolean; checked: boolean }[] = [
    { label: true, checked: true },
    { label: true, checked: false },
    { label: false, checked: true },
    { label: false, checked: false },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {variants.map((variant) => (
        <div key={variant}>
          <h2>Variant: {variant.charAt(0).toUpperCase() + variant.slice(1)}</h2>
          {sizes.map((size) => (
            <div key={size} style={{ marginBottom: '24px' }}>
              <h3>Size: {size.toUpperCase()}</h3>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                {disabledStates.map((disabled) =>
                  labels.map((label) => (
                    <Checkbox
                      key={`${variant}-${size}-${disabled}-${label}`}
                      variant={variant}
                      size={size}
                      disabled={disabled}
                      checked={label.checked}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      {label.label ? 'Checkbox Label' : ''}
                    </Checkbox>
                  )),
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

AllStates.parameters = {
  docs: {
    description: {
      story: 'Displays all possible Checkbox states for easy review.',
    },
  },
}
