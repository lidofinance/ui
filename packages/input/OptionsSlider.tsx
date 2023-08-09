import { ForwardedRef, ReactNode, forwardRef, ChangeEvent } from 'react'
import { SliderInput, SliderInputProps } from './SliderInput'

export type SliderOptionValue = string | number

export interface SliderOption {
  value: SliderOptionValue
  label: ReactNode
}

export type OptionsSliderInputProps = Omit<
  SliderInputProps,
  'value' | 'onChange'
> & {
  options: [SliderOption, SliderOption, ...SliderOption[]] // this is declaration like T[] but with "at least 2 elements" constraint
  value?: SliderOptionValue // if value is not provided, component should act isolated; initial value should be first option
  onChange: (value: SliderOptionValue, valueIndex: number) => unknown
}

export const OptionsSlider = forwardRef(
  (
    { options, value, onChange, ...rest }: OptionsSliderInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    let sliderIndex = options.findIndex((option) => option.value === value)

    if (sliderIndex === -1) {
      sliderIndex = 0
    }

    const max = options.length - 1

    const getLabel = (optionIndex: number) => {
      return options[optionIndex].label
    }

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        ref={ref}
        {...rest}
      />
    )
  },
)
OptionsSlider.displayName = 'OptionsSlider'
