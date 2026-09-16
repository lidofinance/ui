import type { FC, PropsWithChildren } from 'react'

export type StoryContainerProps = PropsWithChildren<{
  gap?: number
  style?: React.CSSProperties
}>

export const StoryContainer: FC<StoryContainerProps> = ({
  gap = 32,
  style,
  children,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap,
      fontFamily: 'var(--lido-app-ui-font-family)',
      ...style,
    }}
  >
    {children}
  </div>
)
