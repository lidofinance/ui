import { SliderInput } from './SliderInput'
import { OptionsSliderInputProps } from './types'

export const OptionsSlider = ({
  options,
  value,
  onChange,
  ...rest
}: OptionsSliderInputProps) => {
  let sliderIndex = options.findIndex((option) => option.value === value)

  if (sliderIndex === -1) {
    sliderIndex = 0
  }

  const max = options.length - 1

  const getLabel = (optionIndex: number) => {
    return options[optionIndex].label
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const optionIndex = Number(e.target.value)
    onChange(options[optionIndex].value, optionIndex)
  }

  const labels = options.map(({ label }, index) => ({ value: index, label }))
  return (
    <SliderInput
      min={0}
      max={max}
      value={sliderIndex}
      onChange={handleSliderChange}
      getLabel={getLabel}
      labels={labels}
      borderNone={true}
      onLabelClick={(optionIndex) =>
        onChange(options[optionIndex].value, optionIndex)
      }
      {...rest}
    />
  )
}
