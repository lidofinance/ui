import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../card'
import { Footer } from '../footer'
import { TextLink } from '../text-link'
import { Layout, PageContent } from '.'

const meta: Meta<typeof Layout> = {
  title: 'Layout/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    docs: {
      story: { inline: false, height: '480px' },
      description: {
        component:
          'Page root: full-viewport (`min-height: 100dvh`) flex column on `--lido-app-ui-color-background-page`. Stacks banners / header / `PageContent` / `Footer`; a direct-child `PageContent` grows so `Footer` stays at the bottom of short pages.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Layout>
      <PageContent>
        <Card>Short page content</Card>
      </PageContent>
      <Footer>
        <TextLink
          href='https://lido.fi/terms-of-use'
          external
          variant='secondary'
        >
          Terms of Use
        </TextLink>
        <TextLink
          href='https://lido.fi/privacy-notice'
          external
          variant='secondary'
        >
          Privacy Notice
        </TextLink>
      </Footer>
    </Layout>
  ),
}
