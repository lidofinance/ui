import { FC } from 'react'
import { SelectArrowBigStyle, SelectArrowSmallStyle } from './SelectArrowStyles'
import { SelectArrows } from './types'

type SelectArrowProps = {
  arrow: SelectArrows
  disabled?: boolean
  opened: boolean
  children?: never
}

export const SelectArrow: FC<SelectArrowProps> = ({
  arrow,
  disabled = false,
  opened,
}) => {
  const commonProps = {
    $opened: opened,
    $disabled: disabled,
  }

  if (arrow === 'default') return <SelectArrowBigStyle {...commonProps} />
  if (arrow === 'small') return <SelectArrowSmallStyle {...commonProps} />

  return null
}

export default SelectArrow
