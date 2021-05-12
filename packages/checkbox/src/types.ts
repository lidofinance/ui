export type { Theme } from '@lidofinance/theme'

export type CheckboxProps = {
  wrapperRef?: React.RefObject<HTMLLabelElement>
} & Omit<JSX.IntrinsicElements['input'], 'ref'>
