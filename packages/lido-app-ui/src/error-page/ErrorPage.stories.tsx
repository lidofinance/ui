import type { Meta, StoryObj } from '@storybook/react'

import { Button, LinkButton } from '../button'
import { ErrorPage } from './ErrorPage'

const goBack = <Button>Go back</Button>
const tryAgain = <Button>Try again</Button>
const toDashboard = (
  <LinkButton href='/' onClick={(event) => event.preventDefault()}>
    Go to dashboard
  </LinkButton>
)

const both = (
  <>
    {goBack}
    {toDashboard}
  </>
)

const meta: Meta<typeof ErrorPage> = {
  title: 'Feedback & Overlays/ErrorPage',
  component: ErrorPage,
  argTypes: {
    code: {
      control: { type: 'text' },
    },
    action: {
      options: ['goBack', 'tryAgain', 'toDashboard', 'both', 'none'],
      mapping: {
        both,
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
    storyBackground: 'page',
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

export const Mobile: Story = {
  args: {
    code: '404',
    action: 'goBack',
  },
  globals: { viewport: { value: 'px375' } },
}

export const MultipleActions: Story = {
  args: {
    code: '404',
    action: 'both',
  },
  globals: { viewport: { value: 'px375' } },
}

export const Custom: Story = {
  args: {
    code: '403',
    title: 'Access denied',
    description: 'You don’t have permission to view this page.',
    action: 'toDashboard',
  },
}
