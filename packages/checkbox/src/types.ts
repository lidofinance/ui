import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export type CheckboxProps = LidoComponentProps<
  'input',
  {
    wrapperRef?: React.RefObject<HTMLLabelElement>
    children?: never
  }
>
