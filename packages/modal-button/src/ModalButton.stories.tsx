import { Story, Meta } from '@storybook/react'
import { Eth } from '@lidofinance/icons'
import { ModalButtonProps, ModalButtonSize } from './types'
import ModalButton from './ModalButton'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: ModalButton,
  title: 'Dialogs/ModalButton',
  args: {
    size: 'md',
    disabled: false,
    fullwidth: false,
    children: 'Ethereum',
  },
  argTypes: {
    size: {
      options: getOptions(ModalButtonSize),
      control: 'inline-radio',
    },
  },
} as Meta

export const Basic: Story<ModalButtonProps> = (props) => (
  <ModalButton icon={<Eth />} {...props} />
)
