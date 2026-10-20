import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { ErrorPage } from './ErrorPage'

const goBack = <Button>Go back</Button>
const tryAgain = <Button>Try again</Button>
const toDashboard = <Button>Go to dashboard</Button>

const meta: Meta<typeof ErrorPage> = {
  title: 'Feedback & Overlays/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
  argTypes: {
    code: {
      description:
        'Error code; `404` / `500` fill default title and description',
      control: { type: 'text' },
    },
    title: { description: 'Overrides the code preset title' },
    description: { description: 'Overrides the code preset description' },
    action: {
      description: 'Slot below the text, no built-in behaviour',
      options: ['goBack', 'tryAgain', 'toDashboard', 'none'],
      mapping: {
        goBack,
        tryAgain,
        toDashboard,
        none: undefined,
      },
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Centered content block for 404 / 500 pages. `code` (`404` / `500`) fills default title and description; both can be overridden. `action` is a free slot.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const NotFound: Story = {
  args: {
    code: '404',
    action: 'goBack',
  },
}

export const ServerError: Story = {
  args: {
    code: '500',
    action: 'tryAgain',
  },
}

export const Custom: Story = {
  args: {
    code: '403',
    title: 'Access denied',
    description: 'You don’t have permission to view this page.',
    action: 'toDashboard',
  },
}
