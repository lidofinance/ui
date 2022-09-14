import React, { ForwardedRef, forwardRef } from 'react'
import { CheckboxProps } from './types'
import {
  CheckboxWrapperStyle,
  CheckboxInputStyle,
  CheckboxIconStyle,
} from './CheckboxStyles'
import { Text } from '@lidofinance/text'
import { Box } from '@lidofinance/box'

function Checkbox(
  props: CheckboxProps,
  inputRef?: ForwardedRef<HTMLInputElement>
) {
  const { className, style, wrapperRef, children, label, ...inputProps } = props
  const { disabled } = inputProps
  const wrapperProps = { className, style }

  return (
    <CheckboxWrapperStyle {...wrapperProps} ref={wrapperRef}>
      <CheckboxInputStyle type='checkbox' {...inputProps} ref={inputRef} />
      <CheckboxIconStyle />
      {label && (
        <Box ml={8}>
          <Text size='xxs' color={disabled ? 'secondary' : 'default'}>
            {label}
          </Text>
        </Box>
      )}
    </CheckboxWrapperStyle>
  )
}

export default forwardRef(Checkbox)
