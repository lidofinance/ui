import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import {
  Body,
  BodyLarge,
  Description,
  GroupName,
  H1,
  H2,
  H3,
  Typography,
} from '.'

const meta: Meta<typeof Typography> = {
  title: 'Foundations/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    variant: 'body',
    children: 'The quick brown fox jumps over the lazy dog',
  },
  argTypes: {
    variant: {
      description: 'Type style; also decides the default tag',
      options: [
        'h1',
        'h2',
        'h3',
        'bodyLarge',
        'body',
        'description',
        'groupName',
      ],
      control: { type: 'select' },
    },
    weight: {
      description: 'Only bodyLarge and body have two weights',
      options: ['regular', 'semibold'],
      control: { type: 'inline-radio' },
    },
    as: { description: 'Override the rendered tag without changing the style' },
    children: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Typed text in Manrope. Use the named shortcuts (`H1`, `Body`, `Description`…) in app code and the generic `Typography` when the variant is dynamic. The same styles are available as PostCSS mixins from `@lidofinance/lido-app-ui/styles`.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Scale: Story = {
  render: () => (
    <StoryContainer gap={20}>
      <H1>H1 — 42/58</H1>
      <H2>H2 — 32/46</H2>
      <H3>H3 — 24/34</H3>
      <BodyLarge>BodyLarge regular — 16/24</BodyLarge>
      <BodyLarge weight='semibold'>BodyLarge semibold — 16/24</BodyLarge>
      <Body>Body regular — 14/22</Body>
      <Body weight='semibold'>Body semibold — 14/22</Body>
      <Description>Description — 12/20</Description>
      <GroupName>Group name — 12/20 uppercase</GroupName>
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The whole scale, labelled size/line-height. H1 and H2 shrink below 900px — switch to the 375px viewport and they drop to 34/48 and 28/40.',
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
