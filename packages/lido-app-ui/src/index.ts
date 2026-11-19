import { ThemeToggler as SharedThemeToggler } from '@lidofinance/lido-shared-ui'

import {
  Portal as InternalPortal,
  useBodyScrollLock as internalUseBodyScrollLock,
  useEscape as internalUseEscape,
  useFocusTrap as internalUseFocusTrap,
  useOutsideClick as internalUseOutsideClick,
  usePresence as internalUsePresence,
} from './hooks'
import type {
  FocusTrapOptions as InternalFocusTrapOptions,
  PortalProps as InternalPortalProps,
  Presence as InternalPresence,
  PresenceMotionProps as InternalPresenceMotionProps,
  PresenceStatus as InternalPresenceStatus,
  UsePresenceOptions as InternalUsePresenceOptions,
} from './hooks'

export * from './icons'

export * from './accordion'
export * from './address'
export * from './address-button'
export * from './badge'
export * from './banner'
export * from './breadcrumbs'
export * from './button'
export * from './card'
export * from './checkbox'
export * from './checkbox-row'
export * from './copy'
export * from './counter'
export * from './data-list'
export * from './disclaimer'
export * from './disclosure'
export * from './divider'
export * from './drawer'
export * from './empty-state'
export * from './error-page'
export * from './fab'
export * from './field'
export * from './footer'
export * from './grid'
export * from './header'
export * from './hex'
export * from './hidden'
export * from './icon-button'
export * from './identicon'
export * from './info-tooltip'
export * from './input'
export * from './link-provider'
export * from './action-list'
export * from './logo'
export * from './message-box'
export * from './modal'
export * from './nav-link'
export * from './notification'
export * from './page-layout'
export * from './pagination'
export * from './popover'
export * from './progress-bar'
export * from './radio-button'
export * from './rich-input'
export * from './section-title'
export * from './segmented-control'
export * from './select'
export * from './sidebar'
export * from './skeleton'
export * from './skip-link'
export * from './slider'
export * from './small-card'
export * from './spinner'
export * from './stack'
export * from './stat-item'
export * from './steps'
export * from './switch'
export * from './table'
export * from './tabs'
export * from './tag'
export * from './text-link'
export * from './textarea'
export * from './theme-switcher'
export * from './toast'
export * from './token-amount'
export * from './token-selector'
export * from './tooltip'
export * from './tx-status'
export * from './typography'
export * from './visually-hidden'
export type { DismissAttemptDetails, DismissReason } from './hooks'
export {
  breakpoints,
  breakpointWidths,
  downQuery,
  upQuery,
  spaces,
} from './utils'
export type { Breakpoint, Responsive, Space } from './utils'

// Everything lido-shared-ui exposes is re-exported, so app products get the
// same non-production banner and theming primitives as the landing. Their
// styles come in through src/styles/global.css.
export * from '@lidofinance/lido-shared-ui'

/** Unstyled in app-ui (relies on `--lido-ui-*` tokens); prefer `ThemeSwitcher`. */
export const ThemeToggler = SharedThemeToggler

/** @deprecated Internal overlay plumbing, will be removed in the next major; use Modal, Drawer or Popover. */
export const Portal = InternalPortal

/** @deprecated Internal overlay plumbing, will be removed in the next major; use Modal, Drawer or Popover. */
export const useBodyScrollLock = internalUseBodyScrollLock

/** @deprecated Internal overlay plumbing, will be removed in the next major; use Modal, Drawer or Popover. */
export const useEscape = internalUseEscape

/** @deprecated Internal overlay plumbing, will be removed in the next major; use Modal, Drawer or Popover. */
export const useFocusTrap = internalUseFocusTrap

/** @deprecated Internal overlay plumbing, will be removed in the next major; use Modal, Drawer or Popover. */
export const useOutsideClick = internalUseOutsideClick

/** @deprecated Internal overlay plumbing, will be removed in the next major; use Modal, Drawer or Popover. */
export const usePresence = internalUsePresence

/** @deprecated Internal overlay plumbing, will be removed in the next major; use Modal, Drawer or Popover. */
export type FocusTrapOptions = InternalFocusTrapOptions

/** @deprecated Internal overlay plumbing, will be removed in the next major; use Modal, Drawer or Popover. */
export type PortalProps = InternalPortalProps

/** @deprecated Internal overlay plumbing, will be removed in the next major; use Modal, Drawer or Popover. */
export type Presence<T extends HTMLElement> = InternalPresence<T>

/** @deprecated Internal overlay plumbing, will be removed in the next major; use Modal, Drawer or Popover. */
export type PresenceMotionProps = InternalPresenceMotionProps

/** @deprecated Internal overlay plumbing, will be removed in the next major; use Modal, Drawer or Popover. */
export type PresenceStatus = InternalPresenceStatus

/** @deprecated Internal overlay plumbing, will be removed in the next major; use Modal, Drawer or Popover. */
export type UsePresenceOptions = InternalUsePresenceOptions
