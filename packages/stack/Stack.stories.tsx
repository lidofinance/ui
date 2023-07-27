import {  Meta, StoryFn } from "@storybook/react";
import { Block } from '../block'
import  {
  HStackProps,
  StackAlign,
  StackDirection,
  StackJustify,
  StackProps,
  StackSpacing,
  StackWrap,
  VStackProps,
  HStack,
  VStack,
  StackItem,
  Stack
} from ".";


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
} as Meta

export const Basic: StoryFn<StackProps> = (props) => (
  <Stack {...props}>
    <StackItem>
      <Block>First</Block>
    </StackItem>
    <StackItem>
      <Block>
        First
        <br />
        Second
      </Block>
    </StackItem>
    <StackItem>
      <Block>
        First
        <br />
        Second
        <br />
        Third
      </Block>
    </StackItem>
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

export const Horizontal: StoryFn<HStackProps> = (props) => (
  <HStack {...props}>
    <StackItem>
      <Block>First</Block>
    </StackItem>
    <StackItem>
      <Block>
        First
        <br />
        Second
      </Block>
    </StackItem>
    <StackItem>
      <Block>
        First
        <br />
        Second
        <br />
        Third
      </Block>
    </StackItem>
  </HStack>
)

Horizontal.args = { reverse: false }

export const Vertical: StoryFn<VStackProps> = (props) => (
  <VStack {...props}>
    <StackItem>
      <Block>First</Block>
    </StackItem>
    <StackItem>
      <Block>
        First
        <br />
        Second
      </Block>
    </StackItem>
    <StackItem>
      <Block>
        First
        <br />
        Second
        <br />
        Third
      </Block>
    </StackItem>
  </VStack>
)

Vertical.args = { reverse: false }

export const Grid: StoryFn<HStackProps> = (props) => (
  <HStack {...props}>
    <StackItem basis='50%'>
      <Block />
    </StackItem>
    <StackItem basis='50%'>
      <Block />
    </StackItem>
    <StackItem basis='25%'>
      <Block />
    </StackItem>
    <StackItem basis='25%'>
      <Block />
    </StackItem>
    <StackItem basis='25%'>
      <Block />
    </StackItem>
    <StackItem basis='25%'>
      <Block />
    </StackItem>
  </HStack>
)

Grid.args = { reverse: false }
