import { Story, Meta } from '@storybook/react'
import { useCallback, useRef, useState } from 'react'
import { Button } from '@lidofinance/button'
import { PopupMenuProps, PopupMenuSize } from './types'
import { Eth, Steth, Solana } from '@lidofinance/icons'
import PopupMenu from './PopupMenu'
import PopupMenuItem from './PopupMenuItem'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: PopupMenu,
  title: 'Dialogs/PopupMenu',
  args: {
    size: 'medium',
  },
  argTypes: {
    size: {
      options: getOptions(PopupMenuSize),
      control: 'inline-radio',
    },
  },
} as Meta

export const Basic: Story<PopupMenuProps> = (props) => {
  const { onClose } = props

  const [state, setState] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)

  const handleToggle = useCallback(() => {
    setState((state) => !state)
  }, [])

  const handleClose = useCallback(() => {
    setState(false)
    onClose?.()
  }, [onClose])

  return (
    <>
      <Button size='sm' onClick={handleToggle} ref={anchorRef}>
        Open Menu
      </Button>
      {state && (
        <PopupMenu
          {...props}
          style={{ width: 200 }}
          onClose={handleClose}
          anchorRef={anchorRef}
        >
          <PopupMenuItem onClick={handleClose} leftDecorator={<Eth />}>
            Ethereum (ETH)
          </PopupMenuItem>
          <PopupMenuItem onClick={handleClose} leftDecorator={<Steth />}>
            Lido (STETH)
          </PopupMenuItem>
          <PopupMenuItem disabled leftDecorator={<Solana />}>
            Solana (SOL)
          </PopupMenuItem>
        </PopupMenu>
      )}
    </>
  )
}
