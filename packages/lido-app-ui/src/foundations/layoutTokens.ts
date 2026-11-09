export const Z_INDEX = [
  { token: '--lido-app-ui-z-index-header', note: 'Sticky Header' },
  { token: '--lido-app-ui-z-index-overlay', note: 'Sidebar drawer scrim' },
  { token: '--lido-app-ui-z-index-sidebar', note: 'Sidebar drawer' },
  {
    token: '--lido-app-ui-z-index-popover',
    note: 'Popover, shares a layer with Modal',
  },
  {
    token: '--lido-app-ui-z-index-modal',
    note: 'Modal, shares a layer with Popover',
  },
  { token: '--lido-app-ui-z-index-toast', note: 'Notification toasts' },
  { token: '--lido-app-ui-z-index-tooltip', note: 'Tooltip, above everything' },
] as const

export const SHADOWS = ['--lido-app-ui-shadow-default'] as const

export const RADIUS_SCALE = [
  '--lido-app-ui-border-radius-none',
  '--lido-app-ui-border-radius-xs',
  '--lido-app-ui-border-radius-sm',
  '--lido-app-ui-border-radius-md',
  '--lido-app-ui-border-radius-lg',
  '--lido-app-ui-border-radius-xl',
  '--lido-app-ui-border-radius-full',
] as const

export const RADII = [
  '--lido-app-ui-border-radius-skeleton',
  '--lido-app-ui-border-radius-badge',
  '--lido-app-ui-border-radius-dropdown-item',
  '--lido-app-ui-border-radius-card',
  '--lido-app-ui-border-radius-dropdown',
  '--lido-app-ui-border-radius-tooltip',
  '--lido-app-ui-border-radius-modal',
  '--lido-app-ui-border-radius-pill',
  '--lido-app-ui-border-radius-button',
  '--lido-app-ui-border-radius-control',
] as const

export const PAGE_GUTTER = '--lido-app-ui-page-gutter'

export const PAGE_CONTENT_MAX = 1000

export const PAGE_GUTTERS = { base: 32, sm: 12 } as const
