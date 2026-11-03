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

const LayerRow = ({ token, note }: { token: string; note: string }) => {
  const value = useTokenValue(token)
  return (
    <tr>
      <td style={{ ...cell, ...code }}>{token}</td>
      <td style={cell}>{value}</td>
      <td style={cell}>{note}</td>
    </tr>
  )
}

export const ZIndex: Story = {
  render: () => (
    <StoryContainer gap={16}>
      <Note>
        Popover and Modal share the overlay layer on purpose: the later-mounted
        one wins, so nested overlays stack correctly. Keep your own app chrome
        below 1000 so overlays always cover it.
      </Note>
      <Table head={['Token', 'Value', 'Used by']}>
        {Z_INDEX.map((layer) => (
          <LayerRow key={layer.token} {...layer} />
        ))}
      </Table>
    </StoryContainer>
  ),
}

const ShadowSample = ({ token }: { token: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
    <div
      style={{
        width: 120,
        height: 64,
        borderRadius: 'var(--lido-app-ui-border-radius-md)',
        border: '1px solid var(--lido-app-ui-color-border-default)',
        background: 'var(--lido-app-ui-color-background-surface)',
        boxShadow: `var(${token})`,
      }}
    />
    <span style={code}>{token}</span>
  </div>
)

export const Shadows: Story = {
  render: () => (
    <StoryContainer gap={24}>
      {SHADOWS.map((token) => (
        <ShadowSample key={token} token={token} />
      ))}
    </StoryContainer>
  ),
}
