import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export type TooltipProps = LidoComponentProps<
  'div',
  {
    children: React.ReactElement & React.RefAttributes<HTMLElement>
    as?: never
  }
>
