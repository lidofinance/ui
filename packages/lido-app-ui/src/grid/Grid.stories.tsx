import { useEffect, useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import {
  StoryBox,
  StoryContainer,
  StorySection,
} from '../../.storybook/components'
import { Sidebar } from '../sidebar/Sidebar'
import { SidebarInset } from '../sidebar/SidebarInset'
import { SidebarLayout } from '../sidebar/SidebarLayout'
import { SidebarToggle } from '../sidebar/SidebarToggle'
import { LOGO, TopBar } from '../sidebar/storyFixtures'
import { breakpoints, breakpointWidths, spaces } from '../utils'
import { Grid } from './Grid'
import { GridItem } from './GridItem'

const cellStyle = { padding: '12px 16px' }

const cells = (count: number) =>
  Array.from({ length: count }, (_, i) => (
    <StoryBox key={i} style={cellStyle}>
      {i + 1}
    </StoryBox>
  ))

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  args: { columns: 3, gap: 16 },
  argTypes: {
    columns: { control: 'object' },
    minItemWidth: { control: 'number' },
    rowGap: { control: 'select', options: spaces },
    columnGap: { control: 'select', options: spaces },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
  },
  render: (args) => <Grid {...args}>{cells(6)}</Grid>,
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  argTypes: {
    gap: { control: 'select', options: spaces },
  },
}

export const Columns: Story = {
  render: () => (
    <StoryContainer>
      {[1, 2, 4].map((n) => (
        <StorySection key={n} title={`${n} columns`} row={false}>
          <Grid columns={n} gap={8}>
            {cells(4)}
          </Grid>
        </StorySection>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Equal-width columns from a number.' } },
  },
}

export const TemplateString: Story = {
  render: () => (
    <Grid columns='200px 1fr 2fr' gap={8}>
      {cells(6)}
    </Grid>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: 'A string is used as `grid-template-columns`.' },
    },
  },
}

export const AutoFit: Story = {
  render: () => (
    <Grid minItemWidth={160} gap={12}>
      {cells(7)}
    </Grid>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '`minItemWidth` fits as many columns of at least that width as the container allows.',
      },
    },
  },
}

export const ResponsiveColumns: Story = {
  args: {
    columns: { base: 4, mdDown: 2, smDown: 1 },
    gap: { base: 16, smDown: 8 },
  },
  argTypes: { gap: { control: 'object' } },
  render: (args) => <Grid {...args}>{cells(8)}</Grid>,
  parameters: {
    docs: {
      description: {
        story:
          '4 columns, 2 below `md` (900px), 1 below `sm` (768px). Edit `columns` and `gap` in Controls or use the viewport toolbar to resize.',
      },
    },
  },
}

export const ContainerWidth: Story = {
  render: () => (
    <StoryContainer>
      {[320, 900].map((width) => (
        <StorySection
          key={width}
          title={`${width}px wide container`}
          row={false}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              maxWidth: width,
              width: '100%',
            }}
          >
            <div>minItemWidth=160</div>
            <Grid minItemWidth={160} gap={8}>
              {cells(4)}
            </Grid>
            <div>columns base 4, smDown 1 (viewport)</div>
            <Grid columns={{ base: 4, smDown: 1 }} gap={8}>
              {cells(4)}
            </Grid>
          </div>
        </StorySection>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Only `minItemWidth` adapts to the container. `columns` breakpoints follow the viewport, so the second grid keeps 4 columns in the narrow container on a wide screen.',
      },
    },
  },
}

export const Spans: Story = {
  render: () => (
    <Grid columns={4} gap={8}>
      <GridItem span='full' as={StoryBox} style={cellStyle}>
        full
      </GridItem>
      <GridItem span={2} as={StoryBox} style={cellStyle}>
        span 2
      </GridItem>
      <GridItem span={2} as={StoryBox} style={cellStyle}>
        span 2
      </GridItem>
      <GridItem span={{ base: 1, sm: 'full' }} as={StoryBox} style={cellStyle}>
        1, full at sm
      </GridItem>
      <GridItem span={3} as={StoryBox} style={cellStyle}>
        span 3
      </GridItem>
    </Grid>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: '`GridItem` `span` takes a number or `"full"`.' },
    },
  },
}

