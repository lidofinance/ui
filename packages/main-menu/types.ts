import { LidoComponentProps } from '@lidofinance/utils'

export type MainMenuProps = LidoComponentProps<'div'>

export type MainMenuItemProps = LidoComponentProps<
  'div',
  {
    icon?: JSX.Element
    active?: boolean
  }
>
