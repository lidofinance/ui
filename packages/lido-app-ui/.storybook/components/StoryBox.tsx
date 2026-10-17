import type { FC, HTMLAttributes } from 'react'

export const StoryBox: FC<HTMLAttributes<HTMLDivElement>> = ({
  style,
  ...rest
}) => (
  <div
    style={{
      padding: '8px 16px',
      border: '1px solid var(--lido-app-ui-color-border-default)',
      borderRadius: 8,
      background: 'var(--lido-app-ui-color-background-surface)',
      color: 'var(--lido-app-ui-color-text-default)',
      fontFamily: 'var(--lido-app-ui-font-family)',
      ...style,
    }}
    {...rest}
  />
)
