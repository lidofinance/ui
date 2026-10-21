import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { spaces } from '../utils'
import { Grid } from './Grid'
import { GridItem } from './GridItem'

const box: CSSProperties = {
  padding: '12px 16px',
  border: '1px solid var(--lido-app-ui-color-border-default)',
  borderRadius: 8,
  background: 'var(--lido-app-ui-color-background-surface)',
  color: 'var(--lido-app-ui-color-text-default)',
  fontFamily: 'var(--lido-app-ui-font-family)',
}

const cells = (count: number) =>
  Array.from({ length: count }, (_, i) => (
    <div key={i} style={box}>
      {i + 1}
    </div>
  ))

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  args: { columns: 3, gap: 16 },
  argTypes: {
    gap: {
      control: 'select',
      options: spaces,
    },
    rowGap: {
      control: 'select',
      options: [undefined, ...spaces],
    },
    columnGap: {
      control: 'select',
      options: [undefined, ...spaces],
    },
    align: {
      control: 'select',
      options: [undefined, 'start', 'center', 'end', 'stretch'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'CSS grid container. `columns` takes a count or a raw template; `minItemWidth` makes auto-fit columns and wins over `columns`. `gap`, `rowGap`, `columnGap` and `columns` accept per-breakpoint objects like `{ base: 4, md: 2, sm: 1 }`.',
      },
    },
  },
  render: (args) => <Grid {...args}>{cells(6)}</Grid>,
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

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
  render: () => (
    <Grid columns={{ base: 4, md: 2, sm: 1 }} gap={{ base: 16, sm: 8 }}>
      {cells(8)}
    </Grid>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '4 columns, 2 at `md` and below, 1 at `sm` and below. Use the viewport toolbar to resize.',
      },
    },
  },
}

export const Spans: Story = {
  render: () => (
    <Grid columns={4} gap={8}>
      <GridItem span='full' style={box}>
        full
      </GridItem>
      <GridItem span={2} style={box}>
        span 2
      </GridItem>
      <GridItem span={2} style={box}>
        span 2
      </GridItem>
      <GridItem span={{ base: 1, sm: 'full' }} style={box}>
        1, full at sm
      </GridItem>
      <GridItem span={3} style={box}>
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

export const Areas: Story = {
  render: () => (
    <Grid
      gap={8}
      style={{
        gridTemplateAreas: '"header header" "side main"',
        gridTemplateColumns: '160px 1fr',
      }}
    >
      <GridItem area='header' style={box}>
        header
      </GridItem>
      <GridItem area='side' style={box}>
        side
      </GridItem>
      <GridItem area='main' style={box}>
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
