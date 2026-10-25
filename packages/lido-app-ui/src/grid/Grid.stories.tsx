import type { Meta, StoryObj } from '@storybook/react'

import {
  StoryBox,
  StoryContainer,
  StorySection,
} from '../../.storybook/components'
import { spaces } from '../utils'
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
          '4 columns, 2 below `md` (900px), 1 below `sm` (600px). Edit `columns` and `gap` in Controls or use the viewport toolbar to resize.',
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
