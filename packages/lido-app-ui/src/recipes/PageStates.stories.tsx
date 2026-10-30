import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Disclaimer } from '../disclaimer'
import { ErrorPage } from '../error-page'
import { Skeleton } from '../skeleton'
import { SidebarShell, SimpleCard, storyParams } from './fixtures'

const meta: Meta = {
  title: 'Recipes/Page States',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    storyBackground: 'page',
    docs: {
      story: { inline: false, iframeHeight: 720 },
      source: { type: 'code' },
      description: {
        component:
          'Loading, error and disclaimer content rendered inside the sidebar shell.',
      },
    },
  },
  globals: { viewport: { value: 'px1440', isRotated: false } },
}

export default meta
type Story = StoryObj<typeof meta>

export const Loading: Story = {
  parameters: storyParams(
    'Page content replaced by Skeleton placeholders while loading.',
  ),
  render: () => (
    <SidebarShell>
      <Skeleton variant='text' style={{ width: 240, height: 32 }} />
      <Skeleton style={{ height: 160 }} />
      <Skeleton variant='text' lines={3} />
    </SidebarShell>
  ),
}

export const NotFound: Story = {
  parameters: storyParams(
    '`ErrorPage` with the 404 preset rendered inside the shell.',
  ),
  render: () => (
    <SidebarShell breadcrumbs={[{ label: 'Not found' }]}>
      <ErrorPage
        code='404'
        action={<Button size='small'>Back to dashboard</Button>}
      />
    </SidebarShell>
  ),
}

export const WithDisclaimer: Story = {
  parameters: storyParams(
    '`Disclaimer` is the last child of `PageContent` and sits right above the Footer on short pages.',
  ),
  render: () => (
    <SidebarShell>
      <SimpleCard title='Page title' />
      <Disclaimer />
    </SidebarShell>
  ),
}
