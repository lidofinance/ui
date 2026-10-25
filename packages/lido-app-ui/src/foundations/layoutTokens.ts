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

export const SHADOWS = [
  '--lido-app-ui-shadow-dropdown',
  '--lido-app-ui-shadow-popover',
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
  '--lido-app-ui-border-radius-button-50',
  '--lido-app-ui-border-radius-control',
  '--lido-app-ui-border-radius-control-inactive',
] as const

export const PAGE_GUTTER = '--lido-app-ui-page-gutter'
