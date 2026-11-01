import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import {
  Body,
  BodyLarge,
  Description,
  Caption,
  H1,
  H2,
  H3,
  Typography,
  typographyColors,
} from '.'

const meta: Meta<typeof Typography> = {
  title: 'Foundations/Typography',
  component: Typography,
  args: {
    variant: 'body',
    children: 'The quick brown fox jumps over the lazy dog',
  },
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'amount',
        'bodyLarge',
        'body',
        'description',
        'caption',
      ],
      control: { type: 'select' },
    },
    weight: {
      options: ['regular', 'semibold'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: typographyColors,
      control: { type: 'select' },
      // docgen can't resolve `(typeof typographyColors)[number]`; without this, URL args drop it and the table shows `unknown`
      type: { name: 'enum', value: [...typographyColors] },
      table: {
        type: { summary: typographyColors.map((c) => `'${c}'`).join(' | ') },
      },
    },
    children: { control: { type: 'text' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Scale: Story = {
  render: () => (
    <StoryContainer gap={20}>
      <H1>H1 — 42/58</H1>
      <div>
        <div
          style={{
            fontFamily: 'var(--lido-app-ui-font-family)',
            fontSize: 'var(--lido-app-ui-font-size-display)',
            fontWeight: 'var(--lido-app-ui-font-weight-semibold)',
            lineHeight: 'var(--lido-app-ui-line-height-display)',
            letterSpacing: 'var(--lido-app-ui-letter-spacing-display)',
            color: 'var(--lido-app-ui-color-text-default)',
          }}
        >
          Display — 112/136
        </div>
        <Description>mixin only: @mixin font-display</Description>
      </div>
      <H2>H2 — 28/40</H2>
      <H3>H3 — 24/36</H3>
      <Typography variant='amount'>Amount — 36/50</Typography>
      <BodyLarge>BodyLarge regular — 16/28</BodyLarge>
      <BodyLarge weight='semibold'>BodyLarge semibold — 16/28</BodyLarge>
      <Body>Body regular — 14/24</Body>
      <Body weight='semibold'>Body semibold — 14/24</Body>
      <Description>Description regular — 12/20</Description>
      <Description weight='semibold'>Description semibold — 12/20</Description>
      <Caption>Caption — 12/20 uppercase</Caption>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'The whole scale, labelled size/line-height.',
      },
    },
  },
}

export const Colors: Story = {
  render: () => (
    <StoryContainer gap={8}>
      {typographyColors.map((color) => (
        <div
          key={color}
          style={
            color === 'inverse'
              ? {
                  width: 'fit-content',
                  background: 'var(--lido-app-ui-color-background-action)',
                  padding: '4px 8px',
                  borderRadius: 8,
                }
              : undefined
          }
        >
          <Typography color={color}>{color}</Typography>
        </div>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Without `color` the text inherits. `inverse` is for filled action surfaces like Button and Tag.',
      },
    },
  },
}

export const PolymorphicTag: Story = {
  args: {
    variant: 'h2',
    as: 'div',
    children: 'H2 styles rendered as a div',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `as` when the visual weight and the document outline disagree — heading styles inside a card that should not be an `<h2>`.',
      },
    },
  },
}
