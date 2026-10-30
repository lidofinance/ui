import type { ReactNode } from 'react'

import { Stack } from '../stack'
import storyStyles from './stories.module.css'

export const LOGO = <strong>Operators</strong>
export const COMPACT_LOGO = (
  <span className={storyStyles.compactLogo}>{LOGO}</span>
)

export const narrow = { viewport: { value: 'md-down', isRotated: false } }

export const TopBar = ({ children }: { children: ReactNode }) => (
  <Stack direction='row' align='center' gap={12}>
    {children}
    {COMPACT_LOGO}
  </Stack>
)
