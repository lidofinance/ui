import { Story } from '@storybook/react'
import { BlockProps, BlockColor, BlockVariant } from './types'
import Block from './Block'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Block,
  title: 'Layout/Block',
  args: {
    children: 'Example content',
    variant: 'flat',
    color: 'foreground',
  },
  argTypes: {
    variant: {
      options: getOptions(BlockVariant),
      control: 'inline-radio',
    },
    color: {
      options: getOptions(BlockColor),
      control: 'inline-radio',
    },
  },
}

export const Basic: Story<BlockProps> = (props) => <Block {...props} />
