import { forwardRef } from 'react'

import {
  Select,
  type SelectDataTestId,
  type SelectItemDataTestId,
  type SelectOption,
  type SelectProps,
  type SelectSize,
} from '../select'

export type TokenSelectorOption = SelectOption
export type TokenSelectorOptionDataTestId = SelectItemDataTestId
export type TokenSelectorSize = SelectSize

export type TokenSelectorDataTestId = Omit<SelectDataTestId, 'listbox'> & {
  panel?: string
}

export type TokenSelectorProps = Omit<
  SelectProps,
  'dataTestId' | 'defaultValue'
> & {
  dataTestId?: TokenSelectorDataTestId
}

/** `Select` preset with the token-picker look: fills the container, semibold labels, "Select" placeholder and "Select token" list name. */
export const TokenSelector = forwardRef<HTMLButtonElement, TokenSelectorProps>(
  (
    {
      placeholder = 'Select',
      listLabel = 'Select token',
      dataTestId,
      value,
      ...props
    },
    ref,
  ) => {
    const { panel, ...restTestIds } = dataTestId ?? {}
    return (
      <Select
        ref={ref}
        labelWeight='semibold'
        placeholder={placeholder}
        listLabel={listLabel}
        // Keeps the preset controlled so `undefined` shows the placeholder.
        value={value ?? ''}
        dataTestId={{ ...restTestIds, listbox: panel }}
        {...props}
      />
    )
  },
)

TokenSelector.displayName = 'TokenSelector'
