import { StoryFn, Meta } from '@storybook/react'
import { Link, LinkProps } from '.'

const meta: Meta<typeof Link> = {
  title: 'Links/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story:
          'The Link component uses a DynamicLink component that automatically detects whether the link is internal or external and accordingly uses Next Link or a standard <a> tag. The external link will be opened in a separate tab.',
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
