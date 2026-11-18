import { useCallback, useId, useMemo, useRef } from 'react'

import { useControllableState } from '../hooks'

export type UseSidebarDrawerOptions = {
  id?: string
  defaultOpen?: boolean
  /** Controlled state; pair with `onOpenChange`. */
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export type UseSidebarDrawerResult = {
  open: boolean
  setOpen: (open: boolean) => void
  sidebarProps: { id: string; open: boolean; onClose: () => void }
  toggleProps: {
    onClick: () => void
    'aria-expanded': boolean
    'aria-controls': string
  }
}

/**
 * Wires Sidebar and SidebarToggle together: spread `sidebarProps` and `toggleProps`.
 * @deprecated use SidebarLayout
 */
export const useSidebarDrawer = ({
  id: idOption,
  defaultOpen,
  open: openProp,
  onOpenChange,
}: UseSidebarDrawerOptions = {}): UseSidebarDrawerResult => {
  const generatedId = useId()
  const id = idOption ?? generatedId
  const [state, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
    name: 'useSidebarDrawer',
    prop: 'open',
  })
  const open = state ?? false

  const openRef = useRef(open)
  openRef.current = open
  const onClose = useCallback(() => setOpen(false), [setOpen])
  const onClick = useCallback(() => setOpen(!openRef.current), [setOpen])

  return useMemo(
    () => ({
      open,
      setOpen,
      sidebarProps: { id, open, onClose },
      toggleProps: { onClick, 'aria-expanded': open, 'aria-controls': id },
    }),
    [open, setOpen, id, onClose, onClick],
  )
}
