import { StoryFn, Meta } from '@storybook/react'
import { Select, SelectProps, SelectWithColoredIcon } from '.'
import {
  Icon,
  Image,
  Farcaster,
  GoogleCal,
  Analytics,
  Academy,
  Discord,
} from '../icons'

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
      { value: 4, label: 'Text 4' },
      { value: 5, label: 'Text 5' },
      { value: 6, label: 'Text 6' },
      { value: 7, label: 'Text 7' },
      { value: 8, label: 'Text 8' },
      { value: 9, label: 'Text 9' },
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
      options: ['l', 'm', 's'],
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

  const iconOptions = [
    {
      value: 1,
      label: 'Option 1',
      icon: { icon: Icon },
    },
    {
      value: 2,
      label: 'Option 2',
      icon: { icon: Icon },
    },
    {
      value: 3,
      label: 'Option 3',
      icon: { icon: Icon },
    },
  ]

  const coloredIconOptions = [
    {
      value: 1,
      label: 'Option 1',
      icon: Discord,
    },
    {
      value: 2,
      label: 'Option 2',
      icon: Farcaster,
    },
    {
      value: 3,
      label: 'Option 3',
      icon: GoogleCal,
    },
  ]

  return (
    <div style={gridContainerStyle}>
      <div style={sectionStyle}>
        <h3>Size: l</h3>

        <div style={stateContainerStyle}>
          <h5>State: Default</h5>
          <div style={selectContainerStyle}>
            <Select
              size='l'
              options={commonOptions}
              placeholder='Select option'
            />
          </div>
        </div>

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

        <div style={stateContainerStyle}>
          <h5>State: With Placeholder Icon</h5>
          <div style={selectContainerStyle}>
            <Select
              size='l'
              options={iconOptions}
              placeholder='Select option'
              placeholderIcon={{ icon: Icon }}
            />
            <SelectWithColoredIcon
              size='l'
              options={coloredIconOptions}
              placeholder='Select option'
              placeholderIcon={Analytics}
            />
          </div>
        </div>

        <div style={stateContainerStyle}>
          <h5>State: Disabled With Placeholder Icon</h5>
          <div style={selectContainerStyle}>
            <Select
              size='l'
              options={iconOptions}
              placeholder='Select option'
              placeholderIcon={{ icon: Icon }}
              disabled
            />
            <SelectWithColoredIcon
              size='l'
              options={coloredIconOptions}
              placeholder='Select option'
              placeholderIcon={Analytics}
              disabled
            />
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3>Size: m</h3>

        <div style={stateContainerStyle}>
          <h5>State: Default</h5>
          <div style={selectContainerStyle}>
            <Select
              size='m'
              options={commonOptions}
              placeholder='Select option'
            />
          </div>
        </div>

        <div style={stateContainerStyle}>
          <h5>State: Disabled</h5>
          <div style={selectContainerStyle}>
            <Select
              size='m'
              options={commonOptions}
              defaultValue={1}
              disabled
            />
          </div>
        </div>

        <div style={stateContainerStyle}>
          <h5>State: With Placeholder Icon</h5>
          <div style={selectContainerStyle}>
            <Select
              size='m'
              options={iconOptions}
              placeholder='Select option'
              placeholderIcon={{ icon: Icon }}
            />
            <SelectWithColoredIcon
              size='m'
              options={coloredIconOptions}
              placeholder='Select option'
              placeholderIcon={Academy}
            />
          </div>
        </div>

        <div style={stateContainerStyle}>
          <h5>State: Disabled with Icons</h5>
          <div style={selectContainerStyle}>
            <Select size='m' options={iconOptions} defaultValue={1} disabled />
            <SelectWithColoredIcon
              size='m'
              options={coloredIconOptions}
              defaultValue={1}
              disabled
            />
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3>Size: s</h3>

        <div style={stateContainerStyle}>
          <h5>State: Default</h5>
          <div style={selectContainerStyle}>
            <Select
              size='s'
              options={commonOptions}
              placeholder='Select option'
            />
          </div>
        </div>

        <div style={stateContainerStyle}>
          <h5>State: Disabled</h5>
          <div style={selectContainerStyle}>
            <Select
              size='s'
              options={commonOptions}
              defaultValue={1}
              disabled
            />
          </div>
        </div>

        <div style={stateContainerStyle}>
          <h5>State: With Placeholder Icon</h5>
          <div style={selectContainerStyle}>
            <Select
              size='s'
              options={iconOptions}
              placeholder='Select option'
              placeholderIcon={{ icon: Icon }}
            />
            <SelectWithColoredIcon
              size='s'
              options={coloredIconOptions}
              placeholder='Select option'
              placeholderIcon={Image}
            />
          </div>
        </div>

        <div style={stateContainerStyle}>
          <h5>State: Disabled with Icons</h5>
          <div style={selectContainerStyle}>
            <Select size='s' options={iconOptions} defaultValue={1} disabled />
            <SelectWithColoredIcon
              size='s'
              options={coloredIconOptions}
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
