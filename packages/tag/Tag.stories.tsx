import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from '.'
import { Image } from '../icons'
import {
  StorybookContainer,
  StorybookGroup,
  StorybookSection,
} from '../../.storybook/components'

const meta: Meta<typeof Tag> = {
  title: 'Content helpers/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Text',
    variant: 'secondary',
    color: 'default',
    shape: 'rounded',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    color: {
      options: ['default', 'highlighted', 'error', 'warning', 'success'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['rounded', 'squared'],
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

const Icon = () => <Image />

export const Basic: Story = {}

const shapes = ['rounded', 'squared'] as const
const variants = ['primary', 'secondary'] as const
const colors = [
  'default',
  'highlighted',
  'error',
  'warning',
  'success',
] as const

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1)

export const AllStates: Story = {
  render: () => {
    const colorTitleStyle: React.CSSProperties = {
      margin: '0 0 12px 0',
      fontSize: '14px',
      fontWeight: '500',
      color: 'var(--lido-ui-color-text-secondary)',
    }

    const tagsRowStyle: React.CSSProperties = {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
      alignItems: 'center',
    }

    return (
      <StorybookContainer>
        {shapes.map((shape) => (
          <StorybookSection key={shape} title={`Shape: ${capitalize(shape)}`}>
            {variants.map((variant, variantIndex) => (
              <StorybookGroup
                key={variant}
                title={`Variant: ${capitalize(variant)}`}
                last={variantIndex === variants.length - 1}
              >
                {colors.map((color, colorIndex) => (
                  <div
                    key={color}
                    style={{
                      marginBottom:
                        colorIndex === colors.length - 1 ? 0 : '24px',
                    }}
                  >
                    <h5 style={colorTitleStyle}>Color: {capitalize(color)}</h5>
                    <div style={tagsRowStyle}>
                      <Tag variant={variant} color={color} shape={shape}>
                        Text
                      </Tag>
                      <Tag
                        variant={variant}
                        color={color}
                        shape={shape}
                        onClose={() => console.log('Tag closed')}
                      >
                        Text
                      </Tag>
                      <Tag
                        variant={variant}
                        color={color}
                        shape={shape}
                        icon={<Icon />}
                      >
                        Text
                      </Tag>
                      <Tag
                        variant={variant}
                        color={color}
                        shape={shape}
                        icon={<Icon />}
                        onClose={() => console.log('Tag closed')}
                      >
                        Text
                      </Tag>
                    </div>
                  </div>
                ))}
              </StorybookGroup>
            ))}
          </StorybookSection>
        ))}
      </StorybookContainer>
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
