import { Story, Meta } from '@storybook/react'
import { Chip, ChipVariant } from '.'

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
    onClick={options.args.interactive ? () => void 0 : undefined}
  />
)