export const ResponsiveSpans: Story = {
  render: () => (
    <Grid columns={{ base: 4, smDown: 1 }} gap={8}>
      <GridItem
        span={{ base: 2, smDown: 'full' }}
        as={StoryBox}
        style={cellStyle}
      >
        2, full at sm
      </GridItem>
      <GridItem
        span={{ base: 2, smDown: 'full' }}
        as={StoryBox}
        style={cellStyle}
      >
        2, full at sm
      </GridItem>
      <GridItem as={StoryBox} style={cellStyle}>
        auto
      </GridItem>
      <GridItem as={StoryBox} style={cellStyle}>
        auto
      </GridItem>
    </Grid>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'When `columns` shrinks, make `span` responsive too. A span wider than the current column count adds an empty implicit track, and its gap shortens every other cell.',
      },
    },
  },
}

export const Areas: Story = {
  render: () => (
    <Grid
      gap={8}
      style={{
        gridTemplateAreas: '"header header" "side main"',
        gridTemplateColumns: '160px 1fr',
      }}
    >
      <GridItem area='header' as={StoryBox} style={cellStyle}>
        header
      </GridItem>
      <GridItem area='side' as={StoryBox} style={cellStyle}>
        side
      </GridItem>
      <GridItem area='main' as={StoryBox} style={cellStyle}>
        main
      </GridItem>
    </Grid>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: '`area` sets `grid-area` for use with `grid-template-areas`.',
      },
    },
  },
}

const activeKey = (width: number) =>
  [...breakpoints].reverse().find((bp) => width < breakpointWidths[bp]) ??
  'base'

const ShellReadout = () => {
  const columnRef = useRef<HTMLDivElement>(null)
  const [viewport, setViewport] = useState(() => window.innerWidth)
  const [column, setColumn] = useState(0)

  useEffect(() => {
    const onResize = () => setViewport(window.innerWidth)
    window.addEventListener('resize', onResize)
    const el = columnRef.current
    const observer = new ResizeObserver(([entry]) =>
      setColumn(Math.round(entry.contentRect.width)),
    )
    if (el) observer.observe(el)
    return () => {
      window.removeEventListener('resize', onResize)
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={columnRef}>
      <div style={{ padding: '24px var(--lido-app-ui-page-gutter)' }}>
        <StoryBox style={{ fontFamily: 'monospace', fontSize: 13 }}>
          <div>viewport: {viewport}px</div>
          <div>page column: {column}px</div>
          <div>active key: {activeKey(column)}</div>
        </StoryBox>
        <div style={{ marginTop: 24 }}>
          <Grid columns={{ base: 4, lgDown: 3, mdDown: 2, smDown: 1 }} gap={16}>
            {cells(8)}
          </Grid>
        </div>
      </div>
    </div>
  )
}

export const InSidebarShell: Story = {
  render: () => (
    <SidebarLayout style={{ minHeight: '100dvh' }}>
      <Sidebar logo={LOGO}>{null}</Sidebar>
      <SidebarInset>
        <TopBar>
          <SidebarToggle />
        </TopBar>
        <ShellReadout />
      </SidebarInset>
    </SidebarLayout>
  ),
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    docs: {
      story: { inline: false, iframeHeight: 900 },
      description: {
        story:
          'Keys are measured on the page column (SidebarInset), not the viewport. At viewport 1280 the column is 984px, so `lgDown` and `mlDown` fire and the grid has 3 columns; at 1279 the column is 1279px and it still has 3. There is no column jump across the sidebar breakpoint, which viewport keys would cause (4 columns at 1280, 3 at 1279).',
      },
    },
  },
}

export const AtSidebarUp: Story = {
  ...InSidebarShell,
  tags: ['!autodocs'],
  globals: { viewport: { value: 'sidebar-up', isRotated: false } },
}

export const AtSidebarDown: Story = {
  ...InSidebarShell,
  tags: ['!autodocs'],
  globals: { viewport: { value: 'sidebar-down', isRotated: false } },
}
