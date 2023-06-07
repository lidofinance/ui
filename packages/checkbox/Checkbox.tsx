import { ForwardedRef, RefObject, forwardRef } from 'react'
import {
  CheckboxWrapperStyle,
  CheckboxInputStyle,
  CheckboxIconStyle,
  CheckboxInputStyleProps,
} from './CheckboxStyles'
import { Text } from '../text'
import { Box } from '../box'

export type CheckboxProps = CheckboxInputStyleProps & {
  wrapperRef?: RefObject<HTMLLabelElement>
  children?: never
  label?: string
}

function Checkbox(
  {
    className,
    style,
    wrapperRef,
    children,
    label,
    ...inputProps
  }: CheckboxProps,
  inputRef?: ForwardedRef<HTMLInputElement>
) {
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
