import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { SHADOWS, Z_INDEX } from './layoutTokens'
import { cell, code, Note, Table, useTokenValue } from './storyFixtures'

const meta: Meta = {
  title: 'Foundations/Elevation',
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Shadows and the z-index layers used by overlays and page chrome.',
      },
    },
  },
}

export default meta
type Story = StoryObj

const LayerRow = ({ token, note }: { token: string; note?: string }) => {
  const value = useTokenValue(token)
  return (
    <tr>
      <td style={{ ...cell, ...code }}>{token}</td>
      <td style={cell}>{value}</td>
      {note !== undefined && <td style={cell}>{note}</td>}
    </tr>
  )
}

export const ZIndex: Story = {
  render: () => (
    <StoryContainer gap={16}>
      <Note>
        Drawer, Popover and Modal share the overlay layer on purpose: the
        later-mounted one wins, so nested overlays stack correctly. Keep your
        own app chrome below 1000 so overlays always cover it.
      </Note>
      <Table head={['Token', 'Value', 'Used by']}>
        {Z_INDEX.map((layer) => (
          <LayerRow key={layer.token} {...layer} />
        ))}
      </Table>
    </StoryContainer>
  ),
}

const ThemePanel = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div
    data-lido-theme={theme}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      width: 320,
      height: 180,
      borderRadius: 'var(--lido-app-ui-border-radius-lg)',
      border: '1px solid var(--lido-app-ui-color-border-default)',
      background: 'var(--lido-app-ui-color-background-surface)',
      color: 'var(--lido-app-ui-color-text-default)',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        width: 92,
        height: 92,
        borderRadius: 'var(--lido-app-ui-border-radius-md)',
        border: '1px solid var(--lido-app-ui-color-border-default)',
        background: 'var(--lido-app-ui-color-background-default)',
        boxShadow: 'var(--lido-app-ui-shadow-default)',
        fontSize: 14,
      }}
    >
      {theme === 'light' ? 'Light' : 'Dark'}
    </div>
  </div>
)

export const Shadows: Story = {
  render: () => (
    <StoryContainer gap={24}>
      <Note>
        Shadows use two layers with consistent geometry and theme-specific
        colors: <span style={code}>--lido-app-ui-color-shadow-primary</span> 0 0
        4px and <span style={code}>--lido-app-ui-color-shadow-secondary</span> 0
        0 32px. They are combined in{' '}
        <span style={code}>--lido-app-ui-shadow-default</span>, used by Popover,
        Tooltip, Modal, SkipLink and TokenSelector.
      </Note>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        <ThemePanel theme='light' />
        <ThemePanel theme='dark' />
      </div>
      <Table head={['Token', 'Value']}>
        {SHADOWS.map((token) => (
          <LayerRow key={token} token={token} />
        ))}
      </Table>
    </StoryContainer>
  ),
}
