import { StoryFn, Meta } from '@storybook/react'
import React from 'react'

import * as BaseIconsComponents from './components/base'
import * as ColoredIconsComponents from './components/colored'
import * as LogosIconsComponents from './components/logo'
import * as NetworksIconsComponents from './components/network'
import * as TokensIconsComponents from './components/token'
import * as VaultsIconsComponents from './components/vault'
import * as LidoProjectsIconsComponents from './components/lidoProject'

const components: any = {
  ...BaseIconsComponents,
  ...ColoredIconsComponents,
  ...LogosIconsComponents,
  ...NetworksIconsComponents,
  ...TokensIconsComponents,
  ...VaultsIconsComponents,
  ...LidoProjectsIconsComponents,
}

export type IconVariants = keyof typeof components
const iconKeys = Object.keys(components).sort() as IconVariants[]

interface GenericIconProps {
  color?: string
  size?: number
  type: IconVariants
}

const GenericIcon: React.FC<GenericIconProps> = ({
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

export default {
  title: 'Images/Icon',
  component: GenericIcon,
  argTypes: {
    type: {
      control: 'select',
      options: iconKeys,
      description: 'Select an icon',
    },
    color: { control: 'color', description: 'Icon color' },
    size: {
      control: { type: 'number', min: 10, max: 100, step: 1 },
      description: 'Size of an icon in px',
    },
  },
} as Meta

export const Icon: StoryFn<GenericIconProps> = (args) => (
  <GenericIcon {...args} />
)

Icon.args = {
  type: iconKeys[0],
  color: 'red',
  size: 40,
}

Icon.parameters = {
  docs: {
    description: {
      story: 'Allows you to select one icon using controls and display it.',
    },
  },
}
const renderIconGrid = (
  icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>>,
  width: string | number = 36,
  height: string | number = 36,
  cellWidth = 110,
) => {
  const entries = Object.entries(icons)

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
          }}
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
          <div style={{ marginTop: '8px', fontSize: '12px' }}>{name}</div>
        </div>
      ))}
    </div>
  )
}

// Tokens Icons
export const TokensIcons = () => {
  return (
    <div>
      <h2
        style={{
          marginBottom: '16px',
          padding: '8px 0',
          borderBottom: '1px solid #eee',
          textTransform: 'capitalize',
        }}
      >
        Tokens Icons{' '}
        <div
          style={{
            fontSize: '0.7em',
            textTransform: 'none',
            fontWeight: 400,
            margin: '10px 0',
          }}
        >
          {' '}
          (blue color would be applied on hover to display ability to change
          color)
        </div>
      </h2>
      {renderIconGrid(TokensIconsComponents)}
    </div>
  )
}

// Vaults Icons
export const VaultsIcons = () => {
  return (
    <div>
      <h2
        style={{
          marginBottom: '16px',
          padding: '8px 0',
          borderBottom: '1px solid #eee',
          textTransform: 'capitalize',
        }}
      >
        Vaults Icons{' '}
        <div
          style={{
            fontSize: '0.7em',
            textTransform: 'none',
            fontWeight: 400,
            margin: '10px 0',
          }}
        >
          {' '}
          (blue color would be applied on hover to display ability to change
          color)
        </div>
      </h2>
      {renderIconGrid(VaultsIconsComponents, 150, 150, 160)}
    </div>
  )
}

// Networks Icons
export const NetworksIcons = () => {
  return (
    <div>
      <h2
        style={{
          marginBottom: '16px',
          padding: '8px 0',
          borderBottom: '1px solid #eee',
          textTransform: 'capitalize',
        }}
      >
        Networks Icons{' '}
        <div
          style={{
            fontSize: '0.7em',
            textTransform: 'none',
            fontWeight: 400,
            margin: '10px 0',
          }}
        >
          {' '}
          (blue color would be applied on hover to display ability to change
          color)
        </div>
      </h2>
      {renderIconGrid(NetworksIconsComponents)}
    </div>
  )
}

// Lido Projects Icons
export const LidoProjectsIcons = () => {
  return (
    <div>
      <h2
        style={{
          marginBottom: '16px',
          padding: '8px 0',
          borderBottom: '1px solid #eee',
          textTransform: 'capitalize',
        }}
      >
        Lido Projects Icons{' '}
        <div
          style={{
            fontSize: '0.7em',
            textTransform: 'none',
            fontWeight: 400,
            margin: '10px 0',
          }}
        >
          {' '}
          (blue color would be applied on hover to display ability to change
          color)
        </div>
      </h2>
      {renderIconGrid(LidoProjectsIconsComponents, 100, 100, 120)}
    </div>
  )
}

// Logos Icons
export const LogosIcons = () => {
  return (
    <div>
      <h2
        style={{
          marginBottom: '16px',
          padding: '8px 0',
          borderBottom: '1px solid #eee',
          textTransform: 'capitalize',
        }}
      >
        Logos Icons{' '}
        <div
          style={{
            fontSize: '0.7em',
            textTransform: 'none',
            fontWeight: 400,
            margin: '10px 0',
          }}
        >
          {' '}
          (blue color would be applied on hover to display ability to change
          color)
        </div>
      </h2>
      {renderIconGrid(LogosIconsComponents, 100, 'auto', 110)}
    </div>
  )
}

// Base Icons
export const BaseIcons = () => {
  return (
    <div>
      <h2
        style={{
          marginBottom: '16px',
          padding: '8px 0',
          borderBottom: '1px solid #eee',
          textTransform: 'capitalize',
        }}
      >
        Base Icons{' '}
        <div
          style={{
            fontSize: '0.7em',
            textTransform: 'none',
            fontWeight: 400,
            margin: '10px 0',
          }}
        >
          {' '}
          (blue color would be applied on hover to display ability to change
          color)
        </div>
      </h2>
      {renderIconGrid(BaseIconsComponents)}
    </div>
  )
}

// Colored Icons
export const ColoredIcons = () => {
  return (
    <div>
      <h2
        style={{
          marginBottom: '16px',
          padding: '8px 0',
          borderBottom: '1px solid #eee',
          textTransform: 'capitalize',
        }}
      >
        Colored Icons{' '}
        <div
          style={{
            fontSize: '0.7em',
            textTransform: 'none',
            fontWeight: 400,
            margin: '10px 0',
          }}
        >
          {' '}
          (blue color would be applied on hover to display ability to change
          color)
        </div>
      </h2>
      {renderIconGrid(ColoredIconsComponents)}
    </div>
  )
}
