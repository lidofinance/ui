import { StoryFn, Meta } from '@storybook/react'
import { Text, TextProps, TextColor, TextSize } from '.'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Text,
  title: 'Typography/Text',
  args: {
    children: 'Example Text',
    color: 'default',
    size: 'md',
    underline: false,
    strikeThrough: false,
    strong: false,
    italic: false,
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

export const Basic: StoryFn<TextProps> = (props) => <Text {...props} />
