import React, { forwardRef, useCallback, useState } from 'react'
import {
  Placeholder,
  RootWrapper,
  InputWrapper,
  InputStyled,
  ErrorMessage,
  SuccessMessage,
  ActionWrap,
} from './InputStyles'

type Props = {
  action?: React.ReactNode
  error?: string
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

  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

function Input(props: Props, ref: React.Ref<HTMLInputElement>) {
  const {
    action,
    error,
    successMessage,
    placeholder,
    defaultValue = '',
    value: valueProp,
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
  const isWrong = error !== undefined && error !== ''

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
      if (onFocus) onFocus(e)
    },
    [onFocus]
  )

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false)
      if (onBlur) onBlur(e)
    },
    [onBlur]
  )

  return (
    <RootWrapper>
      <InputWrapper isWrong={isWrong} isFocused={isFocused}>
        {placeholder && (
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
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {action && <ActionWrap children={action} />}
      </InputWrapper>
      {error && <ErrorMessage children={error} />}
      {successMessage && <SuccessMessage children={successMessage} />}
    </RootWrapper>
  )
}

export default forwardRef(Input)
