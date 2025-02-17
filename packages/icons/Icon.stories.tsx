import { StoryFn, Meta } from '@storybook/react'
import * as components from './index.js'

export type IconVariants = keyof typeof components
const iconKeys = Object.keys(components) as IconVariants[]

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
    console.warn(`Icon "${type}" does not exist.`)
    return null
  }

  return (
    <IconComponent
      style={{ fill: color || 'currentColor', width: size, height: size }}
      {...props}
    />
  )
}
export default {
  title: 'Images/Icons',
  component: GenericIcon,
  argTypes: {
    type: {
      control: 'select',
      options: iconKeys,
      description: 'Select an icon',
    },
    color: { control: 'color', description: 'Цвет иконки' },
    size: {
      control: { type: 'number', min: 10, max: 100, step: 1 },
      description: 'Size of an icon in px',
    },
  },
} as Meta

// История для отображения всех иконок в сетке
export const AllIcons = () => {
  const iconEntries = Object.entries(components) as [
    IconVariants,
    React.FC<React.SVGProps<SVGSVGElement>>,
  ][]

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {iconEntries.map(([name, IconComponent]) => (
        <div key={name} style={{ textAlign: 'center', width: '100px' }}>
          <IconComponent
            style={{ fill: 'currentColor' }}
            width={48}
            height={48}
          />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>{name}</div>
        </div>
      ))}
    </div>
  )
}
AllIcons.parameters = {
  docs: {
    description: {
      story: 'Displays all available icons in a grid view.',
    },
  },
}

export const SelectedIcon: StoryFn<GenericIconProps> = (args) => (
  <GenericIcon {...args} />
)

SelectedIcon.args = {
  type: iconKeys[0],
  color: '#000000',
  size: 24,
}

SelectedIcon.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story:
        'Позволяет выбрать одну иконку с помощью контролов и отобразить её.',
    },
  },
}
