import { StoryFn, Meta } from '@storybook/react'
import { Link, LinkProps } from '.'

export default {
  component: Link,
  title: 'Typography/Link',
  args: {
    children: 'Lido',
    href: 'https://lido.fi',
    fadeVisited: false,
  },
  argTypes: {
    fadeVisited: {
      description: 'Fade visited links',
    },
  },
} satisfies Meta

export const Basic: StoryFn<LinkProps> = (props) => <Link {...props} />
