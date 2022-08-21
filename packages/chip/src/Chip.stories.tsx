import { Story, Meta } from '@storybook/react'
import { Question, ArrowTop } from '@lidofinance/icons'
import { ChipProps, ChipVariant } from './types'
import Chip from './Chip'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Chip,
  title: 'Controls/Chip',
  args: {
    interactive: false,
    children: 'Lido',
    variant: 'positive',
  },
  argTypes: {
    variant: {
      options: getOptions(ChipVariant),
      control: 'inline-radio',
    },
  },
} as Meta

export const Basic: Story<ChipProps> = (props, options) => (
  <Chip
    {...props}
    onClick={options.args.interactive ? () => void 0 : undefined}
  />
)

export const WithDecorators: Story<ChipProps> = (props, options) => (
  <Chip
    leftDecorator={<ArrowTop />}
    rightDecorator={<Question />}
    {...props}
    onClick={options.args.interactive ? () => void 0 : undefined}
  />
)
