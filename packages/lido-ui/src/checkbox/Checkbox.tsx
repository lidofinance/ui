import { ForwardedRef, forwardRef } from 'react'
import { CheckboxProps } from './types.js'
import {
  CheckboxWrapperStyle,
  CheckboxInputStyle,
  CheckboxIconStyle,
} from './CheckboxStyles.js'
import { Text } from '../text/index.js'
import { Box } from '../box/index.js'

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
