import React from 'react'
import * as components from '../index'
import { IconVariants } from './Icon.stories'

/* eslint-disable react-hooks/rules-of-hooks,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions*/
export interface GenericIconProps {
  color?: string
  size?: number
  type: IconVariants
}

export const GenericIcon: React.FC<GenericIconProps> = ({
  color,
  size = 24,
  type,
  ...props
}) => {
  const IconComponent = components[type]

  if (!IconComponent) {
    console.warn(`Icon "${type.toString()}" does not exist.`)
    return null
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #eee',
            padding: '16px',
            gap: '16px',
          }}
        >
          <div>Setting width only</div>
          <IconComponent
            style={{
              color: color || 'currentColor',
              width: size,
              height: 'auto',
            }}
            {...props}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #eee',
            padding: '16px',
            gap: '16px',
          }}
        >
          <div>Setting height only</div>
          <IconComponent
            style={{
              color: color || 'currentColor',
              height: size,
              width: 'auto',
            }}
            {...props}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #eee',
            padding: '16px',
            gap: '16px',
          }}
        >
          <div>Setting width and height</div>
          <IconComponent
            style={{
              color: color || 'currentColor',
              height: size,
              width: size,
            }}
            {...props}
          />
        </div>
      </div>
    </>
  )
}

export const renderIconGrid = (
  icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>>,
  width: string | number = 36,
  height: string | number = 36,
  cellWidth = 110,
) => {
  const entries = Object.entries(icons)
  const [copiedIcon, setCopiedIcon] = React.useState<string | null>(null)

  const copyToClipboard = (name: string) => {
    navigator.clipboard.writeText(`<${name}/>`).then(() => {
      setCopiedIcon(name)
      setTimeout(() => {
        setCopiedIcon(null)
      }, 2000)
    })
  }

  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', gap: cellWidth * 0.3 + 'px' }}
    >
      {entries.map(([name, IconComponent]) => (
        <div
          key={name}
          style={{
            textAlign: 'center',
            width: cellWidth + 'px',
            cursor: 'pointer',
            position: 'relative',
          }}
          onClick={() => copyToClipboard(name)}
        >
          <div
            style={{
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0066FF'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'currentColor'
            }}
          >
            <IconComponent
              style={{ color: 'inherit' }}
              width={width}
              height={height}
            />
          </div>
          <div style={{ marginTop: '8px', fontSize: '12px' }}>
            {name}
            {copiedIcon === name && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '10px',
                  marginTop: '4px',
                  whiteSpace: 'nowrap',
                }}
              >
                Copied to clipboard!
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
