import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { breakpointNames } from '../../.storybook/viewports'
import { StoryContainer } from '../../.storybook/components'
import { Grid } from '../grid'
import { IconMenu } from '../icons'
import { PageContent as PageContentLayout } from '../page-layout'
import { breakpoints, breakpointWidths, type Breakpoint } from '../utils'
import { PAGE_CONTENT_MAX, PAGE_GUTTER, PAGE_GUTTERS } from './layoutTokens'
import { cell, code, Note, Table, useTokenValue } from './storyFixtures'

const meta: Meta = {
  title: 'Foundations/Breakpoints',
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Layout is desktop-first: `base` applies everywhere and a `<bp>Down` key (alias `<bp>`) applies at that width and below, see Usage. `Stack`, `Grid`, `GridItem` and `Hidden` share this scale.',
      },
    },
  },
}

export default meta
type Story = StoryObj

const MIN_WIDTH = 300

type Key = Breakpoint | 'base'

const lowerBound = (key: Key) => {
  const narrower = breakpoints[breakpoints.indexOf(key as Breakpoint) + 1]
  return key === 'xs' ? MIN_WIDTH : breakpointWidths[narrower ?? 'xl'] + 1
}

const rangeOf = (key: Key) =>
  key === 'base'
    ? `${breakpointWidths.xl + 1}px+`
    : `${lowerBound(key)}–${breakpointWidths[key]}px`

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

const scaleRows: Record<Key, { name: string; use: string; extras: string }> = {
  base: {
    name: 'Desktop wide',
    use: 'Wide desktop; persistent sidebar',
    extras: '',
  },
  xl: {
    name: breakpointNames.xl,
    use: 'Desktop with a persistent sidebar',
    extras: '',
  },
  lg: {
    name: breakpointNames.lg,
    use: 'Sidebar collapses into a drawer (lg and below)',
    extras: 'Sidebar, SidebarToggle, Logo (auto)',
  },
  md: {
    name: breakpointNames.md,
    use: 'Large phone or tablet portrait; two-column hero rows stack',
    extras: '',
  },
  sm: {
    name: breakpointNames.sm,
    use: 'Phone; page gutter 32 to 12, Modal goes full-screen',
    extras: 'Page gutter, Modal',
  },
  xs: {
    name: breakpointNames.xs,
    use: 'Small phone; Modal padding 32 to 20',
    extras: 'Modal',
  },
}

