import { CounterSlot } from '../counter/CounterSlot'
import { IconLoaderCircle } from '../icons'
import styles from './IconButton.module.css'
import type { IconButtonOwnProps } from './types'

type IconButtonContentProps = Pick<
  IconButtonOwnProps,
  'icon' | 'counter' | 'dataTestId'
> & {
  loading?: boolean
}

export const IconButtonContent = ({
  loading = false,
  icon,
  counter,
  dataTestId,
}: IconButtonContentProps) => (
  <>
    {loading ? (
      <IconLoaderCircle className={styles.spinner} aria-hidden='true' />
    ) : (
      <span
        className={styles.icon}
        aria-hidden='true'
        data-testid={dataTestId?.icon}
      >
        {icon}
      </span>
    )}
    <CounterSlot dataTestId={dataTestId?.counter}>{counter}</CounterSlot>
  </>
)
