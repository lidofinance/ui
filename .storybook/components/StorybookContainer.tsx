// A wrapper component for Storybook stories to provide a consistent layout.

import type { FC, PropsWithChildren } from 'react'

export type StorybookContainerProps = PropsWithChildren<{
  surface?: boolean
}>

export const StorybookContainer: FC<StorybookContainerProps> = ({
  children,
  surface = false,
}) => {
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    padding: '24px',
    backgroundColor: surface
      ? 'var(--lido-ui-color-backgrounds-surface)'
      : 'transparent',
    borderRadius: '12px',
  }

  return <div style={style}>{children}</div>
}
