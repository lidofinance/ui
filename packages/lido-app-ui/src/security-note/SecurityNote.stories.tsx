import type { Meta, StoryObj } from '@storybook/react'
import { SecurityNote } from '.'
import { IconLockKeyhole } from '../icons'

const meta: Meta<typeof SecurityNote> = {
  title: 'Content & Data/SecurityNote',
  component: SecurityNote,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/Interface-Design-System?node-id=6256-22356',
    },
    docs: {
      description: {
        component:
          'Centered muted note with a shield glyph, placed under the main button of a widget. Defaults to the "Non-custodial. Audited. Open-source." copy.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const CustomContent: Story = {
  args: {
    icon: <IconLockKeyhole />,
    children: 'Your keys never leave your wallet.',
  },
}

export const WithoutIcon: Story = {
  args: { icon: null },
}
