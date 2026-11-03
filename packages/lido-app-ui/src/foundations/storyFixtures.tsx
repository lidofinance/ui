import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'

export const useTokenValue = (token: string) => {
  const [value, setValue] = useState('')
  useEffect(() => {
    setValue(
      getComputedStyle(document.documentElement).getPropertyValue(token).trim(),
    )
  }, [token])
  return value
}

export const cell: CSSProperties = {
  padding: '8px 12px',
  textAlign: 'left',
  borderBottom: '1px solid var(--lido-app-ui-color-border-default)',
}

export const code: CSSProperties = {
  fontFamily: 'monospace',
  fontSize: 12,
}

export const Table = ({
  head,
  children,
}: {
  head: string[]
  children: ReactNode
}) => (
  <div style={{ overflowX: 'auto' }}>
    <table
      style={{
        borderCollapse: 'collapse',
        fontSize: 14,
        color: 'var(--lido-app-ui-color-text-default)',
      }}
    >
      <thead>
        <tr>
          {head.map((title) => (
            <th key={title} style={cell}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
)

export const Note = ({ children }: { children: ReactNode }) => (
  <p
    style={{
      margin: 0,
      fontSize: 14,
      color: 'var(--lido-app-ui-color-text-secondary)',
    }}
  >
    {children}
  </p>
)
