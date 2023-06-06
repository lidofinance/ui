import { Story, Meta } from '@storybook/react'
import { Block, BlockProps, BlockColor, BlockVariant } from '.'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Block,
  title: 'Layout/Block',
  args: {
    children: 'Example content',
    variant: 'flat',
    color: 'foreground',
    paddingLess: false,
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
} as Meta

export const Basic: Story<BlockProps> = (props) => <Block {...props} />
