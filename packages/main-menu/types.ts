import { LidoComponentProps } from '../utils/index.js'

export type MainMenuProps = LidoComponentProps<'div'>

export type MainMenuItemProps = LidoComponentProps<
  'div',
  {
    icon?: JSX.Element
    active?: boolean
  }
>
