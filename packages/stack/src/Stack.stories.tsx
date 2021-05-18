import { Story } from '@storybook/react'
import { Block } from '@lidofinance/block'
import {
  StackAlign,
  StackDirection,
  StackJustify,
  StackWrap,
  StackProps,
  HStackProps,
  VStackProps,
  StackSpacing,
} from './types'
import Stack from './Stack'
import HStack from './HStack'
import VStack from './VStack'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Stack,
  title: 'Layout/Stack',
  args: {
    align: 'flex-start',
    justify: 'flex-start',
    wrap: 'wrap',
    spacing: 'sm',
  },
  argTypes: {
    align: {
      options: getOptions(StackAlign),
      control: 'select',
    },
    justify: {
      options: getOptions(StackJustify),
      control: 'select',
    },
    wrap: {
      options: getOptions(StackWrap),
      control: 'inline-radio',
    },
    spacing: {
      options: [undefined, ...getOptions(StackSpacing)],
      control: 'inline-radio',
    },
  },
}

export const Basic: Story<StackProps> = (props) => (
  <Stack {...props}>
    <Block>First</Block>
    <Block>
      First
      <br />
      Second
    </Block>
    <Block>
      First
      <br />
      Second
      <br />
      Third
    </Block>
  </Stack>
)

Basic.args = {
  direction: 'row',
}

Basic.argTypes = {
  direction: {
    options: getOptions(StackDirection),
    control: 'inline-radio',
  },
}

export const Horizontal: Story<HStackProps> = (props) => (
  <HStack {...props}>
    <Block>First</Block>
    <Block>
      First
      <br />
      Second
    </Block>
    <Block>
      First
      <br />
      Second
      <br />
      Third
    </Block>
  </HStack>
)

Horizontal.args = { reverse: false }

export const Vertical: Story<VStackProps> = (props) => (
  <VStack {...props}>
    <Block>First</Block>
    <Block>
      First
      <br />
      Second
    </Block>
    <Block>
      First
      <br />
      Second
      <br />
      Third
    </Block>
  </VStack>
)

Vertical.args = { reverse: false }
