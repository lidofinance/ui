import type { FC, PropsWithChildren } from 'react'

// White cards (Modal) are invisible on Storybook's white canvas. Stories put
// them on this muted surface so the card edges read.
export const PageSurface: FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      padding: 32,
      borderRadius: 'var(--lido-app-ui-border-radius-card)',
      background: 'var(--lido-app-ui-color-backgrounds-input-default)',
    }}
  >
    {children}
  </div>
)
