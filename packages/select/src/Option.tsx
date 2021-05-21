import { ForwardedRef, forwardRef, useCallback } from 'react'
import { PopupMenuItem } from '@lidofinance/popup-menu'
import { OptionProps } from './types'

function Option(props: OptionProps, ref?: ForwardedRef<HTMLButtonElement>) {
  const { value, onClick, onChange, ...rest } = props

  const handleClick = useCallback(
    (event) => {
      onChange?.(value)
      onClick?.(event)
    },
    [value, onChange, onClick]
  )

  return <PopupMenuItem onClick={handleClick} ref={ref} {...rest} />
}

export default forwardRef(Option)
