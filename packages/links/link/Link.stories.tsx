import { StoryFn, Meta } from '@storybook/react'
import { Link, LinkProps } from '.'

const meta: Meta<typeof Link> = {
  title: 'Links/Link',
  component: Link,
  parameters: {
    layout: 'centered',
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
  const colors: LinkProps['color'][] = ['default', 'inherit']

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {colors.map((color) => (
        <Link
          key={`${color}`}
          color={color}
          href={'/link'}
          onClick={() => {
            console.log(1)
          }}
        >
          {color}
        </Link>
      ))}
    </div>
  )
}

AllStates.parameters = {
  docs: {
    description: {
      story: 'Displays all possible Link states for easy review',
    },
  },
}
