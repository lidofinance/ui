import { StoryFn, Meta } from '@storybook/react'
import { Badge, BadgeVariant } from './index.js'
import { Whitepaper } from '../icons'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Badge,
  title: 'Controls/Badge',
  args: {
    interactive: false,
    children: 'Lido',
    variant: 'gray',
  },
  argTypes: {
    variant: {
      options: getOptions(BadgeVariant),
      control: 'inline-radio',
    },
  },
} as Meta

export const Basic: StoryFn = (props, options) => {
  const { interactive, ...rest } = props as any
  return (
    <Badge
      {...rest}
      onClick={options.args.interactive ? () => void 0 : undefined}
    />
  )
}

export const WithIcon: StoryFn = (props, options) => {
  const { interactive, ...rest } = props as any
  return (
    <Badge
      {...rest}
      icon={<Whitepaper width={16} height={16} />}
      onClick={options.args.interactive ? () => void 0 : undefined}
    />
  )
}
