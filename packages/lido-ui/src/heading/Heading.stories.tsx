import { StoryFn, Meta } from '@storybook/react'
import {
  Heading,
  H1,
  H2,
  H3,
  HeadingProps,
  HeadingColor,
  HeadingSize,
  HProps,
} from './index.js'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Heading,
  title: 'Typography/Heading',
  args: {
    children: 'Example Heading',
    color: 'text',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      options: getOptions(HeadingColor),
      control: 'inline-radio',
    },
  },
} as Meta

export const Basic: StoryFn<HeadingProps> = (props) => <Heading {...props} />

Basic.args = {
  size: 'md',
}

Basic.argTypes = {
  size: {
    options: getOptions(HeadingSize),
    control: 'inline-radio',
  },
}

export const HeadingH1: StoryFn<HProps<'h1'>> = (props) => <H1 {...props} />
export const HeadingH2: StoryFn<HProps<'h2'>> = (props) => <H2 {...props} />
export const HeadingH3: StoryFn<HProps<'h3'>> = (props) => <H3 {...props} />
