import { Story } from '@storybook/react'
import Link from './Link'
import { LinkProps } from './types'

export default {
  component: Link,
  title: 'Typography/Link',
  args: {
    children: 'Lido',
    href: 'https://lido.fi',
  },
}

export const Basic: Story<LinkProps> = (props) => <Link {...props} />
