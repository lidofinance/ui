import type { Meta, StoryObj } from '@storybook/react'

import { Identicon } from '../identicon'
import { Tag } from '../tag'
import { MenuItem } from './MenuItem'

const meta: Meta<typeof MenuItem> = {
  title: 'Navigation/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Full-width menu row with optional leading avatar and trailing slot. Renders an anchor when `href` is set, a button otherwise; wrap the app in `LinkProvider` to route in-app hrefs through your router.',
      },
    },
  },
}

export default meta
type Story = StoryObj

const menu = { display: 'flex', flexDirection: 'column', width: 320 } as const

const address = (n: number) => `0x${n.toString(16).padStart(40, '0')}`

export const Basic: Story = {
  render: () => (
    <nav style={menu}>
      <MenuItem href='#' active>
        CSM#182
      </MenuItem>
      <MenuItem href='#'>CSM#204</MenuItem>
      <MenuItem onClick={() => undefined}>CSM#311</MenuItem>
    </nav>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <nav style={menu}>
      <MenuItem
        href='#'
        active
        avatar={<Identicon address={address(182)} size={24} />}
      >
        CSM#182
      </MenuItem>
      <MenuItem
        href='#'
        avatar={<Identicon address={address(204)} size={24} />}
      >
        CSM#204
      </MenuItem>
      <MenuItem
        onClick={() => undefined}
        avatar={<Identicon address={address(311)} size={24} />}
      >
        CSM#311
      </MenuItem>
    </nav>
  ),
}

export const WithTrailing: Story = {
  render: () => (
    <nav style={menu}>
      <MenuItem
        href='#'
        active
        avatar={<Identicon address={address(182)} size={24} />}
        trailing={<Tag variant='success'>Active</Tag>}
      >
        CSM#182
      </MenuItem>
      <MenuItem
        href='#'
        avatar={<Identicon address={address(204)} size={24} />}
        trailing={
          <>
            <Tag variant='warning'>Jailed</Tag>
            <Tag variant='neutral'>3</Tag>
          </>
        }
      >
        CSM#204
      </MenuItem>
    </nav>
  ),
}

export const Disabled: Story = {
  render: () => (
    <nav style={menu}>
      <MenuItem href='#'>CSM#182</MenuItem>
      <MenuItem href='#' disabled>
        CSM#204
      </MenuItem>
      <MenuItem onClick={() => undefined}>CSM#311</MenuItem>
    </nav>
  ),
}
