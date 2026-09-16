export type ColorToken = { name: string; cssVar: string }

export const TEXT: ColorToken[] = [
  { name: 'default', cssVar: '--lido-app-ui-color-text-default' },
  { name: 'secondary', cssVar: '--lido-app-ui-color-text-secondary' },
  { name: 'tertiary', cssVar: '--lido-app-ui-color-text-tertiary' },
  { name: 'neutral', cssVar: '--lido-app-ui-color-text-neutral' },
  { name: 'active', cssVar: '--lido-app-ui-color-text-active' },
  { name: 'active-hover', cssVar: '--lido-app-ui-color-text-active-hover' },
  { name: 'success', cssVar: '--lido-app-ui-color-text-success' },
  { name: 'warning', cssVar: '--lido-app-ui-color-text-warning' },
  { name: 'error', cssVar: '--lido-app-ui-color-text-error' },
  { name: 'info', cssVar: '--lido-app-ui-color-text-info' },
  { name: 'inverse', cssVar: '--lido-app-ui-color-text-inverse' },
  { name: 'disabled', cssVar: '--lido-app-ui-color-text-disabled' },
]

export const ICONS: ColorToken[] = [
  { name: 'default', cssVar: '--lido-app-ui-color-icons-default' },
  { name: 'secondary', cssVar: '--lido-app-ui-color-icons-secondary' },
  { name: 'tertiary', cssVar: '--lido-app-ui-color-icons-tertiary' },
  { name: 'neutral', cssVar: '--lido-app-ui-color-icons-neutral' },
  { name: 'active', cssVar: '--lido-app-ui-color-icons-active' },
  { name: 'active-hover', cssVar: '--lido-app-ui-color-icons-active-hover' },
  { name: 'light-blue', cssVar: '--lido-app-ui-color-icons-light-blue' },
  { name: 'success', cssVar: '--lido-app-ui-color-icons-success' },
  { name: 'warning', cssVar: '--lido-app-ui-color-icons-warning' },
  { name: 'error', cssVar: '--lido-app-ui-color-icons-error' },
  { name: 'info', cssVar: '--lido-app-ui-color-icons-info' },
  { name: 'inverse', cssVar: '--lido-app-ui-color-icons-inverse' },
  { name: 'disabled', cssVar: '--lido-app-ui-color-icons-disabled' },
]

export const BORDER: ColorToken[] = [
  { name: 'default', cssVar: '--lido-app-ui-color-border-default' },
  { name: 'tertiary', cssVar: '--lido-app-ui-color-border-tertiary' },
  { name: 'hover', cssVar: '--lido-app-ui-color-border-hover' },
  { name: 'black', cssVar: '--lido-app-ui-color-border-black' },
  { name: 'active', cssVar: '--lido-app-ui-color-border-active' },
  { name: 'success', cssVar: '--lido-app-ui-color-border-success' },
  { name: 'warning', cssVar: '--lido-app-ui-color-border-warning' },
  { name: 'error', cssVar: '--lido-app-ui-color-border-error' },
  { name: 'info', cssVar: '--lido-app-ui-color-border-info' },
  { name: 'card', cssVar: '--lido-app-ui-color-border-card' },
  { name: 'inverse', cssVar: '--lido-app-ui-color-border-inverse' },
]

export const BACKGROUND_ELEMENTS: ColorToken[] = [
  { name: 'surface', cssVar: '--lido-app-ui-color-background-surface' },
  {
    name: 'surface-hover',
    cssVar: '--lido-app-ui-color-background-surface-hover',
  },
  {
    name: 'surface-active',
    cssVar: '--lido-app-ui-color-background-surface-active',
  },
  {
    name: 'surface-active-hover',
    cssVar: '--lido-app-ui-color-background-surface-active-hover',
  },
  {
    name: 'surface-selected',
    cssVar: '--lido-app-ui-color-background-surface-selected',
  },
  {
    name: 'surface-selected-hover',
    cssVar: '--lido-app-ui-color-background-surface-selected-hover',
  },
  { name: 'default', cssVar: '--lido-app-ui-color-background-default' },
  {
    name: 'default-hover',
    cssVar: '--lido-app-ui-color-background-default-hover',
  },
  {
    name: 'default-pressed',
    cssVar: '--lido-app-ui-color-background-default-pressed',
  },
  {
    name: 'default-active',
    cssVar: '--lido-app-ui-color-background-default-active',
  },
  { name: 'secondary', cssVar: '--lido-app-ui-color-background-secondary' },
  {
    name: 'secondary-hover',
    cssVar: '--lido-app-ui-color-background-secondary-hover',
  },
  { name: 'action', cssVar: '--lido-app-ui-color-background-action' },
  {
    name: 'action-hover',
    cssVar: '--lido-app-ui-color-background-action-hover',
  },
  {
    name: 'action-pressed',
    cssVar: '--lido-app-ui-color-background-action-pressed',
  },
  {
    name: 'transparent-hover',
    cssVar: '--lido-app-ui-color-background-transparent-hover',
  },
  {
    name: 'transparent-pressed',
    cssVar: '--lido-app-ui-color-background-transparent-pressed',
  },
  { name: 'disabled', cssVar: '--lido-app-ui-color-background-disabled' },
  { name: 'page', cssVar: '--lido-app-ui-color-background-page' },
]

export const BACKGROUND_COLOR: ColorToken[] = [
  { name: 'neutral', cssVar: '--lido-app-ui-color-tint-neutral' },
  { name: 'neutral-hover', cssVar: '--lido-app-ui-color-tint-neutral-hover' },
  { name: 'active', cssVar: '--lido-app-ui-color-tint-active' },
  { name: 'active-hover', cssVar: '--lido-app-ui-color-tint-active-hover' },
  { name: 'success', cssVar: '--lido-app-ui-color-tint-success' },
  { name: 'success-hover', cssVar: '--lido-app-ui-color-tint-success-hover' },
  { name: 'warning', cssVar: '--lido-app-ui-color-tint-warning' },
  { name: 'warning-hover', cssVar: '--lido-app-ui-color-tint-warning-hover' },
  { name: 'error', cssVar: '--lido-app-ui-color-tint-error' },
  { name: 'error-hover', cssVar: '--lido-app-ui-color-tint-error-hover' },
  { name: 'info', cssVar: '--lido-app-ui-color-tint-info' },
  { name: 'info-hover', cssVar: '--lido-app-ui-color-tint-info-hover' },
]

export const ALL_COLOR_TOKENS: ColorToken[] = [
  ...TEXT,
  ...ICONS,
  ...BORDER,
  ...BACKGROUND_ELEMENTS,
  ...BACKGROUND_COLOR,
]

export const EXCLUDED_FROM_STORY = []
