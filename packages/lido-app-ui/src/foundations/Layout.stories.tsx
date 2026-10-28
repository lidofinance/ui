import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { breakpoints, breakpointWidths, spaces } from '../utils'
import { PAGE_GUTTER, RADII, SHADOWS, Z_INDEX } from './layoutTokens'

const meta: Meta = {
  title: 'Foundations/Layout',
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Layout is desktop-first: `base` applies everywhere and a `<bp>Down` key (alias `<bp>`) applies below that width; `Hidden` `below`/`above` take the bare name. `Stack`, `Grid`, `GridItem` and `Hidden` share this scale. `var()` is invalid inside `@media`, so queries come from `styles/breakpoints.css` (`-down` is `width < N`, `-up` is `width >= N`) and the same widths are exposed as `--lido-app-ui-breakpoint-*` tokens for `calc()` and `clamp()`. Spacing is a px scale (`Space`) used by `gap` props, each step backed by a `--lido-app-ui-space-N` token.',
      },
    },
  },
}

export default meta
type Story = StoryObj

const useTokenValue = (token: string) => {
  const [value, setValue] = useState('')
  useEffect(() => {
    setValue(
      getComputedStyle(document.documentElement).getPropertyValue(token).trim(),
    )
  }, [token])
  return value
}

const useMatches = (query: string) => {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const list = window.matchMedia(query)
    const update = () => setMatches(list.matches)
    update()
    list.addEventListener('change', update)
    return () => list.removeEventListener('change', update)
  }, [query])
  return matches
}

const cell: CSSProperties = {
  padding: '8px 12px',
  textAlign: 'left',
  borderBottom: '1px solid var(--lido-app-ui-color-border-default)',
}

const code: CSSProperties = {
  fontFamily: 'monospace',
  fontSize: 12,
}

const Table = ({ head, children }: { head: string[]; children: ReactNode }) => (
  <div style={{ overflowX: 'auto' }}>
    <table
      style={{
        borderCollapse: 'collapse',
        fontSize: 14,
        color: 'var(--lido-app-ui-color-text-default)',
      }}
    >
      <thead>
        <tr>
          {head.map((title) => (
            <th key={title} style={cell}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
)

const Note = ({ children }: { children: ReactNode }) => (
  <p
    style={{
      margin: 0,
      fontSize: 14,
      color: 'var(--lido-app-ui-color-text-secondary)',
    }}
  >
    {children}
  </p>
)

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

const BreakpointRow = ({ name }: { name: (typeof breakpoints)[number] }) => {
  const width = breakpointWidths[name]
  const down = useMatches(`(width < ${width}px)`)
  return (
    <tr>
      <td style={{ ...cell, ...code }}>{name}</td>
      <td style={{ ...cell, ...code }}>{`width < ${width}px`}</td>
      <td style={{ ...cell, ...code }}>{`width >= ${width}px`}</td>
      <td style={{ ...cell, ...code }}>
        --lido-app-ui-breakpoint-{name}-down / -up
      </td>
      <td style={{ ...cell, ...code }}>
        {`--lido-app-ui-breakpoint-${name}: ${width}px`}
      </td>
      <td style={cell}>{down ? 'viewport is below' : 'viewport is above'}</td>
    </tr>
  )
}

export const Breakpoints: Story = {
  render: () => (
    <StoryContainer gap={16}>
      <Note>
        Desktop-first: <code>base</code> covers everything, a{' '}
        <code>&lt;bp&gt;Down</code> key (alias <code>&lt;bp&gt;</code>) applies
        below that width. In CSS use the <code>@custom-media</code> names with{' '}
        <code>-down</code> (<code>width &lt; N</code>) or <code>-up</code> (
        <code>width &gt;= N</code>).
      </Note>
      <Table
        head={['Key', '-down', '-up', 'Custom media', 'Token', 'Viewport']}
      >
        <tr>
          <td style={{ ...cell, ...code }}>base</td>
          <td style={cell} />
          <td style={cell}>{`${breakpointWidths.lg}px and above`}</td>
          <td style={cell} />
          <td style={cell} />
          <td style={cell} />
        </tr>
        {breakpoints.map((name) => (
          <BreakpointRow key={name} name={name} />
        ))}
      </Table>
    </StoryContainer>
  ),
}

const GutterBar = ({ label, width }: { label: string; width: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <span style={{ ...code, width: 160 }}>{label}</span>
    <span
      style={{
        height: 24,
        width,
        background: 'var(--lido-app-ui-color-border-active)',
        borderRadius: 2,
      }}
    />
  </div>
)

export const PageGutter: Story = {
  render: () => (
    <StoryContainer gap={12}>
      <Note>
        <code>{PAGE_GUTTER}</code> is the side padding of Header, Footer and
        ErrorPage. Do not add your own gutters around them.
      </Note>
      <GutterBar label='base' width='52px' />
      <GutterBar label='md and below (width < 900px)' width='32px' />
      <GutterBar label='sm and below (width < 600px)' width='12px' />
      <GutterBar label='current viewport' width={`var(${PAGE_GUTTER})`} />
    </StoryContainer>
  ),
}

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
        borderRadius: 16,
        border: '1px solid var(--lido-app-ui-color-border-default)',
        background: 'var(--lido-app-ui-color-background-surface)',
        boxShadow: `var(${token})`,
      }}
    />
    <span style={code}>{token}</span>
  </div>
)

const RadiusSample = ({ token }: { token: string }) => {
  const value = useTokenValue(token)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <div
        style={{
          width: 120,
          height: 64,
          borderRadius: `var(${token})`,
          border: '1px solid var(--lido-app-ui-color-border-default)',
          background: 'var(--lido-app-ui-color-background-surface)',
        }}
      />
      <span style={code}>
        {token} ({value})
      </span>
    </div>
  )
}

export const ShadowsAndRadii: Story = {
  render: () => (
    <StoryContainer gap={24}>
      {SHADOWS.map((token) => (
        <ShadowSample key={token} token={token} />
      ))}
      {RADII.map((token) => (
        <RadiusSample key={token} token={token} />
      ))}
    </StoryContainer>
  ),
}
