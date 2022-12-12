import React from 'react'
import {
  Label,
  LabelContainer,
  RangeInputSlider,
  Slider,
  SliderWrapper,
  Track,
} from './SliderInputStyles'
import { SliderInputProps } from './types'

function SliderInput({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  minLabel,
  maxLabel,
  getLabel = (val) => String(val),
}: SliderInputProps): React.ReactElement {
  const fillPercentage = ((value - min) / (max - min)) * 100
  return (
    <SliderWrapper>
      <Slider>
        {getLabel(value)}
        <Track fillPercentage={fillPercentage} />
      </Slider>
      <RangeInputSlider
        value={value}
        step={step}
        onChange={onChange}
        min={min}
        max={max}
      />
      <LabelContainer>
        <Label>{minLabel}</Label>
        <Label>{maxLabel}</Label>
      </LabelContainer>
    </SliderWrapper>
  )
}

export default SliderInput
