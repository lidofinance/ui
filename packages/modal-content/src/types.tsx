import { LidoComponentProps } from '@lidofinance/utils'

export type ModalContentStateInsideProps = LidoComponentProps<'div'>

export enum ModalContentStateEnum {
  loading,
  success,
  error,
}
export type ModalContentStatesEnum = keyof typeof ModalContentStateEnum

export type ModalContentStateProps = {
  state: ModalContentStatesEnum
} & ModalContentStateInsideProps
