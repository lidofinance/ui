import {
  useEffect,
  useContext,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
} from 'react'

import cn from 'classnames'

import {
  useBodyScrollLock,
  useEscape,
  useFocusTrap,
  useIsomorphicLayoutEffect,
} from '../hooks'
import { CloseButton } from '../icon-button'
import styles from './Sidebar.module.css'
import { SidebarContext } from './SidebarContext'

// mirrors --lido-app-ui-breakpoint-ml-down (styles/breakpoints.css)
export const DRAWER_QUERY = '(max-width: 1063px)'

const OFFSET_VAR = '--local-measured-offset'

const useIsDrawerViewport = () => {
  const [matches, setMatches] = useState(false)

  useIsomorphicLayoutEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const mql = window.matchMedia(DRAWER_QUERY)
    const update = () => setMatches(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  return matches
}

const isPlainLinkClick = (event: MouseEvent<HTMLDivElement>) => {
  if (event.button !== 0) return false
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
    return false
  const link = (event.target as Element).closest?.('a[href]')
  if (!link || !event.currentTarget.contains(link)) return false
  const target = link.getAttribute('target') ?? ''
  return target === '' || target === '_self'
}

export type SidebarProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  logo?: ReactNode
  footer?: ReactNode
  children?: ReactNode
  /** Drawer state; only has an effect at `ml-down` widths. Defaults to the SidebarLayout's. */
  open?: boolean
  onClose?: () => void
  navLabel?: string
  /** Close the drawer when a link inside is clicked. */
  closeOnNavigate?: boolean
}

export const Sidebar = ({
  logo,
  footer,
  children,
  open: openProp,
  onClose: onCloseProp,
  id: idProp,
  navLabel = 'Primary',
  closeOnNavigate = true,
  className,
  onClick,
  'aria-label': ariaLabel = 'Main navigation',
  ...rest
}: SidebarProps) => {
  const context = useContext(SidebarContext)
  const open = openProp ?? context?.sidebarProps.open ?? false
  const onClose = onCloseProp ?? context?.sidebarProps.onClose
  const id = idProp ?? context?.sidebarProps.id
  const [root, setRoot] = useState<HTMLElement | null>(null)
  const isDrawerViewport = useIsDrawerViewport()

  useIsomorphicLayoutEffect(() => {
    const parent = root?.parentElement
    if (!root || !parent) return

    let last = ''
    const measure = () => {
      const top = parent.getBoundingClientRect().top + window.scrollY
      const value = `${Math.max(0, Math.round(top))}px`
      if (value === last) return
      last = value
      root.style.setProperty(OFFSET_VAR, value)
    }

    measure()
    window.addEventListener('resize', measure)
    const observer =
      typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure)
    observer?.observe(document.documentElement)
    return () => {
      window.removeEventListener('resize', measure)
      observer?.disconnect()
    }
  }, [root])

  const drawerActive = open && isDrawerViewport

  const wasDrawerViewport = useRef(isDrawerViewport)
  useEffect(() => {
    if (wasDrawerViewport.current && !isDrawerViewport && open) onClose?.()
    wasDrawerViewport.current = isDrawerViewport
  }, [isDrawerViewport, open, onClose])

  useBodyScrollLock(drawerActive)
  useFocusTrap(root, drawerActive)
  useEscape(drawerActive && !!onClose, () => onClose?.())

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    onClick?.(event)
    if (closeOnNavigate && drawerActive && onClose && isPlainLinkClick(event))
      onClose()
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- scrim is a pointer-only dismiss target; Escape closes via useEscape */}
      <div
        className={cn(styles.scrim, open && styles.scrimOpen)}
        onClick={onClose}
        aria-hidden='true'
      />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- delegated link-click handler; links are natively keyboard-activatable */}
      <div
        ref={setRoot}
        id={id}
        role={drawerActive ? 'dialog' : undefined}
        aria-modal={drawerActive || undefined}
        aria-label={drawerActive ? ariaLabel : undefined}
        data-open={open}
        className={cn(styles.sidebar, className)}
        onClick={handleClick}
        {...rest}
      >
        {logo != null || onClose ? (
          <div
            className={cn(
              styles.logoRow,
              logo == null && styles.logoRowCloseOnly,
            )}
          >
            <div className={styles.logo}>{logo}</div>
            {onClose ? (
              <CloseButton
                aria-label='Close menu'
                onClick={onClose}
                className={styles.closeButton}
              />
            ) : null}
          </div>
        ) : null}
        <div className={styles.scroll}>
          <nav aria-label={navLabel} className={styles.menu}>
            {children}
          </nav>
        </div>
        {footer != null ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </>
  )
}
