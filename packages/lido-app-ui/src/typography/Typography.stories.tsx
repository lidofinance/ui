import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import {
  Body,
  Description,
  H2,
  Typography,
  typographyColors,
  typographyWeights,
  type TypographyVariant,
  type TypographyWeight,
} from '.'
import styles from './Typography.stories.module.css'

const meta: Meta<typeof Typography> = {
  title: 'Foundations/Typography',
  component: Typography,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/Interface-Design-System?node-id=4442-3006&m=dev',
    },
  },
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
      options: typographyWeights,
      control: { type: 'select' },
      type: { name: 'enum', value: [...typographyWeights] },
      table: {
        type: { summary: typographyWeights.map((w) => `'${w}'`).join(' | ') },
      },
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

type ScaleRow = {
  label: string
  variant?: TypographyVariant
  weight?: TypographyWeight
  shortcut?: string
  mixin: string
  size: string
  note?: string
}

const scale: ScaleRow[] = [
  { label: '404', mixin: 'font-display', size: '112/136', note: 'mixin only' },
  { label: 'Amount', variant: 'amount', mixin: 'font-amount', size: '36/50' },
  {
    label: 'H1',
    variant: 'h1',
    shortcut: 'H1',
    mixin: 'font-h1',
    size: '42/58',
  },
  {
    label: 'H2',
    variant: 'h2',
    shortcut: 'H2',
    mixin: 'font-h2',
    size: '28/40',
  },
  {
    label: 'H3',
    variant: 'h3',
    shortcut: 'H3',
    mixin: 'font-h3',
    size: '24/36',
  },
  {
    label: 'BodyLarge',
    variant: 'bodyLarge',
    shortcut: 'BodyLarge',
    mixin: 'font-body-large',
    size: '16/28',
  },
  {
    label: 'BodyLarge semibold',
    variant: 'bodyLarge',
    weight: 'semibold',
    shortcut: 'BodyLarge',
    mixin: 'font-body-large-semibold',
    size: '16/28',
  },
  {
    label: 'Body',
    variant: 'body',
    shortcut: 'Body',
    mixin: 'font-body',
    size: '14/24',
  },
  {
    label: 'Body semibold',
    variant: 'body',
    weight: 'semibold',
    shortcut: 'Body',
    mixin: 'font-body-semibold',
    size: '14/24',
  },
  {
    label: 'Description',
    variant: 'description',
    shortcut: 'Description',
    mixin: 'font-description',
    size: '12/20',
  },
  {
    label: 'Description semibold',
    variant: 'description',
    weight: 'semibold',
    shortcut: 'Description',
    mixin: 'font-description-semibold',
    size: '12/20',
  },
  {
    label: 'Caption',
    variant: 'caption',
    shortcut: 'Caption',
    mixin: 'font-caption',
    size: '12/20',
    note: 'uppercase',
  },
]

const scaleMeta = ({
  variant,
  weight,
  shortcut,
  mixin,
  size,
  note,
}: ScaleRow) =>
  [
    variant && `variant='${variant}'${weight ? ` weight='${weight}'` : ''}`,
    shortcut && `<${shortcut}>`,
    `@mixin ${mixin}`,
    size,
    note,
  ]
    .filter(Boolean)
    .join(' · ')

export const Scale: Story = {
  render: () => (
    <StoryContainer gap={16}>
      {scale.map((row) => (
        <div key={row.label}>
          {row.variant ? (
            <Typography variant={row.variant} weight={row.weight}>
              {row.label}
            </Typography>
          ) : (
            <p className={styles.display}>{row.label}</p>
          )}
          <Description color='tertiary'>{scaleMeta(row)}</Description>
        </div>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The whole scale: variant, shortcut, PostCSS mixin, size/line-height. `Caption` is the uppercase overline; for plain 12px secondary text use `Description` with `color="secondary"`.',
      },
    },
  },
}

export const Weights: Story = {
  render: () => (
    <StoryContainer gap={16}>
      {typographyWeights.map((weight) => (
        <div key={weight}>
          <Body weight={weight}>{weight}</Body>
          <H2 weight={weight}>{weight}</H2>
          <Description color='tertiary'>
            {`weight='${weight}' · --lido-app-ui-font-weight-${weight}`}
          </Description>
        </div>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "`weight` overrides the variant's default on any variant or shortcut; `thin` is Manrope ExtraLight (200).",
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
