import React from 'react'
import SliderInput from './SliderInput'
import { OptionsSliderInputProps } from './types'

const OptionsSlider = ({
  options,
  value,
  onChange,
}: OptionsSliderInputProps): React.ReactElement => {
  let sliderIndex = options.findIndex((option) => option.value === value)

  if (sliderIndex === -1) {
    sliderIndex = 0
  }

  const max = options.length - 1

  const firstOption = options[0]
  const lastOption = options[max]

  const getLabel = (optionIndex: number) => {
    return options[optionIndex].label
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const optionIndex = Number(e.target.value)
    onChange(e, options[optionIndex].value, optionIndex)
  }
  return (
    <SliderInput
      min={0}
      max={max}
      value={sliderIndex}
      onChange={handleSliderChange}
      minLabel={firstOption.label}
      maxLabel={lastOption.label}
      getLabel={getLabel}
    />
  )
}

export default OptionsSlider
