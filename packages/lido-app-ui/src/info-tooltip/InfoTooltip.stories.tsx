import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer, StorySection } from '../../.storybook/components'
import { IconLockKeyhole } from '../icons'
import { InfoTooltip } from '.'

const meta: Meta<typeof InfoTooltip> = {
  title: 'Content & Data/InfoTooltip',
  component: InfoTooltip,
  tags: ['autodocs'],
  args: {
    content: 'Splitter addresses receive stETH.',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'xl'],
      table: { defaultValue: { summary: 'md' } },
    },
    tone: {
      control: { type: 'inline-radio' },
      options: ['secondary', 'tertiary', 'inherit'],
    },
    position: {
      control: { type: 'select' },
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
      ],
    },
  },
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/Interface-Design-System?node-id=6568-23189&m=dev',
    },
    docs: {
      description: {
        component:
          'An icon (info by default) that reveals a `Tooltip` on hover, keyboard focus or tap. Focusable, with an `aria-label` of "More info" unless overridden.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Sizes: Story = {
  render: (args) => (
    <StoryContainer>
      {(['secondary', 'tertiary'] as const).map((tone) => (
        <StorySection key={tone} title={tone}>
          {(['sm', 'md', 'xl'] as const).map((size) => (
            <InfoTooltip
              key={size}
              content={args.content}
              size={size}
              tone={tone}
            />
          ))}
        </StorySection>
      ))}
    </StoryContainer>
  ),
  parameters: {
    controls: { include: ['content'] },
    docs: {
      description: {
        story:
          '`sm` 12px, `md` 16px (default), `xl` 20px. The hit area extends 4px around the icon (20, 24 and 28px) without changing layout. Hover darkens the icon one step: secondary to default, tertiary to secondary. Numeric `16`/`20` still work as deprecated aliases of `md`/`xl`.',
      },
    },
  },
}

export const TertiaryTone: Story = {
  args: { tone: 'tertiary' },
}

export const InheritTone: Story = {
  render: () => (
    <span style={{ color: 'var(--lido-app-ui-color-text-warning)' }}>
      <InfoTooltip content='Inherits the warning colour.' tone='inherit' />
    </span>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: '`inherit` takes the surrounding text colour.' },
    },
  },
}

export const RichContent: Story = {
  args: {
    content: (
      <>
        <strong>Rewards Address</strong>
        <br />
        Splitter addresses receive stETH. Choose the token for your Rewards
        Address.
      </>
    ),
  },
}

export const CustomIcon: Story = {
  args: {
    icon: <IconLockKeyhole />,
    size: 'xl',
    'aria-label': 'Locked',
    content: 'Amount is fixed by the bond curve.',
  },
}

export const Row: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {['Operator', 'Keys', 'Bond', 'Rewards', 'Status'].map((name) => (
        <InfoTooltip key={name} content={`About ${name.toLowerCase()}.`} />
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Once one tooltip is open, moving to a neighbour opens it at once, without the 400ms wait, and only one stays open.',
      },
    },
  },
}
