import type { FC, PropsWithChildren } from 'react'

// Several components ship an `onDark` variant meant to sit on the navy hero
// band. Stories put them on this surface so the variant reads correctly.
export const DarkSurface: FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      padding: 32,
      borderRadius: 'var(--lido-app-ui-border-radius-card)',
      background: '#051b3f',
      color: 'var(--lido-app-ui-color-text-inverted)',
    }}
  >
    {children}
  </div>
)
