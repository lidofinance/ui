import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from '.'
import { Image } from '../icons'

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

export const AllStates: Story = {
  render: () => {
    const gridContainerStyle: React.CSSProperties = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '32px',
    }

    const shapeCardStyle: React.CSSProperties = {
      padding: '24px',
      border: '1px solid #eaeaea',
      borderRadius: '8px',
    }

    const variantSectionStyle: React.CSSProperties = {
      marginBottom: '24px',
    }

    const colorSectionStyle: React.CSSProperties = {
      marginBottom: '16px',
    }

    const tagsContainerStyle: React.CSSProperties = {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
    }

    return (
      <div style={gridContainerStyle}>
        {/* Rounded Shape */}
        <div style={shapeCardStyle}>
          <h2>Shape: Rounded</h2>

          {/* Primary Variant */}
          <div style={variantSectionStyle}>
            <h3>Variant: Primary</h3>

            {/* Default Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Default</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='primary' color='default' shape='rounded'>
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='default'
                  shape='rounded'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='default'
                  shape='rounded'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='default'
                  shape='rounded'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Highlighted Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Highlighted</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='primary' color='highlighted' shape='rounded'>
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='highlighted'
                  shape='rounded'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='highlighted'
                  shape='rounded'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='highlighted'
                  shape='rounded'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Error Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Error</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='primary' color='error' shape='rounded'>
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='error'
                  shape='rounded'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='error'
                  shape='rounded'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='error'
                  shape='rounded'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Warning Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Warning</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='primary' color='warning' shape='rounded'>
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='warning'
                  shape='rounded'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='warning'
                  shape='rounded'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='warning'
                  shape='rounded'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Success Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Success</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='primary' color='success' shape='rounded'>
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='success'
                  shape='rounded'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='success'
                  shape='rounded'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='success'
                  shape='rounded'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>
          </div>

          {/* Secondary Variant */}
          <div style={variantSectionStyle}>
            <h3>Variant: Secondary</h3>

            {/* Default Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Default</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='secondary' color='default' shape='rounded'>
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='default'
                  shape='rounded'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='default'
                  shape='rounded'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='default'
                  shape='rounded'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Highlighted Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Highlighted</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='secondary' color='highlighted' shape='rounded'>
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='highlighted'
                  shape='rounded'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='highlighted'
                  shape='rounded'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='highlighted'
                  shape='rounded'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Error Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Error</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='secondary' color='error' shape='rounded'>
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='error'
                  shape='rounded'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='error'
                  shape='rounded'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='error'
                  shape='rounded'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Warning Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Warning</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='secondary' color='warning' shape='rounded'>
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='warning'
                  shape='rounded'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='warning'
                  shape='rounded'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='warning'
                  shape='rounded'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Success Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Success</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='secondary' color='success' shape='rounded'>
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='success'
                  shape='rounded'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='success'
                  shape='rounded'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='success'
                  shape='rounded'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>
          </div>
        </div>

        {/* Squared Shape */}
        <div style={shapeCardStyle}>
          <h2>Shape: Squared</h2>

          {/* Primary Variant */}
          <div style={variantSectionStyle}>
            <h3>Variant: Primary</h3>

            {/* Default Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Default</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='primary' color='default' shape='squared'>
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='default'
                  shape='squared'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='default'
                  shape='squared'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='default'
                  shape='squared'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Highlighted Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Highlighted</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='primary' color='highlighted' shape='squared'>
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='highlighted'
                  shape='squared'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='highlighted'
                  shape='squared'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='highlighted'
                  shape='squared'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Error Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Error</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='primary' color='error' shape='squared'>
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='error'
                  shape='squared'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='error'
                  shape='squared'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='error'
                  shape='squared'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Warning Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Warning</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='primary' color='warning' shape='squared'>
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='warning'
                  shape='squared'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='warning'
                  shape='squared'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='warning'
                  shape='squared'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Success Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Success</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='primary' color='success' shape='squared'>
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='success'
                  shape='squared'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='success'
                  shape='squared'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='primary'
                  color='success'
                  shape='squared'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>
          </div>

          {/* Secondary Variant */}
          <div style={variantSectionStyle}>
            <h3>Variant: Secondary</h3>

            {/* Default Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Default</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='secondary' color='default' shape='squared'>
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='default'
                  shape='squared'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='default'
                  shape='squared'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='default'
                  shape='squared'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Highlighted Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Highlighted</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='secondary' color='highlighted' shape='squared'>
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='highlighted'
                  shape='squared'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='highlighted'
                  shape='squared'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='highlighted'
                  shape='squared'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Error Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Error</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='secondary' color='error' shape='squared'>
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='error'
                  shape='squared'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='error'
                  shape='squared'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='error'
                  shape='squared'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Warning Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Warning</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='secondary' color='warning' shape='squared'>
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='warning'
                  shape='squared'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='warning'
                  shape='squared'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='warning'
                  shape='squared'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>

            {/* Success Color */}
            <div style={colorSectionStyle}>
              <h4>Color: Success</h4>
              <div style={tagsContainerStyle}>
                <Tag variant='secondary' color='success' shape='squared'>
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='success'
                  shape='squared'
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='success'
                  shape='squared'
                  icon={<Icon />}
                >
                  Text
                </Tag>
                <Tag
                  variant='secondary'
                  color='success'
                  shape='squared'
                  icon={<Icon />}
                  onClose={() => console.log('Tag closed')}
                >
                  Text
                </Tag>
              </div>
            </div>
          </div>
        </div>
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
