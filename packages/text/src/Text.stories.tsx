import { Story, Meta } from '@storybook/react'
import Text from './Text'
import { TextProps, TextColor, TextSize } from './types'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Text,
  title: 'Typography/Text',
  args: {
    children: 'Example Text',
    color: 'text',
    size: 'md',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      options: getOptions(TextColor),
      control: 'inline-radio',
    },
    size: {
      options: getOptions(TextSize),
      control: 'inline-radio',
    },
  },
} as Meta

export const Basic: Story<TextProps> = (props) => <Text {...props} />
