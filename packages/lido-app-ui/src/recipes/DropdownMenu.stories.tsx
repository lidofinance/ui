import { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { IconArrowNarrowUpRight, IconCopy, IconLogout } from '../icons'
import { Popover } from '../popover'
import { SelectItem } from '../select'
import { Stack } from '../stack'

const actions = [
  { label: 'Copy address', icon: <IconCopy /> },
  { label: 'View on Etherscan', icon: <IconArrowNarrowUpRight /> },
  { label: 'Disconnect', icon: <IconLogout /> },
]

const meta: Meta = {
  title: 'Recipes/Dropdown Menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Action menu: a `Button` trigger, a modal `Popover` and `SelectItem as="button"` rows. Picking an action closes the menu.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false)
    const [last, setLast] = useState<string>()
    const triggerRef = useRef<HTMLButtonElement>(null)

    return (
      <div style={{ minHeight: 240 }}>
        <Button
          ref={triggerRef}
          variant='outline'
          onClick={() => setOpen((value) => !value)}
        >
          Account
        </Button>
        {last ? <p>Last action: {last}</p> : null}
        <Popover
          aria-label='Account actions'
          open={open}
          onClose={() => setOpen(false)}
          anchorRef={triggerRef}
        >
          <Stack gap={4}>
            {actions.map(({ label, icon }) => (
              <SelectItem
                key={label}
                as='button'
                size='small'
                icon={icon}
                label={label}
                onClick={() => {
                  setLast(label)
                  setOpen(false)
                }}
              />
            ))}
          </Stack>
        </Popover>
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
  },
}
