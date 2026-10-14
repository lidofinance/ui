import cn from 'classnames'
import { ReactNode } from 'react'
import styles from './Banner.module.css'

export type BannerIconGroupProps = {
  className?: string
  icons: ReactNode[]
}

/** Overlapping round icons, e.g. chain logos. Pass it as `icon` or `endIcon` of the Banner */
export const BannerIconGroup = ({ className, icons }: BannerIconGroupProps) => (
  <span className={cn(className, styles.iconGroup)}>
    {icons.map((icon, index) => (
      <span key={index} className={styles.iconGroupItem}>
        {icon}
      </span>
    ))}
  </span>
)
