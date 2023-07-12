import { LidoComponentProps } from '../utils'

export type MainMenuProps = LidoComponentProps<'div'>

export type MainMenuItemProps = LidoComponentProps<
  'div',
  {
    icon?: JSX.Element
    active?: boolean
  }
>
