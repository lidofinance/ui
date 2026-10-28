import type { ReactNode } from 'react'

import storyStyles from './stories.module.css'

export const LOGO = <strong>Operators</strong>
export const COMPACT_LOGO = (
  <span className={storyStyles.compactLogo}>{LOGO}</span>
)

export const narrow = { viewport: { value: 'md-down', isRotated: false } }

export const TopBar = ({ children }: { children: ReactNode }) => (
  <div className={storyStyles.topBar}>
    {children}
    {COMPACT_LOGO}
  </div>
)
