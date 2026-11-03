import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { spaces } from '../utils'
import { code, Note } from './storyFixtures'

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Spacing is a px scale (`Space`) used by `gap` props, each step backed by a `--lido-app-ui-space-N` token.',
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Spacing: Story = {
  render: () => (
    <StoryContainer gap={8}>
      <Note>
        The scale behind <code>gap</code>, <code>rowGap</code> and{' '}
        <code>columnGap</code> on Stack and Grid. Every step above 0 is also
        available as <code>--lido-app-ui-space-N</code>.
      </Note>
      {spaces.map((space) => (
        <div
          key={space}
          style={{ display: 'flex', alignItems: 'center', gap: 16 }}
        >
          <span
            style={{
              ...code,
              width: 240,
              color: 'var(--lido-app-ui-color-text-default)',
            }}
          >
            {space === 0 ? '0' : `--lido-app-ui-space-${space}`}
          </span>
          <span
            style={{
              width: 48,
              fontSize: 14,
              color: 'var(--lido-app-ui-color-text-default)',
            }}
          >
            {space}px
          </span>
          <span
            style={{
              height: 16,
              width: space,
              borderRadius: 2,
              background: 'var(--lido-app-ui-color-border-active)',
            }}
          />
        </div>
      ))}
    </StoryContainer>
  ),
}
