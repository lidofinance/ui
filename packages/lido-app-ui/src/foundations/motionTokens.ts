export const MOTION_DURATIONS = [
  {
    token: '--lido-app-ui-duration-fast',
    note: 'Enter: tick, tooltip, popover, select, chevron, press',
  },
  {
    token: '--lido-app-ui-duration-base',
    note: 'Enter: collapse, toast, modal, progress, steps',
  },
  { token: '--lido-app-ui-duration-slow', note: 'Enter: drawers only' },
  { token: '--lido-app-ui-duration-fast-exit', note: 'Exit pair of fast' },
  { token: '--lido-app-ui-duration-base-exit', note: 'Exit pair of base' },
  { token: '--lido-app-ui-duration-slow-exit', note: 'Exit pair of slow' },
  {
    token: '--lido-app-ui-duration-color',
    note: 'Hover, press and selection colour',
  },
  {
    token: '--lido-app-ui-duration-move',
    note: 'Indicator morphs: Tabs, SegmentedControl',
  },
] as const

export const MOTION_EASINGS = [
  { token: '--lido-app-ui-easing-standard', note: 'Colour only' },
  { token: '--lido-app-ui-easing-out', note: 'Enter and value changes' },
  {
    token: '--lido-app-ui-easing-exit',
    note: 'Alias of easing-out; exits never use ease-in',
  },
  { token: '--lido-app-ui-easing-move', note: 'On-screen movement' },
  { token: '--lido-app-ui-easing-drawer', note: 'Drawer slide' },
] as const

export const MOTION_AMPLITUDES = [
  { token: '--lido-app-ui-motion-shift', note: 'Popover and tooltip offset' },
  { token: '--lido-app-ui-motion-shift-lg', note: 'Toast offset' },
  { token: '--lido-app-ui-motion-scale', note: 'Surface exit scale, never 0' },
] as const

export const MOTION_COMPOSITES = [
  {
    token: '--lido-app-ui-transition-colors',
    note: 'Colour transition list, resolves at :root',
  },
] as const
