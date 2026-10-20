import { useCallback, useId, useMemo, useRef, useState } from 'react'

export type UseSidebarDrawerOptions = {
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

/** Wires Sidebar and SidebarToggle together: spread `sidebarProps` and `toggleProps`. */
export const useSidebarDrawer = ({
  defaultOpen = false,
  open: openProp,
  onOpenChange,
}: UseSidebarDrawerOptions = {}): UseSidebarDrawerResult => {
  const id = useId()
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const controlled = openProp !== undefined
  const open = openProp ?? internalOpen

  const openRef = useRef(open)
  openRef.current = open
  const controlledRef = useRef(controlled)
  controlledRef.current = controlled
  const onOpenChangeRef = useRef(onOpenChange)
  onOpenChangeRef.current = onOpenChange

  const setOpen = useCallback((next: boolean) => {
    if (!controlledRef.current) setInternalOpen(next)
    onOpenChangeRef.current?.(next)
  }, [])
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
