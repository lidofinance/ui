import { Story, Meta } from '@storybook/react'
import { Whitepaper } from '@lidofinance/icons'
import {
  ButtonProps,
  ButtonIconProps,
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from './types'
import Button from './Button'
import ButtonIcon from './ButtonIcon'

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
    loading: false,
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
    href: {
      options: ['', '#'],
      control: {
        type: 'inline-radio',
        labels: { '#': 'Yes', '': 'No' },
      },
    },
  },
} as Meta

export const Basic: Story<ButtonProps> = (props) => <Button {...props} />

export const WithIcon: Story<ButtonIconProps> = (props) => (
  <ButtonIcon icon={<Whitepaper />} {...props} />
)

export const Icon: Story<ButtonIconProps> = (props) => (
  <ButtonIcon icon={<Whitepaper />} {...props} />
)

Icon.args = {
  children: undefined,
}

Icon.argTypes = {
  children: { table: { disable: true } },
}
