import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from '../tag'
import { TextLink } from '../text-link'
import { Footer } from './Footer'

const links = (
  <>
    <TextLink href='https://lido.fi/terms-of-use' external variant='secondary'>
      Terms of Use
    </TextLink>
    <TextLink
      href='https://lido.fi/privacy-notice'
      external
      variant='secondary'
    >
      Privacy Notice
    </TextLink>
    <TextLink
      href='https://discord.com/invite/lido'
      external
      variant='secondary'
    >
      Discord
    </TextLink>
  </>
)

const version = (
  <a
    href='https://github.com/lidofinance'
    title='Commit: abc1234'
    style={{ textDecoration: 'none' }}
  >
    <Tag variant='neutral'>v2.4.1</Tag>
  </a>
)

const meta: Meta<typeof Footer> = {
  title: 'Navigation/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Left row, wraps',
      options: ['links', 'none'],
      mapping: { links, none: undefined },
      control: { type: 'select' },
    },
    aside: {
      options: ['version', 'none'],
      mapping: { version, none: undefined },
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'App footer shell: page background, top border, page gutters. Content comes from the consumer: `children` is a wrapping row on the left, `aside` sits right.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = { args: { children: 'links', aside: 'version' } }

export const WithoutAside: Story = {
  args: { children: 'links', aside: 'none' },
}
