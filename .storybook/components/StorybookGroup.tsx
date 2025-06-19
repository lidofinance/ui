// A component to group related states or variants within a Storybook section.

import type { FC, PropsWithChildren } from 'react'

export type StorybookGroupProps = PropsWithChildren<{
  title: string
  last?: boolean
}>

export const StorybookGroup: FC<StorybookGroupProps> = ({
  title,
  last = false,
  children,
}) => {
  const groupStyle: React.CSSProperties = {
    marginBottom: last ? '0' : '32px',
  }

  const titleStyle: React.CSSProperties = {
    margin: '0 0 16px 0',
    fontSize: '16px',
    fontWeight: '500',
    color: 'var(--lido-ui-color-text-secondary)',
  }

  return (
    <div style={groupStyle}>
      <h5 style={titleStyle}>{title}</h5>
      {children}
    </div>
  )
}
