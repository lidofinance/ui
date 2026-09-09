import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { Accordion } from '.'

const meta: Meta<typeof Accordion> = {
  title: 'Content Organization/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    title: 'What is Lido?',
    border: true,
    defaultExpanded: false,
    children:
      'Lido is the name of a family of open-source peer-to-system software tools deployed and functioning on the Ethereum blockchain network. The software enables users to mint transferable utility tokens, which receive rewards linked to the related validation activities of writing data to the blockchain, while the tokens can be used in other on-chain activities.',
  },
  argTypes: {
    title: { control: { type: 'text' } },
    border: { control: { type: 'boolean' } },
    defaultExpanded: { control: { type: 'boolean' } },
    expanded: {
      description: 'Controlled mode — pair with `onExpandedChange`',
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Uncontrolled by default (`defaultExpanded`); pass `expanded` + `onExpandedChange` to drive it from your own state. `border` toggles the bottom divider — turn it off on the last item of a list.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const List: Story = {
  render: (args) => (
    <StoryContainer gap={0} style={{ width: 540 }}>
      <Accordion
        {...args}
        title={args.title ?? 'What is Lido?'}
        defaultExpanded
      />
      <Accordion {...args} title='What is stETH?' />
      <Accordion {...args} title='How do rewards work?' />
      <Accordion {...args} title='Is it safe?' border={false} />
    </StoryContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Stacked accordions with no gap — each divider comes from the accordion below it, so the last item drops `border`.',
      },
    },
  },
}

export const States: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: 48,
        flexWrap: 'wrap',
      }}
    >
      <StoryContainer gap={8} style={{ width: 540 }}>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'var(--lido-app-ui-color-text-secondary)',
          }}
        >
          Collapsed
        </p>
        <Accordion {...args} title={args.title ?? 'What is Lido?'} />
      </StoryContainer>
      <StoryContainer gap={8} style={{ width: 540 }}>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'var(--lido-app-ui-color-text-secondary)',
          }}
        >
          Expanded
        </p>
        <Accordion
          {...args}
          title={args.title ?? 'What is Lido?'}
          defaultExpanded
        />
      </StoryContainer>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Collapsed and expanded, side by side.',
      },
    },
  },
}

export const Controlled: Story = {
  render: function Render(args) {
    const [expanded, setExpanded] = useState(false)

    return (
      <StoryContainer style={{ width: 540 }}>
        <Accordion
          {...args}
          title={args.title ?? 'What is Lido?'}
          expanded={expanded}
          onExpandedChange={setExpanded}
        />
      </StoryContainer>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Pass `expanded` + `onExpandedChange` to drive it externally.',
      },
    },
  },
}
