import type { FC, ReactNode } from 'react'

const containerWidths = [240, 320, 400, 600, 900] as const

type ContainerWidthsProps = {
  children: ReactNode
  widths?: readonly number[]
}

/** Story helper: renders children in fixed-width boxes to show container-query behavior. */
export const ContainerWidths: FC<ContainerWidthsProps> = ({
  children,
  widths = containerWidths,
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    {widths.map((width) => (
      <div key={width}>
        <div
          style={{
            marginBottom: 8,
            color: 'var(--lido-app-ui-color-text-secondary)',
            fontFamily: 'var(--lido-app-ui-font-family)',
            fontSize: 12,
          }}
        >
          {width}px
        </div>
        <div style={{ width, maxWidth: '100%' }}>{children}</div>
      </div>
    ))}
  </div>
)
