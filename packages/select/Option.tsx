import React, { ForwardedRef, forwardRef, useCallback } from 'react'
import { PopupMenuItem } from '../popup-menu'
import { OptionProps } from './types'

function Option(props: OptionProps, ref?: ForwardedRef<HTMLButtonElement>) {
  const { value, onClick, onChange, ...rest } = props

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onChange?.(value)
      onClick?.(event)
    },
    [value, onChange, onClick],
  )

  return <PopupMenuItem onClick={handleClick} ref={ref} {...rest} />
}

export default forwardRef(Option)