const ScaleRow = ({ name, active }: { name: Key; active: boolean }) => {
  const row = scaleRows[name]
  const highlight: CSSProperties = active
    ? { background: 'var(--lido-app-ui-color-background-secondary)' }
    : {}
  return (
    <tr aria-current={active || undefined} style={highlight}>
      <td style={{ ...cell, ...code }}>{name}</td>
      <td style={{ ...cell, whiteSpace: 'nowrap' }}>{row.name}</td>
      <td style={{ ...cell, ...code, whiteSpace: 'nowrap' }}>
        {rangeOf(name)}
      </td>
      <td style={cell}>{row.use}</td>
      <td style={cell}>{row.extras}</td>
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

export const Scale: Story = {
  render: () => {
    const width = useViewportWidth()
    const active: Key =
      [...breakpoints].reverse().find((k) => width <= breakpointWidths[k]) ??
      'base'
    return (
      <StoryContainer gap={16}>
        <Note>
          Viewport: <code>{width}px</code>, active key: <code>{active}</code>
        </Note>
        <Table
          head={[
            'Key',
            'Name',
            'Range',
            'Typical use',
            'Also reacts',
            'Custom media',
            'Token',
          ]}
        >
          {(['base', ...breakpoints] as const).map((name) => (
            <ScaleRow key={name} name={name} active={name === active} />
          ))}
        </Table>

        <Note>
          Sidebar drawer and Logo <code>auto</code> switch at <code>lg</code> (
          <code>{"downQuery('lg')"}</code> in JS). Logo can be overridden per
          instance with <code>--lido-app-ui-logo-breakpoint</code>.
        </Note>
      </StoryContainer>
    )
  },
}

const token = (name: string) => `var(--lido-app-ui-${name})`
const surface = token('color-background-default')
const textDefault = token('color-text-default')
const textSecondary = token('color-text-secondary')
const gutterFill = token('color-background-secondary')
const NAV_WIDTH = '18%'

const frameStyle: CSSProperties = {
  boxSizing: 'border-box',
  display: 'flex',
  height: 96,
  overflow: 'hidden',
  border: `1px solid ${token('color-border-default')}`,
  borderRadius: token('border-radius-xs'),
  background: gutterFill,
}

const contentStyle: CSSProperties = {
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: 14,
  color: token('color-text-active'),
  background: token('color-tint-active'),
  borderInline: `1px solid ${token('color-border-active')}`,
}

const DiagramCard = ({
  title,
  range,
  children,
}: {
  title: string
  range: string
  children: ReactNode
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 20,
      borderRadius: token('border-radius-lg'),
      background: surface,
      color: textDefault,
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 8,
      }}
    >
      <span style={{ fontSize: 18, fontWeight: 500 }}>{title}</span>
      <span style={{ fontSize: 14, color: textSecondary }}>{range}</span>
    </div>
    {children}
  </div>
)

type DiagramProps = {
  detail: string
  /** Visual side gutter in px; omit when the content is capped and centered. */
  padding?: number
  /** Side gutter in px shown under the diagram. */
  gutter?: number
  sidebar?: boolean
  burger?: boolean
}

const Diagram = ({
  detail,
  padding,
  gutter,
  sidebar,
  burger,
}: DiagramProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={frameStyle}>
      {sidebar && (
        <div
          style={{
            boxSizing: 'border-box',
            flex: `0 0 ${NAV_WIDTH}`,
            paddingTop: 12,
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 500,
            color: token('color-text-info'),
            background: token('color-tint-info'),
            borderRight: `1px solid ${token('color-border-info')}`,
          }}
        >
          Nav
        </div>
      )}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          paddingInline: padding,
        }}
      >
        <div
          style={{
            ...contentStyle,
            ...(padding === undefined ? { width: '70%' } : { flex: 1 }),
          }}
        >
          {burger && (
            <IconMenu
              aria-hidden
              width={20}
              height={20}
              style={{
                position: 'absolute',
                top: 10,
                left: 16,
                color: token('color-icons-secondary'),
              }}
            />
          )}
          <span>Content</span>
          <span>{detail}</span>
        </div>
      </div>
    </div>
    {gutter !== undefined && (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: sidebar ? NAV_WIDTH : undefined,
          fontSize: 14,
        }}
      >
        <span style={{ flex: 1, fontWeight: 600 }}>{gutter}px</span>
        <span style={{ color: textSecondary }}>Paddings</span>
        <span style={{ flex: 1, fontWeight: 600, textAlign: 'right' }}>
          {gutter}px
        </span>
      </div>
    )}
  </div>
)

const CardGrid = ({ children }: { children: ReactNode }) => (
  <Grid columns={{ base: 2, smDown: 1 }} gap={16}>
    {children}
  </Grid>
)

const LiveRow = () => {
  const gutter = useTokenValue(PAGE_GUTTER)
  return (
    <StoryContainer gap={8}>
      <Heading>Current viewport</Heading>
      <Note>
        Side gutter <code>{gutter}</code> from <code>{PAGE_GUTTER}</code>,
        content capped at {PAGE_CONTENT_MAX}px.
      </Note>
      <div style={{ ...frameStyle, height: 'auto' }}>
        <PageContentLayout style={{ paddingBlock: 0 }}>
          <div style={{ ...contentStyle, padding: '16px 0' }}>
            <span>Content</span>
            <span>Max {PAGE_CONTENT_MAX}px</span>
          </div>
        </PageContentLayout>
      </div>
    </StoryContainer>
  )
}

const { lg, sm } = breakpointWidths
const tabletRange = `${sm + 1}–${lg}px`
const mobileRange = `≤${sm}px`
const maxDetail = `Fill, Max: ${PAGE_CONTENT_MAX}px`

