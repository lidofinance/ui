import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../card'
import { Footer } from '../footer'
import { SkipLink } from '../skip-link'
import { TextLink } from '../text-link'
import { Typography } from '../typography'
import { Layout, Main, PageContent } from '.'

const meta: Meta<typeof Main> = {
  title: 'Layout/Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    docs: {
      story: { inline: false, height: '480px' },
      description: {
        component:
          'Page `<main>` landmark, `id="main-content"` by default so `SkipLink` can target it. Grows (`flex: 1`) inside `Layout`, keeping `Footer` at the bottom of short pages. Focus moves to it from the skip link without a focus ring.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const FooterLinks = () => (
  <TextLink href='https://lido.fi/terms-of-use' external variant='secondary'>
    Terms of Use
  </TextLink>
)

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Press Tab to reveal the skip link, then Enter: focus lands on `Main`. Content is short, so `Footer` stays at the bottom.',
      },
    },
  },
  render: () => (
    <Layout>
      <SkipLink />
      <nav aria-label='Demo' style={{ padding: 24 }}>
        <Typography variant='body'>Header placeholder</Typography>
      </nav>
      <Main>
        <PageContent>
          <Card>Short page content</Card>
        </PageContent>
      </Main>
      <Footer>
        <FooterLinks />
      </Footer>
    </Layout>
  ),
}

export const CustomId: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Override `id` and point `SkipLink` at it with a matching `href`.',
      },
    },
  },
  render: () => (
    <Layout>
      <SkipLink href='#content' />
      <Main id='content'>
        <PageContent>
          <Card>Main with id=&quot;content&quot;</Card>
        </PageContent>
      </Main>
      <Footer>
        <FooterLinks />
      </Footer>
    </Layout>
  ),
}
