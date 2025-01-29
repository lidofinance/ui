import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TagColor, TagSize, TagVariant } from '.'
import { Eth } from '../icons'

const meta: Meta<typeof Tag> = {
  title: 'Layout/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Text',
    variant: 'outline',
    size: 's',
    color: 'default',
  },
  argTypes: {
    variant: {
      options: ['outline', 'filled'],
      control: { type: 'radio' },
    },
    color: {
      options: [
        'default',
        'accent',
        'disabled',
        'negative',
        'warning',
        'positive',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'radio' },
    },
    icon: {
      control: { type: 'boolean' },
    },
    onClose: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

const Icon = () => <Eth width='34px' height='34px' />

export const Basic: Story = {}

export const AllStates: Story = {
  render: () => {
    const variants: TagVariant[] = ['outline', 'filled']
    const colors: TagColor[] = [
      'default',
      'accent',
      'disabled',
      'negative',
      'warning',
      'positive',
    ]
    const sizes: TagSize[] = ['s', 'm', 'l']
    const iconOptions: boolean[] = [false, true]
    const onCloseOptions: boolean[] = [false, true]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {variants.map((variant) => (
          <div key={variant}>
            <h2>
              Variant: {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h2>
            {colors.map((color) => (
              <div key={color} style={{ marginLeft: '16px' }}>
                <h3>Color: {color.charAt(0).toUpperCase() + color.slice(1)}</h3>
                {sizes.map((size) => (
                  <div
                    key={size}
                    style={{ marginLeft: '16px', marginBottom: '16px' }}
                  >
                    <h4>Size: {size.toUpperCase()}</h4>
                    <div
                      style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
                    >
                      {iconOptions.map((hasIcon) =>
                        onCloseOptions.map((hasOnClose) => (
                          <Tag
                            key={`${variant}-${color}-${size}-${hasIcon}-${hasOnClose}`}
                            variant={variant}
                            color={color}
                            size={size}
                            icon={hasIcon ? <Icon /> : undefined}
                            onClose={
                              hasOnClose
                                ? () => {
                                    console.log(1)
                                  }
                                : undefined
                            }
                          >
                            {hasOnClose
                              ? 'Closable Tag'
                              : hasIcon
                                ? 'Tag with Icon'
                                : 'Tag'}
                          </Tag>
                        )),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  },
}

AllStates.parameters = {
  docs: {
    description: {
      story: 'Displays all possible Tag states for easy review.',
    },
  },
}
