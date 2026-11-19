import type { Meta, StoryObj } from '@storybook/react'

import {
  DarkThemeProvider,
  LightThemeProvider,
} from '@lidofinance/lido-shared-ui'

import { Button } from '../button'
import { Stack } from '../stack'
import { Toast } from '.'

const statuses = ['default', 'success', 'warning', 'error'] as const

const meta: Meta<typeof Toast> = {
  title: 'Feedback & Overlays/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/Interface-Design-System?node-id=6147-17067',
    },
    docs: {
      description: {
        component:
          'Presentational toast. Use `toast()` with `<Toaster />` to show it on screen; see the Toaster docs.',
      },
    },
  },
  argTypes: {
    status: { control: 'select', options: statuses },
    duration: { control: 'number' },
    paused: { control: 'boolean' },
    fluid: { control: 'boolean' },
  },
  args: {
    title: 'Keys submitted',
    children: '3 validator keys were added to the deposit queue.',
    status: 'default',
    role: 'none',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      story: { inline: true },
      description: {
        story:
          'Every status with a close button and an action, in both themes side by side.',
      },
    },
  },
  render: function Render(args) {
    return (
      <Stack direction='row' gap={0} wrap>
        {[LightThemeProvider, DarkThemeProvider].map((Theme, i) => (
          <Theme key={i}>
            <div
              style={{
                padding: 24,
                background: 'var(--lido-app-ui-color-background-page)',
              }}
            >
              <Stack gap={8}>
                {statuses.map((status) => (
                  <Toast
                    key={status}
                    {...args}
                    status={status}
                    title={`Status ${status}`}
                    onClose={() => undefined}
                    actions={<Button size='small'>Try again</Button>}
                  >
                    Operation details go here.
                  </Toast>
                ))}
              </Stack>
            </div>
          </Theme>
        ))}
      </Stack>
    )
  },
}

export const Progress: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      story: { inline: true },
      description: {
        story:
          'The countdown bar shows the remaining `duration`; `paused` freezes it.',
      },
    },
  },
  args: {
    title: 'Auto-dismiss countdown',
    children: undefined,
    duration: 8000,
  },
  render: function Render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {statuses.map((status) => (
          <Toast key={status} {...args} title={args.title} status={status} />
        ))}
        <Toast {...args} title='Paused' paused />
      </div>
    )
  },
}
