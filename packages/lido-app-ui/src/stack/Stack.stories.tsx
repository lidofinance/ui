import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { spaces } from '../utils'
import { Stack } from './Stack'

const box: CSSProperties = {
  padding: '8px 16px',
  border: '1px solid var(--lido-app-ui-color-border-default)',
  borderRadius: 8,
  background: 'var(--lido-app-ui-color-background-surface)',
  color: 'var(--lido-app-ui-color-text-default)',
  fontFamily: 'var(--lido-app-ui-font-family)',
}

const items = (count = 3) =>
  Array.from({ length: count }, (_, i) => (
    <div key={i} style={box}>
      Item {i + 1}
    </div>
  ))

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  args: { direction: 'column', gap: 8 },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    gap: {
      control: 'select',
      options: spaces,
    },
    align: {
      control: 'select',
      options: [undefined, 'start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: [
        undefined,
        'start',
        'center',
        'end',
        'between',
        'around',
        'evenly',
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Flex container. `direction` and `gap` (px scale) accept a single value or a per-breakpoint object like `{ base: "row", sm: "column" }`; breakpoint keys apply at that width and below.',
      },
    },
  },
  render: (args) => <Stack {...args}>{items()}</Stack>,
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Direction: Story = {
  render: () => (
    <StoryContainer>
      {(['row', 'column', 'row-reverse', 'column-reverse'] as const).map(
        (d) => (
          <StorySection key={d} title={d} row={false}>
            <Stack direction={d} gap={8}>
              {items()}
            </Stack>
          </StorySection>
        ),
      )}
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
        <StorySection key={g} title={`${g}px`} row={false}>
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
      {(['start', 'center', 'end', 'stretch', 'baseline'] as const).map((a) => (
        <StorySection key={a} title={`align ${a}`} row={false}>
          <Stack direction='row' gap={8} align={a} style={{ height: 80 }}>
            <div style={box}>A</div>
            <div style={{ ...box, padding: '24px 16px' }}>B</div>
          </Stack>
        </StorySection>
      ))}
      {(['start', 'center', 'end', 'between', 'around', 'evenly'] as const).map(
        (j) => (
          <StorySection key={j} title={`justify ${j}`} row={false}>
            <Stack direction='row' gap={8} justify={j}>
              {items()}
            </Stack>
          </StorySection>
        ),
      )}
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
  render: () => (
    <Stack direction={{ base: 'row', sm: 'column' }} gap={{ base: 24, sm: 8 }}>
      {items()}
    </Stack>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Row on wide screens, column with a smaller gap at the `sm` breakpoint and below. Use the viewport toolbar to resize.',
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
