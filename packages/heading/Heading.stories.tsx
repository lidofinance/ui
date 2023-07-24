import { StoryFn, Meta } from '@storybook/react'
import {
  Heading,
  HeadingProps,
  H1,
  H1Props,
  H2,
  H2Props,
  H3,
  H3Props,
  HeadingColor,
  HeadingSize,
} from '.'

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

export const HeadingH1: StoryFn<H1Props> = (props) => <H1 {...props} />
export const HeadingH2: StoryFn<H2Props> = (props) => <H2 {...props} />
export const HeadingH3: StoryFn<H3Props> = (props) => <H3 {...props} />
