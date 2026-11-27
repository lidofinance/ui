import type { ReactNode } from 'react'

import cn from 'classnames'

import { IconInfo } from '../icons'
import { Tooltip, type TooltipProps } from '../tooltip'
import styles from './InfoTooltip.module.css'

/** Icon size: `sm` 12px, `md` 16px, `xl` 20px. */
export type InfoTooltipSize = 'sm' | 'md' | 'xl'
/** @deprecated Use `'md'` instead of `16` and `'xl'` instead of `20`. */
export type InfoTooltipLegacySize = 16 | 20
export type InfoTooltipTone = 'secondary' | 'tertiary' | 'inherit'

export type InfoTooltipProps = Omit<TooltipProps, 'children'> & {
  /** Glyph; defaults to the info icon. */
  icon?: ReactNode
  /** Icon size: `sm` 12px, `md` 16px, `xl` 20px. Defaults to `md`. Numeric `16`/`20` are deprecated aliases of `md`/`xl`. */
  size?: InfoTooltipSize | InfoTooltipLegacySize
  tone?: InfoTooltipTone
}

const legacySizes: Record<InfoTooltipLegacySize, InfoTooltipSize> = {
  16: 'md',
  20: 'xl',
}

export const InfoTooltip = ({
  icon = <IconInfo aria-hidden='true' />,
  size = 'md',
  tone = 'secondary',
  className,
  'aria-label': ariaLabel,
  ...rest
}: InfoTooltipProps) => (
  <Tooltip
    tabIndex={0}
    role='img'
    aria-label={ariaLabel ?? 'More info'}
    className={cn(
      styles.root,
      styles[typeof size === 'number' ? legacySizes[size] : size],
      styles[tone],
      className,
    )}
    {...rest}
  >
    {icon}
  </Tooltip>
)

InfoTooltip.displayName = 'InfoTooltip'
