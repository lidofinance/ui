import { Story, Meta } from '@storybook/react'
import { ChipVariant } from './types'
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

export const Basic: Story = (props, options) => (
  <Chip
    {...props}
    // @ts-expect-error fix later
    onClick={options.args.interactive ? () => void 0 : undefined}
  />
)
