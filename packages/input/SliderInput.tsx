import {
  Label,
  LabelButton,
  LabelContainer,
  RangeInputSlider,
  Slider,
  SliderWrapper,
  Track,
} from './SliderInputStyles'
import { SliderInputProps } from './types'

export const SliderInput = ({
  value,
  onChange,
  onLabelClick,
  min = 0,
  max = 100,
  step = 1,
  minLabel,
  maxLabel,
  getLabel = (val) => String(val),
  borderNone,
  labels,
}: SliderInputProps) => {
  const fillPercentage = ((value - min) / (max - min)) * 100
  const LabelComponent = onLabelClick ? LabelButton : Label
  const createClickHandler = (value: number) => () => onLabelClick?.(value)

  return (
    <SliderWrapper>
      <Slider borderNone={borderNone}>
        {getLabel(value)}
        <Track fillPercentage={fillPercentage} borderNone={borderNone} />
      </Slider>
      <RangeInputSlider
        value={value}
        step={step}
        onChange={onChange}
        min={min}
        max={max}
      />
      <LabelContainer>
        {minLabel && (
          <LabelComponent onClick={createClickHandler(min)}>
            {minLabel}
          </LabelComponent>
        )}
        {labels?.map(({ value, label }) => (
          <LabelComponent onClick={createClickHandler(value)} key={value}>
            {label}
          </LabelComponent>
        ))}
        {maxLabel && (
          <LabelComponent onClick={createClickHandler(max)}>
            {maxLabel}
          </LabelComponent>
        )}
      </LabelContainer>
    </SliderWrapper>
  )
}
