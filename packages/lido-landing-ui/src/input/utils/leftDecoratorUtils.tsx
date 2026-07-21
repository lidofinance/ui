import { cloneElement, ReactElement } from 'react'
import { IconConfig, IconConfigProp } from '../../utils'
import styles from '../Input.module.css'
import cn from 'classnames'

/**
 * Helper to determine if icon is an object or ReactElement
 */
export const isIconObject = (
  iconProp: IconConfigProp | undefined,
): iconProp is IconConfig => {
  return !!(iconProp && typeof iconProp === 'object' && 'icon' in iconProp)
}

/**
 * Get colored flag from icon configuration
 */
export const getIsColored = (icon: IconConfigProp | undefined): boolean => {
  if (isIconObject(icon)) {
    return !!icon.isColored
  }
  return false
}

/**
 * Creates icon element with proper styling
 */
export const getIconElement = (
  icon: IconConfigProp | undefined,
): ReactElement | null => {
  if (!icon) return null

  const iconElement = isIconObject(icon) ? icon.icon : icon
  const isColored = getIsColored(icon)

  return cloneElement(iconElement, {
    ...iconElement.props,
    className: cn(
      styles.icon,
      isColored && styles.colored,
      iconElement.props.className,
    ),
  })
}
