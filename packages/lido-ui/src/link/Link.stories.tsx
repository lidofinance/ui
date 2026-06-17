import { StoryFn, Meta } from '@storybook/react'
import { Link, LinkProps } from './index.js'

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
} as Meta

export const Basic: StoryFn<LinkProps> = (props) => <Link {...props} />
