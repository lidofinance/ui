import type { Meta, StoryObj } from '@storybook/react'
import {
  StorybookContainer,
  StorybookGroup,
  StorybookSection,
} from '../../.storybook/components'
import { Checkbox } from '.'

const meta: Meta<typeof Checkbox> = {
  title: 'Controls/Checkbox',
  component: Checkbox,
  args: {
    children: 'Checkbox text',
    disabled: false,
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
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
  const subGroupStyle: React.CSSProperties = {
    marginBottom: '16px',
  }

  const subGroupTitleStyle: React.CSSProperties = {
    margin: '0 0 8px 0',
    fontSize: '14px',
    color: 'var(--lido-ui-color-text-secondary)',
  }

  const checkboxGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    alignItems: 'center',
  }

  return (
    <StorybookContainer>
      <StorybookSection title='Variant: Primary'>
        <StorybookGroup title='State: Enabled'>
          <div style={subGroupStyle}>
            <h5 style={subGroupTitleStyle}>With Label</h5>
            <div style={checkboxGroupStyle}>
              <Checkbox variant='primary' checked>
                Checkbox Label
              </Checkbox>
              <Checkbox variant='primary'>Checkbox Label</Checkbox>
            </div>
          </div>
          <div style={{ ...subGroupStyle, marginBottom: 0 }}>
            <h5 style={subGroupTitleStyle}>Without Label</h5>
            <div style={checkboxGroupStyle}>
              <Checkbox variant='primary' checked />
              <Checkbox variant='primary' />
            </div>
          </div>
        </StorybookGroup>
        <StorybookGroup title='State: Disabled' last>
          <div style={subGroupStyle}>
            <h5 style={subGroupTitleStyle}>With Label</h5>
            <div style={checkboxGroupStyle}>
              <Checkbox variant='primary' disabled checked>
                Checkbox Label
              </Checkbox>
              <Checkbox variant='primary' disabled>
                Checkbox Label
              </Checkbox>
            </div>
          </div>
          <div style={{ ...subGroupStyle, marginBottom: 0 }}>
            <h5 style={subGroupTitleStyle}>Without Label</h5>
            <div style={checkboxGroupStyle}>
              <Checkbox variant='primary' disabled checked />
              <Checkbox variant='primary' disabled />
            </div>
          </div>
        </StorybookGroup>
      </StorybookSection>

      <StorybookSection title='Variant: Secondary'>
        <StorybookGroup title='State: Enabled'>
          <div style={subGroupStyle}>
            <h5 style={subGroupTitleStyle}>With Label</h5>
            <div style={checkboxGroupStyle}>
              <Checkbox variant='secondary' checked>
                Checkbox Label
              </Checkbox>
              <Checkbox variant='secondary'>Checkbox Label</Checkbox>
            </div>
          </div>
          <div style={{ ...subGroupStyle, marginBottom: 0 }}>
            <h5 style={subGroupTitleStyle}>Without Label</h5>
            <div style={checkboxGroupStyle}>
              <Checkbox variant='secondary' checked />
              <Checkbox variant='secondary' />
            </div>
          </div>
        </StorybookGroup>
        <StorybookGroup title='State: Disabled' last>
          <div style={subGroupStyle}>
            <h5 style={subGroupTitleStyle}>With Label</h5>
            <div style={checkboxGroupStyle}>
              <Checkbox variant='secondary' disabled checked>
                Checkbox Label
              </Checkbox>
              <Checkbox variant='secondary' disabled>
                Checkbox Label
              </Checkbox>
            </div>
          </div>
          <div style={{ ...subGroupStyle, marginBottom: 0 }}>
            <h5 style={subGroupTitleStyle}>Without Label</h5>
            <div style={checkboxGroupStyle}>
              <Checkbox variant='secondary' disabled checked />
              <Checkbox variant='secondary' disabled />
            </div>
          </div>
        </StorybookGroup>
      </StorybookSection>
    </StorybookContainer>
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
