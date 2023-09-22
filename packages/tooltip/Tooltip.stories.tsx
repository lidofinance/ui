import { StoryFn, Meta } from '@storybook/react'
import { Question } from '../icons'
import { PopoverOffset, PopoverPlacement } from '../popover'
import { Tooltip, TooltipProps } from '.'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Tooltip,
  title: 'Dialogs/Tooltip',
  parameters: {
    layout: 'centered',
  },
  args: {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptates pariatur culpa consectetur velit iste rem, aspernatur voluptatem aperiam itaque obcaecati vero non quis id iure vitae, quae quibusdam quidem.',
    offset: 'xs',
    placement: 'bottom',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    offset: {
      options: getOptions(PopoverOffset),
      control: 'inline-radio',
    },
    placement: {
      options: getOptions(PopoverPlacement),
      control: 'radio',
    },
  },
} as Meta

export const Basic: StoryFn<TooltipProps> = (props) => (
  <Tooltip {...props}>
    <span>Hover me</span>
  </Tooltip>
)

export const Icon: StoryFn<TooltipProps> = (props) => (
  <Tooltip {...props}>
    <Question />
  </Tooltip>
)
