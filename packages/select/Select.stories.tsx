import { StoryFn, Meta } from '@storybook/react'
import { Select, SelectProps } from '.'

export default {
  component: Select,
  title: 'Controls/Select',
  parameters: {
    layout: 'centered',
  },
  args: {
    defaultValue: 1,
    options: [
      { value: 1, label: 'Text 1' },
      { value: 2, label: 'Text 2' },
      { value: 3, label: 'Text 3' },
    ],
    size: 'l',
    disabled: false,
  },
  argTypes: {
    onOptionChange: { action: 'option changed' },
    items: {
      table: {
        disable: true,
      },
    },
    options: {
      control: 'object',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      options: ['l', 'xl'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export const Basic: StoryFn<SelectProps> = (props) => <Select {...props} />

export const AllStates: StoryFn<SelectProps> = () => {
  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  }

  const sectionStyle: React.CSSProperties = {
    padding: '16px',
    border: '1px solid #eaeaea',
  }

  const stateContainerStyle: React.CSSProperties = {
    marginBottom: '16px',
  }

  const selectContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  }

  const commonOptions = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ]

  return (
    <div style={gridContainerStyle}>
      {/* Size: L */}
      <div style={sectionStyle}>
        <h3>Size: l</h3>

        {/* Default state */}
        <div style={stateContainerStyle}>
          <h5>State: Default</h5>
          <div style={selectContainerStyle}>
            <Select size='l' options={commonOptions} defaultValue={1} />
          </div>
        </div>

        {/* Disabled state */}
        <div style={stateContainerStyle}>
          <h5>State: Disabled</h5>
          <div style={selectContainerStyle}>
            <Select
              size='l'
              options={commonOptions}
              defaultValue={1}
              disabled
            />
          </div>
        </div>
      </div>

      {/* Size: XL */}
      <div style={sectionStyle}>
        <h3>Size: xl</h3>

        {/* Default state */}
        <div style={stateContainerStyle}>
          <h5>State: Default</h5>
          <div style={selectContainerStyle}>
            <Select size='xl' options={commonOptions} defaultValue={1} />
          </div>
        </div>

        {/* Disabled state */}
        <div style={stateContainerStyle}>
          <h5>State: Disabled</h5>
          <div style={selectContainerStyle}>
            <Select
              size='xl'
              options={commonOptions}
              defaultValue={1}
              disabled
            />
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
      story: 'Displays all possible Select states for easy review.',
    },
  },
}
