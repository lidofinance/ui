import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { Button } from '../button'
import { Card } from '../card'
import { Disclaimer } from '../disclaimer'
import { SectionTitle } from '../section-title'
import { Layout, PageContent } from '.'

const meta: Meta<typeof PageContent> = {
  title: 'Layout/PageContent',
  component: PageContent,
  tags: ['autodocs'],
  args: { variant: 'default' },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'narrow'],
      description: 'default caps content at 1200px, narrow at 600px',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Page body wrapper: side gutters 52 / 32 (below md) / 12 (below sm), centered max width, children stacked with a 52px gap. Gutters come from `--lido-app-ui-page-gutter`. PageContent grows (`flex: 1 0 auto`) inside a flex column, so a trailing `Disclaimer` sticks to the bottom of short pages.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <PageContent {...args}>
      <Card>Block one</Card>
      <StoryContainer gap={20}>
        <SectionTitle
          title='Tools'
          action={<Button size='small'>All</Button>}
        />
        <Card>Section content</Card>
      </StoryContainer>
    </PageContent>
  ),
}

export const Narrow: Story = {
  args: { variant: 'narrow' },
  render: Basic.render,
}

export const WithDisclaimer: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`Disclaimer` as the last child of `PageContent` sits at the bottom of a short page when `PageContent` is a direct child of `Layout`.',
      },
    },
  },
  render: (args) => (
    <Layout>
      <PageContent {...args}>
        <Card>Short page content</Card>
        <Disclaimer>
          Staking involves risks, including smart contract and slashing risks.
          This is not financial advice.
        </Disclaimer>
      </PageContent>
    </Layout>
  ),
}
