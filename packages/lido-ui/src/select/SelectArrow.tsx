import { FC } from 'react'
import {
  SelectArrowBigStyle,
  SelectArrowSmallStyle,
} from './SelectArrowStyles.js'
import { SelectArrows } from './types.js'

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
