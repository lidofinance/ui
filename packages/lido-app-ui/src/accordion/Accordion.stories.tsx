import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '.'

import { StoryContainer } from '../../.storybook/components'

const meta: Meta<typeof Accordion> = {
  title: 'Layout/Accordion',
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
