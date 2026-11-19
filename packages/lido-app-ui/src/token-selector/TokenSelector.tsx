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
/** @deprecated Use `SelectItemDataTestId`. */
export type TokenSelectorOptionDataTestId = SelectItemDataTestId
export type TokenSelectorSize = SelectSize

export type TokenSelectorDataTestId = SelectDataTestId & {
  /** @deprecated Use `listbox`. */
  panel?: string
}

export type TokenSelectorProps = Omit<
  SelectProps,
  'dataTestId' | 'defaultValue' | 'value'
> & {
  /** Selected value; `undefined` shows the placeholder (always controlled). */
  value?: string
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
    const { panel, listbox, ...restTestIds } = dataTestId ?? {}
    return (
      <Select
        ref={ref}
        labelWeight='semibold'
        placeholder={placeholder}
        listLabel={listLabel}
        // Keeps the preset controlled so `undefined` shows the placeholder.
        value={value ?? ''}
        dataTestId={{ ...restTestIds, listbox: listbox ?? panel }}
        {...props}
      />
    )
  },
)

TokenSelector.displayName = 'TokenSelector'
