import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import {
  breakpoints,
  breakpointWidths,
  logoBreakpointWidth,
  sidebarBreakpointWidth,
  spaces,
  type Breakpoint,
} from '../utils'
import { PAGE_GUTTER, RADII, SHADOWS, Z_INDEX } from './layoutTokens'

const meta: Meta = {
  title: 'Foundations/Layout',
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Layout is desktop-first: `base` applies everywhere and a `<bp>Down` key (alias `<bp>`) applies below that width; `Hidden` `below`/`above` take the bare name. `Stack`, `Grid`, `GridItem` and `Hidden` share this scale. `var()` is invalid inside `@media`, so queries come from `styles/breakpoints.css` (`-down` is `width < N`, `-up` is `width >= N`) and the same widths are exposed as `--lido-app-ui-breakpoint-*` tokens for `calc()` and `clamp()`. Sidebar and Logo have their own breakpoints outside the scale. Spacing is a px scale (`Space`) used by `gap` props, each step backed by a `--lido-app-ui-space-N` token.',
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

const useViewportWidth = () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const update = () => setWidth(window.innerWidth)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return width
}

const useActiveBreakpoint = (): Breakpoint | 'base' => {
  const [active, setActive] = useState<Breakpoint | 'base'>('base')
  useEffect(() => {
    const lists = breakpoints.map((key) => ({
      key,
      list: window.matchMedia(`(width < ${breakpointWidths[key]}px)`),
    }))
    const update = () =>
      setActive(
        lists.reduce<Breakpoint | 'base'>(
          (current, { key, list }) => (list.matches ? key : current),
          'base',
        ),
      )
    update()
    lists.forEach(({ list }) => list.addEventListener('change', update))
    return () =>
      lists.forEach(({ list }) => list.removeEventListener('change', update))
  }, [])
  return active
}

const scaleRows: Record<
  Breakpoint | 'base',
  { range: string; use: string; components: string }
> = {
  base: {
    range: `width >= ${breakpointWidths.lg}px`,
    use: 'Wide desktop',
    components: 'Stack, Grid, GridItem, Hidden',
  },
  lg: {
    range: `width < ${breakpointWidths.lg}px`,
    use: 'Desktop without room for a persistent sidebar',
    components: 'Stack, Grid, GridItem, Hidden',
  },
  ml: {
    range: `width < ${breakpointWidths.ml}px`,
    use: 'Tablet landscape',
    components: 'Stack, Grid, GridItem, Hidden',
  },
  md: {
    range: `width < ${breakpointWidths.md}px`,
    use: 'Tablet; page gutter 52 to 32, two-column hero rows stack',
    components: 'Page gutter token, Stack, Grid, GridItem, Hidden',
  },
  sm: {
    range: `width < ${breakpointWidths.sm}px`,
    use: 'Large phone or tablet portrait; page gutter 32 to 12, stat and module grids go single-column',
    components: 'Page gutter token, Stack, Grid, GridItem, Hidden',
  },
  xs: {
    range: `width < ${breakpointWidths.xs}px`,
    use: 'Phone; Modal goes full-screen',
    components: 'Modal, Stack, Grid, GridItem, Hidden',
  },
  xxs: {
    range: `width < ${breakpointWidths.xxs}px`,
    use: 'Small phone; Modal padding 32 to 20',
    components: 'Modal, Stack, Grid, GridItem, Hidden',
  },
}

const ScaleRow = ({
  name,
  active,
}: {
  name: Breakpoint | 'base'
  active: boolean
}) => {
  const { range, use, components } = scaleRows[name]
  const highlight: CSSProperties = active
    ? { background: 'var(--lido-app-ui-color-background-secondary)' }
    : {}
  return (
    <tr aria-current={active || undefined} style={highlight}>
      <td style={{ ...cell, ...code }}>{name}</td>
      <td style={{ ...cell, ...code }}>{range}</td>
      <td style={cell}>{use}</td>
      <td style={cell}>{components}</td>
      <td style={{ ...cell, ...code }}>
        {name === 'base' ? '' : `--lido-app-ui-breakpoint-${name}-down / -up`}
      </td>
      <td style={{ ...cell, ...code }}>
        {name === 'base'
          ? ''
          : `--lido-app-ui-breakpoint-${name}: ${breakpointWidths[name]}px`}
      </td>
    </tr>
  )
}

