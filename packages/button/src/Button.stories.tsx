import { Story } from '@storybook/react'
import { ButtonColor, ButtonProps, ButtonSize, ButtonVariant } from './types'
import Button from './Button'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Button,
  title: 'Controls/Button',
  args: {
    size: 'md',
    variant: 'filled',
    color: 'primary',
    disabled: false,
    fullwidth: false,
    children: 'Example',
  },
  argTypes: {
    size: {
      options: getOptions(ButtonSize),
      control: 'inline-radio',
    },
    variant: {
      options: getOptions(ButtonVariant),
      control: 'inline-radio',
    },
    color: {
      options: getOptions(ButtonColor),
      control: 'inline-radio',
    },
  },
}

export const Basic: Story<ButtonProps> = (props) => <Button {...props} />
