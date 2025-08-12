import { CSSProperties, ReactElement } from 'react'
import { IconConfig, IconConfigProp } from './types.js'

const toCssSize = (value?: number | string) => {
  if (value === undefined) return undefined
  if (typeof value === 'number') return `${value}px`
  return value
}

export const resolveIconSizeStyle = (
  iconProp: IconConfigProp | undefined,
  iconElement: ReactElement,
): CSSProperties | undefined => {
  // Use explicit IconConfig sizes when provided, otherwise fallback to the icon element props.
  const isIconConfig = (
    value: IconConfigProp | undefined,
  ): value is IconConfig => {
    return !!(value && typeof value === 'object' && 'icon' in value)
  }

  const width = toCssSize(
    (isIconConfig(iconProp) ? iconProp.width : undefined) ??
      iconElement.props?.width,
  )
  const height = toCssSize(
    (isIconConfig(iconProp) ? iconProp.height : undefined) ??
      iconElement.props?.height,
  )

  if (!width && !height) return undefined

  return {
    ...(iconElement.props?.style || {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  }
}
