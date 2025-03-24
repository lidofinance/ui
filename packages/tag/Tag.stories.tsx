import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TagColor, TagSize, TagVariant } from '.'
import { Eth } from '../icons'

const meta: Meta<typeof Tag> = {
  title: 'Feedback/Tag',
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

    const gridContainerStyle: React.CSSProperties = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
    }

    const variantCardStyle: React.CSSProperties = {
      padding: '16px',
      border: '1px solid #eaeaea',
      borderRadius: '4px',
    }
    const colorSectionStyle: React.CSSProperties = {
      marginBottom: '16px',
    }
    const sizesGridStyle: React.CSSProperties = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
    }
    const sizeCardStyle: React.CSSProperties = {
      padding: '8px',
      borderRadius: '4px',
    }

    return (
      <div style={gridContainerStyle}>
        {variants.map((variant) => (
          <div key={variant} style={variantCardStyle}>
            <h2>
              Variant: {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h2>
            {colors.map((color) => (
              <div key={color} style={colorSectionStyle}>
                <h3>Color: {color.charAt(0).toUpperCase() + color.slice(1)}</h3>
                <div style={sizesGridStyle}>
                  {sizes.map((size) => (
                    <div key={size} style={sizeCardStyle}>
                      <h4>Size: {size.toUpperCase()}</h4>
                      <div
                        style={{
                          display: 'flex',
                          gap: '16px',
                          flexWrap: 'wrap',
                        }}
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
                                      console.log('Tag closed')
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
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  },
}

AllStates.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Displays all possible Tag states for easy review.',
    },
  },
}
