import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { RADII, RADIUS_SCALE } from './layoutTokens'
import { cell, code, Note, Table, useTokenValue } from './storyFixtures'

const meta: Meta = {
  title: 'Foundations/Radius',
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Border radius tokens: a scale mirroring the Figma Radius variables, plus semantic tokens that map to a scale step.',
      },
    },
  },
}

export default meta
type Story = StoryObj

// Computed values have var() already substituted, so match against resolved scale values.
const scaleStep = (value: string) => {
  const root = getComputedStyle(document.documentElement)
  const step = RADIUS_SCALE.find(
    (token) => root.getPropertyValue(token).trim() === value,
  )
  return step
    ? `${step.replace('--lido-app-ui-border-radius-', '')} (${value})`
    : `${value}, off-scale`
}

const RadiusRow = ({ token, step }: { token: string; step?: boolean }) => {
  const value = useTokenValue(token)
  return (
    <tr>
      <td style={cell}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: `var(${token})`,
            border: '1px solid var(--lido-app-ui-color-border-default)',
            background: 'var(--lido-app-ui-color-background-surface)',
          }}
        />
      </td>
      <td style={{ ...cell, ...code }}>{token}</td>
      <td style={cell}>{step && value ? scaleStep(value) : value}</td>
    </tr>
  )
}

export const Radii: Story = {
  render: () => (
    <StoryContainer gap={24}>
      <Note>
        Scale tokens mirror the Figma Radius variables. Semantic tokens map to a
        scale step and can be overridden per product.
      </Note>
      <Table head={['Sample', 'Scale token', 'Value']}>
        {RADIUS_SCALE.map((token) => (
          <RadiusRow key={token} token={token} />
        ))}
      </Table>
      <Table head={['Sample', 'Semantic token', 'Scale step']}>
        {RADII.map((token) => (
          <RadiusRow key={token} token={token} step />
        ))}
      </Table>
    </StoryContainer>
  ),
}
