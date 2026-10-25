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
  <Tag
    variant='neutral'
    href='https://github.com/lidofinance'
    title='Commit: abc1234'
  >
    v2.4.1
  </Tag>
)

const meta: Meta<typeof Footer> = {
  title: 'Navigation/Footer',
  component: Footer,
  argTypes: {
    children: {
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
    storyBackground: 'page',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = { args: { children: 'links', aside: 'version' } }

export const WithoutAside: Story = {
  args: { children: 'links', aside: 'none' },
}

export const Mobile: Story = {
  args: { children: 'links', aside: 'version' },
  globals: { viewport: { value: 'px375' } },
}
