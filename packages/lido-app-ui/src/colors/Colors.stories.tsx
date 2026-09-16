import type { Meta, StoryObj } from '@storybook/react'
import {
  DarkThemeProvider,
  LightThemeProvider,
} from '@lidofinance/lido-shared-ui'

import { StorySection } from '../../.storybook/components'
import {
  BACKGROUND_COLOR,
  BACKGROUND_ELEMENTS,
  BORDER,
  ICONS,
  TEXT,
} from './colorTokens'
import type { ColorToken } from './colorTokens'

const meta: Meta = {
  title: 'Foundations/Colors',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Semantic colour tokens (`--lido-app-ui-color-*`) — contextual aliases over the primitive palette in `styles/tokens.css`. Each one maps to a UI role (text, icon, border, background) and resolves to a different primitive depending on `[data-lido-theme]`, shown here side by side for both modes.',
      },
    },
  },
}

export default meta
type Story = StoryObj

const CardChrome = ({
  children,
  style,
}: {
  children?: React.ReactNode
  style?: React.CSSProperties
}) => (
  <div
    style={{
      width: 96,
      height: 64,
      borderRadius: 8,
      border: '1px solid var(--lido-app-ui-color-border-default)',
      background: 'var(--lido-app-ui-color-background-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      boxShadow: '1px 1px 10px 1px #cbcbcb',
      ...style,
    }}
  >
    {children}
  </div>
)

const TextPreview = ({ cssVar }: { cssVar: string }) => (
  <CardChrome>
    <span style={{ fontSize: 20, fontWeight: 600, color: `var(${cssVar})` }}>
      Aa
    </span>
  </CardChrome>
)

const IconPreview = ({ cssVar }: { cssVar: string }) => (
  <CardChrome>
    <svg width={24} height={24} viewBox='0 0 24 24' fill='none'>
      <circle cx='12' cy='12' r='9' fill={`var(${cssVar})`} />
    </svg>
  </CardChrome>
)

const BorderPreview = ({ cssVar }: { cssVar: string }) => (
  <CardChrome
    style={{
      background: 'transparent',
      border: `2px solid var(${cssVar})`,
    }}
  />
)

const BackgroundPreview = ({ cssVar }: { cssVar: string }) => (
  <CardChrome
    style={{
      background: `var(${cssVar})`,
    }}
  />
)

const TokenRow = ({
  token,
  Preview,
}: {
  token: ColorToken
  Preview: (props: { cssVar: string }) => JSX.Element
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      background: 'var(--lido-app-ui-color-background-default)',
      padding: '8px 0',
      borderBottom: '1px solid var(--lido-app-ui-color-border-default)',
    }}
  >
    <code
      style={{
        width: 340,
        fontSize: 13,
        color: 'var(--lido-app-ui-color-text-secondary)',
      }}
    >
      {token.cssVar}
    </code>
    <LightThemeProvider>
      <Preview cssVar={token.cssVar} />
    </LightThemeProvider>
    <DarkThemeProvider>
      <Preview cssVar={token.cssVar} />
    </DarkThemeProvider>
  </div>
)

const TokenTable = ({
  tokens,
  Preview,
}: {
  tokens: ColorToken[]
  Preview: (props: { cssVar: string }) => JSX.Element
}) => (
  <div style={{ fontFamily: 'var(--lido-app-ui-font-family)' }}>
    <div
      style={{
        display: 'flex',
        gap: 16,
        padding: '0 0 8px',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: 'var(--lido-app-ui-color-text-tertiary)',
      }}
    >
      <span style={{ width: 340 }}>Token</span>
      <span style={{ width: 96 }}>Light</span>
      <span style={{ width: 96 }}>Dark</span>
    </div>
    {tokens.map((token) => (
      <TokenRow key={token.cssVar} token={token} Preview={Preview} />
    ))}
  </div>
)

export const Text: Story = {
  render: () => (
    <StorySection row={false}>
      <TokenTable tokens={TEXT} Preview={TextPreview} />
    </StorySection>
  ),
}

export const Icons: Story = {
  render: () => (
    <StorySection row={false}>
      <TokenTable tokens={ICONS} Preview={IconPreview} />
    </StorySection>
  ),
}

export const Border: Story = {
  render: () => (
    <StorySection row={false}>
      <TokenTable tokens={BORDER} Preview={BorderPreview} />
    </StorySection>
  ),
}

export const Background: Story = {
  render: () => (
    <StorySection row={false} title='Elements'>
      <TokenTable tokens={BACKGROUND_ELEMENTS} Preview={BackgroundPreview} />
    </StorySection>
  ),
}

export const BackgroundColor: Story = {
  name: 'Background (Color)',
  render: () => (
    <StorySection row={false} title='Color'>
      <TokenTable tokens={BACKGROUND_COLOR} Preview={BackgroundPreview} />
    </StorySection>
  ),
}
