import type { FC, PropsWithChildren } from 'react'

export type StorySectionProps = PropsWithChildren<{
  // Omit when the story name already says what the group is — a caption that
  // repeats the story title is just noise on the docs page.
  title?: string
  row?: boolean
  style?: React.CSSProperties
}>

export const StorySection: FC<StorySectionProps> = ({
  title,
  row = true,
  style,
  children,
}) => (
  <div style={{ fontFamily: 'var(--lido-app-ui-font-family)' }}>
    {title ? (
      <p
        style={{
          margin: '0 0 12px',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'var(--lido-app-ui-color-text-secondary)',
        }}
      >
        {title}
      </p>
    ) : null}
    <div
      style={{
        display: 'flex',
        flexDirection: row ? 'row' : 'column',
        flexWrap: row ? 'wrap' : 'nowrap',
        alignItems: row ? 'center' : 'stretch',
        gap: 16,
        ...style,
      }}
    >
      {children}
    </div>
  </div>
)
