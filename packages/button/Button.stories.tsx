import { StoryFn, Meta } from '@storybook/react'
import { Whitepaper } from '../icons'
import {
  Button,
  ButtonIcon,
  ButtonProps,
  ButtonIconProps,
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '.'

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
  },
} as Meta

export const Basic: StoryFn<ButtonProps> = (props) => <Button {...props} />

export const WithIcon: StoryFn<Omit<ButtonIconProps, 'icon'>> = (props) => (
  <ButtonIcon icon={<Whitepaper />} {...props} />
)

export const Icon: StoryFn<Omit<ButtonIconProps, 'icon'>> = (props) => (
  <ButtonIcon icon={<Whitepaper />} {...props} />
)

Icon.args = {
  children: undefined,
}

Icon.argTypes = {
  children: { table: { disable: true } },
}
