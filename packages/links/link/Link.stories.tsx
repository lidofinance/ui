import { StoryFn, Meta } from '@storybook/react'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link, LinkProps } from '.'

const MockNextLink = ({
  href,
  children,
  ...props
}: {
  href: string
  children: ReactNode
}) => {
  return (
    <a href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  )
}

const meta: Meta<typeof Link> = {
  title: 'Links/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story:
          'The Link component renders a native <a> by default and can optionally render a Next-compatible link component via useNextLink + nextLinkComponent.',
      },
    },
  },
  args: {
    children: 'Example link',
    href: '/link',
    color: 'default',
    legacyBehavior: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    color: {
      options: ['default', 'inherit'],
      control: { type: 'radio' },
    },
    legacyBehavior: {
      control: { type: 'boolean' },
    },
    href: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>

export default meta

export const Basic: StoryFn<LinkProps> = (props) => <Link {...props} />

export const AllStates: StoryFn<LinkProps> = () => {
  return (
    <div style={{ fontSize: '16px', lineHeight: '1.5', padding: '16px' }}>
      <p>
        This is an example paragraph that includes a{' '}
        <Link
          color='default'
          href='/link'
          onClick={() => console.log('Default link clicked')}
        >
          default link
        </Link>
        , styled with the standard appearance.
      </p>
      <p>
        Here is another paragraph featuring a{' '}
        <Link
          color='inherit'
          href='/link'
          onClick={() => console.log('Inherit link clicked')}
        >
          link with inherited text color
        </Link>
        , which adopts the surrounding text color.
      </p>
      <br />
      <Link useNextLink nextLinkComponent={MockNextLink} href='/next-link'>
        And this link uses NextLinkComponent
      </Link>
    </div>
  )
}

AllStates.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Displays all possible Link states for easy review',
    },
  },
}
