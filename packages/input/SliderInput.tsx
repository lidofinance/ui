import { ChangeEventHandler, ReactNode } from 'react'
import {
  Label,
  LabelButton,
  LabelContainer,
  RangeInputSlider,
  Slider,
  SliderWrapper,
  SliderWrapperProps,
  Track,
} from './SliderInputStyles'

interface ValueLabel {
  value: number
  label: ReactNode
}

export type SliderInputProps = Omit<SliderWrapperProps, 'onChange'> & {
  value: number
  onChange?: ChangeEventHandler<HTMLInputElement>
  min?: number
  max?: number
  minLabel?: ReactNode
  maxLabel?: ReactNode
  step?: number
  getLabel?: (value: number) => ReactNode
  borderNone?: boolean
  labels?: ValueLabel[]
  onLabelClick?: (value: number) => unknown
}

function SliderInput({
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
  ...rest
}: SliderInputProps) {
  const fillPercentage = ((value - min) / (max - min)) * 100
  const LabelComponent = onLabelClick ? LabelButton : Label
  const createClickHandler = (value: number) => () => onLabelClick?.(value)

  return (
    <SliderWrapper {...rest}>
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

export default SliderInput
