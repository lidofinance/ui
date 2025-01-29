import { StoryFn, Meta } from '@storybook/react'
import { DynamicLink, DynamicLinkProps } from '.'

export default {
  component: DynamicLink,
  title: 'Links/DynamicLink',
  args: {
    children: 'Example link',
    href: '/link',
    isExternal: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta

export const Basic: StoryFn<DynamicLinkProps> = (props) => (
  <DynamicLink {...props} />
)