const ComponentBreakpointRow = ({
  name,
  width,
  effect,
}: {
  name: string
  width: number
  effect: string
}) => {
  const down = useMatches(`(width < ${width}px)`)
  return (
    <tr>
      <td style={{ ...cell, ...code }}>{name}</td>
      <td style={{ ...cell, ...code }}>{`width < ${width}px`}</td>
      <td style={cell}>{effect}</td>
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

const Snippet = ({ children }: { children: string }) => (
  <pre
    style={{
      ...code,
      margin: 0,
      padding: 12,
      overflowX: 'auto',
      borderRadius: 8,
      border: '1px solid var(--lido-app-ui-color-border-default)',
      color: 'var(--lido-app-ui-color-text-default)',
    }}
  >
    {children}
  </pre>
)

const Heading = ({ children }: { children: ReactNode }) => (
  <h3
    style={{
      margin: 0,
      fontSize: 16,
      color: 'var(--lido-app-ui-color-text-default)',
    }}
  >
    {children}
  </h3>
)

const cssSnippet = `@media (--lido-app-ui-breakpoint-md-down) {
  .hero {
    flex-direction: column;
  }
}`

const postcssSnippet = `// postcss.config.mjs
const stylesDir = path.dirname(
  require.resolve('@lidofinance/lido-app-ui/styles/breakpoints.css'),
)

export default {
  plugins: {
    '@csstools/postcss-global-data': {
      files: [path.join(stylesDir, 'breakpoints.css')],
    },
    'postcss-custom-media': { preserve: false },
  },
}`

const propsSnippet = `<Stack direction={{ base: 'row', smDown: 'column' }} />
<Hidden below='sm'>{children}</Hidden>`

const jsSnippet = `import {
  breakpointWidths,
  logoBreakpointWidth,
  sidebarBreakpointWidth,
} from '@lidofinance/lido-app-ui'

window.matchMedia(\`(width < \${breakpointWidths.md}px)\`)
// sidebarBreakpointWidth (${sidebarBreakpointWidth}), logoBreakpointWidth (${logoBreakpointWidth})`

const tokenSnippet = `.panel {
  width: clamp(320px, calc(100vw - 64px), var(--lido-app-ui-breakpoint-md));
}`

export const Breakpoints: Story = {
  render: () => {
    const width = useViewportWidth()
    const active = useActiveBreakpoint()
    return (
      <StoryContainer gap={16}>
        <Note>
          Desktop-first: <code>base</code> covers everything, a{' '}
          <code>&lt;bp&gt;Down</code> key (alias <code>&lt;bp&gt;</code>)
          applies below that width. In CSS use the <code>@custom-media</code>{' '}
          names with <code>-down</code> (<code>width &lt; N</code>) or{' '}
          <code>-up</code> (<code>width &gt;= N</code>).
        </Note>
        <Note>
          Viewport: <code>{width}px</code>, active key: <code>{active}</code>
        </Note>
        <Table
          head={[
            'Key',
            'Range',
            'Typical use',
            'Reacting components',
            'Custom media',
            'Token',
          ]}
        >
          {(['base', ...breakpoints] as const).map((name) => (
            <ScaleRow key={name} name={name} active={name === active} />
          ))}
        </Table>

        <Heading>Component breakpoints</Heading>
        <Note>
          Sidebar and Logo switch at their own widths. They sit outside the
          responsive-prop scale, so they cannot be used as <code>Stack</code> or{' '}
          <code>Grid</code> keys.
        </Note>
        <Table
          head={[
            'Name',
            'Range',
            'Effect',
            'Custom media',
            'Token',
            'Viewport',
          ]}
        >
          <ComponentBreakpointRow
            name='sidebar'
            width={sidebarBreakpointWidth}
            effect='Below it Sidebar becomes a drawer and SidebarToggle shows'
          />
          <ComponentBreakpointRow
            name='logo'
            width={logoBreakpointWidth}
            effect='Below it Logo with variant="auto" drops the wordmark'
          />
        </Table>

        <Heading>Using breakpoints</Heading>
        <Note>CSS, with the custom media names:</Note>
        <Snippet>{cssSnippet}</Snippet>
        <Note>
          Apps need <code>postcss-custom-media</code> and{' '}
          <code>@csstools/postcss-global-data</code> pointing at the published{' '}
          <code>dist/styles/breakpoints.css</code>:
        </Note>
        <Snippet>{postcssSnippet}</Snippet>
        <Note>Responsive props and Hidden:</Note>
        <Snippet>{propsSnippet}</Snippet>
        <Note>JS:</Note>
        <Snippet>{jsSnippet}</Snippet>
        <Note>
          Tokens <code>--lido-app-ui-breakpoint-*</code> hold the widths for{' '}
          <code>calc()</code> and <code>clamp()</code>:
        </Note>
        <Snippet>{tokenSnippet}</Snippet>

        <Heading>Overriding</Heading>
        <Note>
          The library&apos;s media queries are compiled to fixed px in{' '}
          <code>dist/index.css</code>, so apps cannot change where library
          components switch. Overriding a{' '}
          <code>--lido-app-ui-breakpoint-*</code> token only affects the
          app&apos;s own <code>calc()</code> and <code>clamp()</code>. The
          exception is Logo: it reads <code>--lido-app-ui-breakpoint-logo</code>{' '}
          (or the per-instance <code>--lido-app-ui-logo-breakpoint</code>) at
          runtime via <code>clamp()</code>, so either can be overridden. Apps
          can reuse the same names for their own layout.
        </Note>
      </StoryContainer>
    )
  },
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
      <GutterBar
        label={`md and below (width < ${breakpointWidths.md}px)`}
        width='32px'
      />
      <GutterBar
        label={`sm and below (width < ${breakpointWidths.sm}px)`}
        width='12px'
      />
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
