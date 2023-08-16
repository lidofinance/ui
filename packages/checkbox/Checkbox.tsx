import { ForwardedRef, forwardRef } from 'react'
import { CheckboxProps } from './types'
import {
  CheckboxWrapperStyle,
  CheckboxInputStyle,
  CheckboxIconStyle,
} from './CheckboxStyles'
import { Text } from '@lidofinance/text'
import { Box } from '@lidofinance/box'

export const Checkbox = forwardRef(
  (
    {
      className,
      style,
      wrapperRef,
      disabled,
      children,
      label,
      ...rest
    }: CheckboxProps,
    inputRef?: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <CheckboxWrapperStyle
        className={className}
        style={style}
        ref={wrapperRef}
      >
        <CheckboxInputStyle
          type='checkbox'
          disabled={disabled}
          ref={inputRef}
          {...rest}
        />
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
  },
)
Checkbox.displayName = 'Checkbox'
