import { Meta, StoryObj } from '@storybook/react'
import {
  Typography,
  H1,
  H2,
  H3,
  H4,
  Body,
  Description,
  H5,
  BodyLarge,
} from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Typography/Typography',
  component: Typography,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Typography>

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H3 weight='bold'>Heading 3 Bold</H3>
      <H4>Heading 4</H4>
      <H4 weight='bold'>Heading 4 Bold</H4>
      <H5>H5</H5>
      <H5 weight='bold'>H5</H5>
      <BodyLarge>BodyLarge</BodyLarge>
      <BodyLarge weight='medium'>BodyLarge Medium</BodyLarge>
      <BodyLarge weight='bold'>BodyLarge Bold</BodyLarge>
      <Body>Body</Body>
      <Body weight='bold'>Body Bold</Body>
      <Description>Description</Description>
      <Description weight='bold'>Description Bold</Description>
    </div>
  ),
}

AllStates.parameters = {
  controls: { disable: true },
}

const storyDescription = `
In typography, styles are applied to classes .ui-typography-h1, .ui-typography-h2, .ui-typography-control, etc. It contains in the TypographyByClasses story
`

export const TypographyByClasses = () => {
  const classes = [
    'ui-typography-h1',
    'ui-typography-h2',
    'ui-typography-h3',
    'ui-typography-h3-bold',
    'ui-typography-h4',
    'ui-typography-h4-bold',
    'ui-typography-h5',
    'ui-typography-h5-bold',
    'ui-typography-body-large',
    'ui-typography-body-large-medium',
    'ui-typography-body-large-bold',
    'ui-typography-body',
    'ui-typography-body-bold',
    'ui-typography-description',
    'ui-typography-description-bold',
  ]
  const sampleText = 'The quick brown fox jumps over the lazy dog.'

  return (
    <div style={{ padding: 20 }}>
      <p style={{ marginBottom: 50 }}>{storyDescription}</p>
      {classes.map((cls) => (
        <div key={cls} className={cls} style={{ marginBottom: 20 }}>
          <span style={{ color: '#888', fontSize: 12, marginRight: 8 }}>
            .{cls}
          </span>
          {sampleText}
        </div>
      ))}
    </div>
  )
}

TypographyByClasses.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: storyDescription,
    },
  },
}
