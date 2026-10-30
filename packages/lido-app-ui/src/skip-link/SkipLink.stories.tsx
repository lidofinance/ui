import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'

import { Typography } from '../typography'
import { SkipLink } from '.'

const meta: Meta<typeof SkipLink> = {
  title: 'Navigation/SkipLink',
  component: SkipLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'First focusable element of the page; appears on Tab and moves focus to `href` (default `#main-content`). Give your `<main>` that id.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <>
      <SkipLink {...args} />
      <nav aria-label='Demo' style={{ padding: 24 }}>
        <Typography variant='body'>Navigation…</Typography>
      </nav>
      <main id='main-content' style={{ padding: 24 }}>
        <Typography variant='body'>
          Press Tab, then Enter: focus lands here.
        </Typography>
      </main>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.tab()
    const link = canvas.getByRole('link', { name: 'Skip to content' })
    await expect(link).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(canvas.getByRole('main')).toHaveFocus()
  },
  parameters: {
    docs: {
      description: {
        story:
          'The play function tabs to the link and activates it; focus moves to `<main>`.',
      },
    },
  },
}
