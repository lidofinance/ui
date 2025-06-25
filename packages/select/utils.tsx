import { SVGProps } from 'react'
import cn from 'classnames'
import { SelectSize } from './Select'

export type IconConfig = {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>
  isColored?: boolean
}

export const renderIcon = (
  iconConfig: IconConfig,
  size: SelectSize,
  styles: Record<string, string>,
  className?: string,
) => {
  if (!iconConfig) return null

  const { icon: IconComponent, isColored } = iconConfig

  return (
    <IconComponent
      className={cn(
        styles.icon,
        isColored && styles.isColored,
        styles[`icon--size-${size.toUpperCase()}`],
        className,
      )}
    />
  )
}
