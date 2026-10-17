import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { ErrorPage } from './ErrorPage'

const meta: Meta<typeof ErrorPage> = {
  title: 'Feedback & Overlays/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Preset for code, title and description',
      options: ['404', '500'],
      control: { type: 'inline-radio' },
    },
    code: { description: 'Overrides the preset code' },
    title: { description: 'Overrides the preset title' },
    description: { description: 'Overrides the preset description' },
    action: { description: 'Slot below the text, no built-in behaviour' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Centered content block for 404 / 500 pages. `variant` fills code, title and description; any of them can be overridden. `action` is a free slot.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const NotFound: Story = {
  args: {
    variant: '404',
    action: <Button>Go back</Button>,
  },
}

export const ServerError: Story = {
  args: {
    variant: '500',
    action: <Button>Try again</Button>,
  },
}

export const Custom: Story = {
  args: {
    code: '403',
    title: 'Access denied',
    description: 'You don’t have permission to view this page.',
    action: <Button>Go to dashboard</Button>,
  },
}
