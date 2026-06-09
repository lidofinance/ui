import { Meta, StoryFn } from '@storybook/react'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { DynamicLink, DynamicLinkProps } from '.'

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

const meta: Meta<typeof DynamicLink> = {
  title: 'Links/DynamicLink',
  component: DynamicLink,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story:
          'DynamicLink renders a native <a> by default. For internal routes, it can optionally render a Next-compatible link component via useNextLink + nextLinkComponent.',
      },
    },
  },
  args: {
    children: 'Example dynamic link',
    href: '/docs',
    isExternal: false,
    useNextLink: false,
    prefetch: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    isExternal: { control: { type: 'boolean' } },
    useNextLink: { control: { type: 'boolean' } },
    prefetch: { control: { type: 'boolean' } },
    nextLinkComponent: { table: { disable: true } },
    href: { control: { type: 'text' } },
    children: { control: { type: 'text' } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DynamicLink>

export default meta

export const AllStates: StoryFn<DynamicLinkProps> = (props) => (
  <>
    <p>
      <DynamicLink {...props} />
    </p>
    <p>
      <DynamicLink {...props} href='https://lido.fi' isExternal>
        External link
      </DynamicLink>
    </p>
    <p>
      <DynamicLink
        {...props}
        href='/next-link'
        useNextLink
        nextLinkComponent={MockNextLink}
      >
        Internal link via optional Next component
      </DynamicLink>
    </p>
  </>
)
