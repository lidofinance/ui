import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { Input } from '../input'
import { Disclosure } from '.'
import styles from './stories.module.css'

const FIGMA =
  'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/?node-id=6057-40941'

const meta = {
  title: 'Content & Data/Disclosure',
  component: Disclosure,
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: FIGMA },
    docs: {
      description: {
        component:
          'Collapsible section; controlled via `open` + `onOpenChange`, content stays mounted during the exit animation, then unmounts.',
      },
    },
  },
  args: {
    label: 'Specify custom reward address',
  },
  argTypes: {
    open: { control: false },
  },
} satisfies Meta<typeof Disclosure>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <div style={{ width: 540 }}>
      <Disclosure {...args}>
        <Input label='Reward address' placeholder='0x...' />
      </Disclosure>
    </div>
  ),
}

export const DefaultOpen: Story = {
  args: { defaultOpen: true },
  parameters: {
    docs: { description: { story: 'Uncontrolled, starts expanded.' } },
  },
  render: Basic.render,
}

export const Controlled: Story = {
  parameters: {
    docs: {
      source: { type: 'code' },
      description: {
        story:
          'State owned by the parent: collapsing discards the custom address.',
      },
    },
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false)
    const [address, setAddress] = useState('')

    return (
      <div style={{ width: 540 }}>
        <Disclosure
          {...args}
          open={open}
          onOpenChange={(next) => {
            setOpen(next)
            if (next) setAddress('')
          }}
        >
          <Input
            label='Reward address'
            placeholder='0x...'
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </Disclosure>
      </div>
    )
  },
}

export const States: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Collapsed and expanded, then the same two with the header hover background forced.',
      },
    },
  },
  render: (args) => (
    <StoryContainer>
      <StorySection row={false} style={{ width: 540 }}>
        <Disclosure {...args}>Hidden text</Disclosure>
        <Disclosure {...args} defaultOpen>
          Optional text revealed by the toggle.
        </Disclosure>
        <Disclosure {...args} className={styles.forceHover}>
          Hidden text
        </Disclosure>
        <Disclosure {...args} className={styles.forceHover} defaultOpen>
          Optional text revealed by the toggle.
        </Disclosure>
      </StorySection>
    </StoryContainer>
  ),
}
