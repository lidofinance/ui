import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import {
  Placeholder,
  RootWrap,
  RowWrap,
  IconWrap,
  InputStyled,
  ErrorMessage,
  SuccessMessage,
  ActionWrap,
} from './InputStyles'

type Props = {
  icon?: React.ReactNode
  action?: React.ReactNode
  errorMessage?: string
  successMessage?: React.ReactNode

  id?: string
  name?: string
  type?: string
  value?: string
  defaultValue?: string
  placeholder?: string
  autoComplete?: string
  maxLength?: number

  required?: boolean
  disabled?: boolean
  readonly?: boolean
  selectOnFocus?: boolean
  isPlaceholderFloats?: boolean

  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

function Input(props: Props, ref: React.Ref<HTMLInputElement>) {
  const {
    icon,
    action,
    errorMessage,
    successMessage,
    placeholder,
    defaultValue = '',
    value: valueProp,
    selectOnFocus,
    isPlaceholderFloats,
    onChange,
    onFocus,
    onBlur,
    ...inputProps
  } = props

  const [isFocused, setFocused] = useState(false)
  const [valueInternal, setValueInternal] = useState(defaultValue)
  const isControlled = valueProp !== undefined
  const value = isControlled ? valueProp : valueInternal
  const isPlaceholderFloated =
    isFocused || (value !== '' && value !== undefined)
  const isWrong = errorMessage !== undefined && errorMessage !== ''

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isControlled) {
        if (onChange) onChange(e)
      } else {
        setValueInternal(e.currentTarget.value)
      }
    },
    [isControlled, onChange]
  )

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true)
      if (selectOnFocus) e.currentTarget.select()
      if (onFocus) onFocus(e)
    },
    [onFocus, selectOnFocus]
  )

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false)
      if (onBlur) onBlur(e)
    },
    [onBlur]
  )

  return (
    <RootWrap>
      <RowWrap isWrong={isWrong} isFocused={isFocused}>
        {icon && <IconWrap>{icon}</IconWrap>}
        {isPlaceholderFloats && (
          <Placeholder
            isWrong={isWrong}
            isFocused={isFocused}
            isFloated={isPlaceholderFloated}
            children={placeholder}
          />
        )}
        <InputStyled
          {...inputProps}
          ref={ref}
          value={value}
          withIcon={Boolean(icon)}
          isPlaceholderFloats={isPlaceholderFloats}
          placeholder={!isPlaceholderFloats ? placeholder : undefined}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {action && <ActionWrap children={action} />}
      </RowWrap>
      {errorMessage && <ErrorMessage children={errorMessage} />}
      {successMessage && <SuccessMessage children={successMessage} />}
    </RootWrap>
  )
}

export default forwardRef(Input)
