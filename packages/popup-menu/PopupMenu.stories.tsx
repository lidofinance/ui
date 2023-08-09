import { StoryFn, Meta } from '@storybook/react'
import { useCallback, useRef, useState } from 'react'
import { Button } from '../button'
import { PopupMenu, PopupMenuItem, PopupMenuProps, PopupMenuVariant } from '.'
import { Eth, Steth, Solana } from '../icons'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: PopupMenu,
  title: 'Dialogs/PopupMenu',
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      options: getOptions(PopupMenuVariant),
      control: 'inline-radio',
    },
  },
} satisfies Meta

const usePopup = (props: PopupMenuProps) => {
  const { onClose } = props

  const [state, setState] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)

  const handleOpen = useCallback(() => {
    setState(true)
  }, [])

  const handleClose = useCallback(() => {
    setState(false)
    onClose?.()
  }, [onClose])

  return {
    state,
    anchorRef,
    handleOpen,
    handleClose,
  }
}

export const Basic: StoryFn<PopupMenuProps> = (props) => {
  const { state, anchorRef, handleOpen, handleClose } = usePopup(props)

  return (
    <>
      <Button size='sm' onClick={handleOpen} ref={anchorRef}>
        Open Menu
      </Button>
      <PopupMenu
        {...props}
        open={state}
        style={{ width: 200 }}
        onClose={handleClose}
        anchorRef={anchorRef}
      >
        <PopupMenuItem onClick={handleClose}>Ethereum (ETH)</PopupMenuItem>
        <PopupMenuItem onClick={handleClose}>Lido (STETH)</PopupMenuItem>
        <PopupMenuItem onClick={handleClose}>Solana (SOL)</PopupMenuItem>
      </PopupMenu>
    </>
  )
}

export const Icons: StoryFn<PopupMenuProps> = (props) => {
  const { state, anchorRef, handleOpen, handleClose } = usePopup(props)

  return (
    <>
      <Button size='sm' onClick={handleOpen} ref={anchorRef}>
        Open Menu
      </Button>
      <PopupMenu
        {...props}
        open={state}
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
        <PopupMenuItem onClick={handleClose} leftDecorator={<Solana />}>
          Solana (SOL)
        </PopupMenuItem>
      </PopupMenu>
    </>
  )
}

export const WithDisabled: StoryFn<PopupMenuProps> = (props) => {
  const { state, anchorRef, handleOpen, handleClose } = usePopup(props)

  return (
    <>
      <Button size='sm' onClick={handleOpen} ref={anchorRef}>
        Open Menu
      </Button>
      <PopupMenu
        {...props}
        open={state}
        style={{ width: 200 }}
        onClose={handleClose}
        anchorRef={anchorRef}
      >
        <PopupMenuItem onClick={handleClose}>Ethereum (ETH)</PopupMenuItem>
        <PopupMenuItem onClick={handleClose}>Lido (STETH)</PopupMenuItem>
        <PopupMenuItem disabled>Solana (SOL)</PopupMenuItem>
      </PopupMenu>
    </>
  )
}
