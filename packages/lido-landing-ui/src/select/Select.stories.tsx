import { StoryFn, Meta } from '@storybook/react'
import { Select, SelectProps, SelectWithColoredIcon } from '.'
import { Icon, Image } from '../icons'
import {
  StorybookContainer,
  StorybookGroup,
  StorybookSection,
} from '../../.storybook/components'

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
  const selectContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  }

  const selectWidthStyle: React.CSSProperties = {
    width: '260px',
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
      icon: Image,
    },
    {
      value: 2,
      label: 'Option 2',
      icon: Image,
    },
    {
      value: 3,
      label: 'Option 3',
      icon: Image,
    },
  ]

  return (
    <StorybookContainer>
      <StorybookSection title='Size: L'>
        <StorybookGroup title='State: Default'>
          <div style={selectContainerStyle}>
            <div style={selectWidthStyle}>
              <Select
                size='l'
                options={commonOptions}
                placeholder='Select option'
              />
            </div>
          </div>
        </StorybookGroup>

        <StorybookGroup title='State: Disabled'>
          <div style={selectContainerStyle}>
            <div style={selectWidthStyle}>
              <Select
                size='l'
                options={commonOptions}
                defaultValue={1}
                disabled
              />
            </div>
          </div>
        </StorybookGroup>

        <StorybookGroup title='State: With Placeholder Icon'>
          <div style={selectContainerStyle}>
            <div style={selectWidthStyle}>
              <Select
                size='l'
                options={iconOptions}
                placeholder='Select option'
                placeholderIcon={{ icon: Icon }}
              />
            </div>
            <div style={selectWidthStyle}>
              <SelectWithColoredIcon
                size='l'
                options={coloredIconOptions}
                placeholder='Select option'
                placeholderIcon={Image}
              />
            </div>
          </div>
        </StorybookGroup>

        <StorybookGroup title='State: Disabled With Placeholder Icon' last>
          <div style={selectContainerStyle}>
            <div style={selectWidthStyle}>
              <Select
                size='l'
                options={iconOptions}
                placeholder='Select option'
                placeholderIcon={{ icon: Icon }}
                disabled
              />
            </div>
            <div style={selectWidthStyle}>
              <SelectWithColoredIcon
                size='l'
                options={coloredIconOptions}
                placeholder='Select option'
                placeholderIcon={Image}
                disabled
              />
            </div>
          </div>
        </StorybookGroup>
      </StorybookSection>

      <StorybookSection title='Size: M'>
        <StorybookGroup title='State: Default'>
          <div style={selectContainerStyle}>
            <div style={selectWidthStyle}>
              <Select
                size='m'
                options={commonOptions}
                placeholder='Select option'
              />
            </div>
          </div>
        </StorybookGroup>

        <StorybookGroup title='State: Disabled'>
          <div style={selectContainerStyle}>
            <div style={selectWidthStyle}>
              <Select
                size='m'
                options={commonOptions}
                defaultValue={1}
                disabled
              />
            </div>
          </div>
        </StorybookGroup>

        <StorybookGroup title='State: With Placeholder Icon'>
          <div style={selectContainerStyle}>
            <div style={selectWidthStyle}>
              <Select
                size='m'
                options={iconOptions}
                placeholder='Select option'
                placeholderIcon={{ icon: Icon }}
              />
            </div>
            <div style={selectWidthStyle}>
              <SelectWithColoredIcon
                size='m'
                options={coloredIconOptions}
                placeholder='Select option'
                placeholderIcon={Image}
              />
            </div>
          </div>
        </StorybookGroup>

        <StorybookGroup title='State: Disabled with Icons' last>
          <div style={selectContainerStyle}>
            <div style={selectWidthStyle}>
              <Select
                size='m'
                options={iconOptions}
                defaultValue={1}
                disabled
              />
            </div>
            <div style={selectWidthStyle}>
              <SelectWithColoredIcon
                size='m'
                options={coloredIconOptions}
                defaultValue={1}
                disabled
              />
            </div>
          </div>
        </StorybookGroup>
      </StorybookSection>

      <StorybookSection title='Size: S'>
        <StorybookGroup title='State: Default'>
          <div style={selectContainerStyle}>
            <div style={selectWidthStyle}>
              <Select
                size='s'
                options={commonOptions}
                placeholder='Select option'
              />
            </div>
          </div>
        </StorybookGroup>

        <StorybookGroup title='State: Disabled'>
          <div style={selectContainerStyle}>
            <div style={selectWidthStyle}>
              <Select
                size='s'
                options={commonOptions}
                defaultValue={1}
                disabled
              />
            </div>
          </div>
        </StorybookGroup>

        <StorybookGroup title='State: With Placeholder Icon'>
          <div style={selectContainerStyle}>
            <div style={selectWidthStyle}>
              <Select
                size='s'
                options={iconOptions}
                placeholder='Select option'
                placeholderIcon={{ icon: Icon }}
              />
            </div>
            <div style={selectWidthStyle}>
              <SelectWithColoredIcon
                size='s'
                options={coloredIconOptions}
                placeholder='Select option'
                placeholderIcon={Image}
              />
            </div>
          </div>
        </StorybookGroup>

        <StorybookGroup title='State: Disabled with Icons' last>
          <div style={selectContainerStyle}>
            <div style={selectWidthStyle}>
              <Select
                size='s'
                options={iconOptions}
                defaultValue={1}
                disabled
              />
            </div>
            <div style={selectWidthStyle}>
              <SelectWithColoredIcon
                size='s'
                options={coloredIconOptions}
                defaultValue={1}
                disabled
              />
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
      story: 'Displays all possible Select states for easy review.',
    },
  },
}
