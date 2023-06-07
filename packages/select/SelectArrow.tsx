import { FC } from 'react'
import {
  SelectArrowBigStyle,
  SelectArrowBigStyleProps,
  SelectArrowSmallStyle,
  SelectArrowSmallStyleProps,
} from './SelectArrowStyles'
import { SelectArrows } from './constants'

type SelectArrowProps = Omit<
  SelectArrowBigStyleProps & SelectArrowSmallStyleProps,
  '$opened' | '$disabled'
> & {
  arrow: SelectArrows
  disabled?: boolean
  opened: boolean
  children?: never
}

export const SelectArrow: FC<SelectArrowProps> = ({
  arrow,
  disabled = false,
  opened,
  ...rest
}) => {
  const commonProps = {
    $opened: opened,
    $disabled: disabled,
  }

  if (arrow === 'default')
    return <SelectArrowBigStyle {...rest} {...commonProps} />
  if (arrow === 'small')
    return <SelectArrowSmallStyle {...rest} {...commonProps} />

  return null
}

export default SelectArrow
