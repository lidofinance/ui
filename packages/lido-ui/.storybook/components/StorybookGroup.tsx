// A component to group related states or variants within a Storybook section.

import type { FC, PropsWithChildren } from 'react'

export type StorybookGroupProps = PropsWithChildren<{
  title: string
  last?: boolean
  style?: React.CSSProperties
}>

export const StorybookGroup: FC<StorybookGroupProps> = ({
  title,
  style,
  last = false,
  children,
}) => {
  const defaultGroupStyle: React.CSSProperties = {
    marginBottom: last ? '0' : '32px',
  }

  const titleStyle: React.CSSProperties = {
    margin: '0 0 16px 0',
    fontSize: '16px',
    fontWeight: '500',
    color: 'var(--lido-ui-color-text-secondary)',
  }

  return (
    <div style={{ ...defaultGroupStyle, ...style }}>
      <h5 style={titleStyle}>{title}</h5>
      {children}
    </div>
  )
}
