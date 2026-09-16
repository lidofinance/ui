import type { Meta, StoryObj } from '@storybook/react'
import {
  DarkThemeProvider,
  LightThemeProvider,
} from '@lidofinance/lido-shared-ui'

import { StorySection } from '../../.storybook/components'

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

type Token = { name: string; cssVar: string }

const TEXT: Token[] = [
  { name: 'default', cssVar: '--lido-app-ui-color-text-default' },
  { name: 'secondary', cssVar: '--lido-app-ui-color-text-secondary' },
  { name: 'tertiary', cssVar: '--lido-app-ui-color-text-tertiary' },
  { name: 'neutral', cssVar: '--lido-app-ui-color-text-neutral' },
  { name: 'active', cssVar: '--lido-app-ui-color-text-active' },
  { name: 'active-hover', cssVar: '--lido-app-ui-color-text-active-hover' },
  { name: 'success', cssVar: '--lido-app-ui-color-text-success' },
  { name: 'warning', cssVar: '--lido-app-ui-color-text-warning' },
  { name: 'error', cssVar: '--lido-app-ui-color-text-error' },
  { name: 'info', cssVar: '--lido-app-ui-color-text-info' },
  { name: 'inverse', cssVar: '--lido-app-ui-color-text-inverse' },
  { name: 'disabled', cssVar: '--lido-app-ui-color-text-disabled' },
]

const ICONS: Token[] = [
  { name: 'default', cssVar: '--lido-app-ui-color-icons-default' },
  { name: 'secondary', cssVar: '--lido-app-ui-color-icons-secondary' },
  { name: 'tertiary', cssVar: '--lido-app-ui-color-icons-tertiary' },
  { name: 'neutral', cssVar: '--lido-app-ui-color-icons-neutral' },
  { name: 'active', cssVar: '--lido-app-ui-color-icons-active' },
  { name: 'active-hover', cssVar: '--lido-app-ui-color-icons-active-hover' },
  { name: 'light-blue', cssVar: '--lido-app-ui-color-icons-light-blue' },
  { name: 'success', cssVar: '--lido-app-ui-color-icons-success' },
  { name: 'warning', cssVar: '--lido-app-ui-color-icons-warning' },
  { name: 'error', cssVar: '--lido-app-ui-color-icons-error' },
  { name: 'info', cssVar: '--lido-app-ui-color-icons-info' },
  { name: 'inverse', cssVar: '--lido-app-ui-color-icons-inverse' },
  { name: 'disabled', cssVar: '--lido-app-ui-color-icons-disabled' },
]

const BORDER: Token[] = [
  { name: 'default', cssVar: '--lido-app-ui-color-border-default' },
  { name: 'tertiary', cssVar: '--lido-app-ui-color-border-tertiary' },
  { name: 'hover', cssVar: '--lido-app-ui-color-border-hover' },
  { name: 'black', cssVar: '--lido-app-ui-color-border-black' },
  { name: 'active', cssVar: '--lido-app-ui-color-border-active' },
  { name: 'success', cssVar: '--lido-app-ui-color-border-success' },
  { name: 'warning', cssVar: '--lido-app-ui-color-border-warning' },
  { name: 'error', cssVar: '--lido-app-ui-color-border-error' },
  { name: 'info', cssVar: '--lido-app-ui-color-border-info' },
  { name: 'card', cssVar: '--lido-app-ui-color-border-card' },
  { name: 'inverse', cssVar: '--lido-app-ui-color-border-inverse' },
]

const BACKGROUND_ELEMENTS: Token[] = [
  { name: 'surface', cssVar: '--lido-app-ui-color-background-surface' },
  {
    name: 'surface-hover',
    cssVar: '--lido-app-ui-color-background-surface-hover',
  },
  {
    name: 'surface-active',
    cssVar: '--lido-app-ui-color-background-surface-active',
  },
  {
    name: 'surface-active-hover',
    cssVar: '--lido-app-ui-color-background-surface-active-hover',
  },
  {
    name: 'surface-selected',
    cssVar: '--lido-app-ui-color-background-surface-selected',
  },
  {
    name: 'surface-selected-hover',
    cssVar: '--lido-app-ui-color-background-surface-selected-hover',
  },
  { name: 'default', cssVar: '--lido-app-ui-color-background-default' },
  {
    name: 'default-hover',
    cssVar: '--lido-app-ui-color-background-default-hover',
  },
  {
    name: 'default-pressed',
    cssVar: '--lido-app-ui-color-background-default-pressed',
  },
  {
    name: 'default-active',
    cssVar: '--lido-app-ui-color-background-default-active',
  },
  { name: 'secondary', cssVar: '--lido-app-ui-color-background-secondary' },
  {
    name: 'secondary-hover',
    cssVar: '--lido-app-ui-color-background-secondary-hover',
  },
  { name: 'action', cssVar: '--lido-app-ui-color-background-action' },
  {
    name: 'action-hover',
    cssVar: '--lido-app-ui-color-background-action-hover',
  },
  {
    name: 'action-pressed',
    cssVar: '--lido-app-ui-color-background-action-pressed',
  },
  {
    name: 'transparent-hover',
    cssVar: '--lido-app-ui-color-background-transparent-hover',
  },
  {
    name: 'transparent-pressed',
    cssVar: '--lido-app-ui-color-background-transparent-pressed',
  },
  { name: 'disabled', cssVar: '--lido-app-ui-color-background-disabled' },
  { name: 'page', cssVar: '--lido-app-ui-color-background-page' },
]

const BACKGROUND_COLOR: Token[] = [
  { name: 'neutral', cssVar: '--lido-app-ui-color-tint-neutral' },
  { name: 'neutral-hover', cssVar: '--lido-app-ui-color-tint-neutral-hover' },
  { name: 'active', cssVar: '--lido-app-ui-color-tint-active' },
  { name: 'active-hover', cssVar: '--lido-app-ui-color-tint-active-hover' },
  { name: 'success', cssVar: '--lido-app-ui-color-tint-success' },
  { name: 'success-hover', cssVar: '--lido-app-ui-color-tint-success-hover' },
  { name: 'warning', cssVar: '--lido-app-ui-color-tint-warning' },
  { name: 'warning-hover', cssVar: '--lido-app-ui-color-tint-warning-hover' },
  { name: 'error', cssVar: '--lido-app-ui-color-tint-error' },
  { name: 'error-hover', cssVar: '--lido-app-ui-color-tint-error-hover' },
  { name: 'info', cssVar: '--lido-app-ui-color-tint-info' },
  { name: 'info-hover', cssVar: '--lido-app-ui-color-tint-info-hover' },
]

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
  <CardChrome style={{ background: `var(${cssVar})` }} />
)

const TokenRow = ({
  token,
  Preview,
}: {
  token: Token
  Preview: (props: { cssVar: string }) => JSX.Element
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
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
  tokens: Token[]
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
