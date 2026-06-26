// A wrapper component for Storybook stories to provide a consistent layout.

import type { FC, PropsWithChildren } from 'react'

export type StorybookContainerProps = PropsWithChildren<{
  surface?: boolean
}>

export const StorybookContainer: FC<StorybookContainerProps> = ({
  children,
}) => {
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    padding: '24px',
    borderRadius: '12px',
    backgroundColor: 'var(--lido-ui-color-backgrounds-cards)',
  }

  return <div style={style}>{children}</div>
}