export const PageContent: Story = {
  render: () => (
    <StoryContainer gap={16}>
      <Note>
        Content is centered with a maximum width of {PAGE_CONTENT_MAX}px.
        Minimum side spacing is {PAGE_GUTTERS.base}px on desktop and tablet, and{' '}
        {PAGE_GUTTERS.sm}px on mobile (≤{sm}px).
      </Note>
      <CardGrid>
        <DiagramCard title='Desktop wide' range={rangeOf('base')}>
          <Diagram detail={`${PAGE_CONTENT_MAX}px`} />
        </DiagramCard>
        <DiagramCard title={breakpointNames.xl} range={rangeOf('xl')}>
          <Diagram detail={maxDetail} padding={20} gutter={PAGE_GUTTERS.base} />
        </DiagramCard>
        <DiagramCard title='Tablet' range={tabletRange}>
          <Diagram detail='Fill' padding={20} gutter={PAGE_GUTTERS.base} />
        </DiagramCard>
        <DiagramCard title='Mobile' range={mobileRange}>
          <Diagram detail='Fill' padding={6} gutter={PAGE_GUTTERS.sm} />
        </DiagramCard>
      </CardGrid>
      <LiveRow />
    </StoryContainer>
  ),
}

export const PageContentWithSidebar: Story = {
  render: () => (
    <StoryContainer gap={16}>
      <Note>
        Content follows the same width and spacing rules within the area next to
        the sidebar. At {lg}px and below, the sidebar collapses into a menu.
      </Note>
      <CardGrid>
        <DiagramCard title='Desktop wide with sidebar' range={rangeOf('base')}>
          <Diagram sidebar detail={maxDetail} />
        </DiagramCard>
        <DiagramCard
          title={`${breakpointNames.xl} with sidebar`}
          range={rangeOf('xl')}
        >
          <Diagram
            sidebar
            detail={maxDetail}
            padding={6}
            gutter={PAGE_GUTTERS.base}
          />
        </DiagramCard>
        <DiagramCard title='Tablet' range={tabletRange}>
          <Diagram
            burger
            detail='Fill'
            padding={20}
            gutter={PAGE_GUTTERS.base}
          />
        </DiagramCard>
        <DiagramCard title='Mobile' range={mobileRange}>
          <Diagram burger detail='Fill' padding={6} gutter={PAGE_GUTTERS.sm} />
        </DiagramCard>
      </CardGrid>
    </StoryContainer>
  ),
}

const cssSnippet = `@media (--lido-app-ui-breakpoint-md-down) {
  .hero {
    flex-direction: column;
  }
}`

const postcssSnippet = `// postcss.config.mjs
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export default {
  plugins: {
    '@csstools/postcss-global-data': {
      files: [require.resolve('@lidofinance/lido-app-ui/styles/breakpoints.css')],
    },
    'postcss-custom-media': { preserve: false },
  },
}`

const propsSnippet = `<Stack direction={{ base: 'row', smDown: 'column' }} />
<Hidden below='sm'>{children}</Hidden>`

const jsSnippet = `import { downQuery } from '@lidofinance/lido-app-ui'

window.matchMedia(downQuery('md'))`

const tokenSnippet = `.panel {
  width: clamp(320px, calc(100vw - 64px), var(--lido-app-ui-breakpoint-md));
}`

export const Usage: Story = {
  render: () => (
    <StoryContainer gap={16}>
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
        components switch. Overriding a <code>--lido-app-ui-breakpoint-*</code>{' '}
        token only affects the app&apos;s own <code>calc()</code> and{' '}
        <code>clamp()</code>. The exception is Logo: it reads{' '}
        <code>--lido-app-ui-breakpoint-lg</code> (or the per-instance{' '}
        <code>--lido-app-ui-logo-breakpoint</code>) at runtime via{' '}
        <code>clamp()</code>, so either can be overridden. Apps can reuse the
        same names for their own layout.
      </Note>
    </StoryContainer>
  ),
}
