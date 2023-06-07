import { useCallback, useRef, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from '@lidofinance/button'
import { Popover, DEFAULT_PLACEMENT, PopoverProps, PopoverPlacement, PopoverOffset } from '.'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Popover,
  title: 'Dialogs/Popover',
  parameters: {
    layout: 'centered',
  },
  args: {
    backdrop: true,
    offset: 'xs',
    placement: DEFAULT_PLACEMENT,
  },
  argTypes: {
    backdrop: {
      control: 'boolean',
    },
    offset: {
      options: getOptions(PopoverOffset),
      control: 'inline-radio',
    },
    placement: {
      options: getOptions(PopoverPlacement),
      control: 'radio',
    },
    onClose: {
      action: 'close',
      table: { disable: true },
    },
  },
} as Meta

export const Basic: Story<PopoverProps> = (props) => {
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
        Open Popover
      </Button>
      <Popover
        {...props}
        open={state}
        onClose={handleClose}
        anchorRef={anchorRef}
      >
        Popover
      </Popover>
    </>
  )
}
