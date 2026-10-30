import type { Meta, StoryObj } from '@storybook/react'

import {
  StoryBox,
  StoryContainer,
  StorySection,
} from '../../.storybook/components'
import { spaces } from '../utils'
import { Stack } from './Stack'

const items = (count = 3) =>
  Array.from({ length: count }, (_, i) => (
    <StoryBox key={i}>Item {i + 1}</StoryBox>
  ))

const directions = ['row', 'column', 'row-reverse', 'column-reverse'] as const
const aligns = ['start', 'center', 'end', 'stretch', 'baseline'] as const
const justifies = [
  'start',
  'center',
  'end',
  'between',
  'around',
  'evenly',
] as const

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  args: { direction: 'column', gap: 8 },
  argTypes: {
    wrap: { control: 'boolean' },
  },
  render: (args) => <Stack {...args}>{items()}</Stack>,
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  argTypes: {
    direction: { control: 'select', options: directions },
    gap: { control: 'select', options: spaces },
    align: { control: 'select', options: aligns },
    justify: { control: 'select', options: justifies },
  },
}

export const Direction: Story = {
  render: () => (
    <StoryContainer>
      {directions.map((d) => (
        <StorySection key={d} title={d} row={false}>
          <Stack direction={d} gap={8}>
            {items()}
          </Stack>
        </StorySection>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'All four flex directions.' } },
  },
}

export const GapScale: Story = {
  render: () => (
    <StoryContainer>
      {spaces.map((g) => (
        <StorySection
          key={g}
          title={`${g}px${g === 0 ? '' : ` / --lido-app-ui-space-${g}`}`}
          row={false}
        >
          <Stack direction='row' gap={g}>
            {items()}
          </Stack>
        </StorySection>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Supported gap values.' } },
  },
}

export const AlignAndJustify: Story = {
  render: () => (
    <StoryContainer>
      {aligns.map((a) => (
        <StorySection key={a} title={`align ${a}`} row={false}>
          <Stack direction='row' gap={8} align={a} style={{ height: 80 }}>
            <StoryBox>A</StoryBox>
            <StoryBox style={{ padding: '24px 16px' }}>B</StoryBox>
          </Stack>
        </StorySection>
      ))}
      {justifies.map((j) => (
        <StorySection key={j} title={`justify ${j}`} row={false}>
          <Stack direction='row' gap={8} justify={j}>
            {items()}
          </Stack>
        </StorySection>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Cross-axis `align` and main-axis `justify` values.',
      },
    },
  },
}

export const Responsive: Story = {
  args: {
    direction: { base: 'row', smDown: 'column' },
    gap: { base: 24, smDown: 8 },
    align: { base: 'center', smDown: 'stretch' },
  },
  argTypes: {
    direction: { control: 'object' },
    gap: { control: 'object' },
    align: { control: 'object' },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Row on wide screens, column with a smaller gap below the `sm` breakpoint (768px). `align` is responsive too, so the cross axis can switch from centered to stretched together with the direction. Edit the objects in Controls or use the viewport toolbar to resize.',
      },
    },
  },
}

export const Wrap: Story = {
  render: () => (
    <Stack direction='row' gap={8} wrap style={{ maxWidth: 360 }}>
      {items(8)}
    </Stack>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: '`wrap` lets items flow onto new lines.' } },
  },
}
