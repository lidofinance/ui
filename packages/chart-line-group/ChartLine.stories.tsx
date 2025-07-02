import { StoryFn, Meta } from '@storybook/react'

import {
  ChartLine,
  ChartLineProps,
  BorderType,
  LegendDirection,
  LegendPosition,
  ThresholdType,
  LineData,
} from './index.js'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: ChartLine,
  title: 'Charts/ChartLine',
  args: {
    loading: false,
    height: 20,
    border: 'rounded',
    direction: 'horizontal',
    position: 'bottom',
    thresholdType: 'flag',
    demoCount: 3,
    showLabels: true,
    demoMaxValue: 1000,
    useMaxValue: true,
  },
  argTypes: {
    height: {
      control: { type: 'range', min: 3, max: 24, step: 1 },
    },
    border: {
      options: getOptions(BorderType),
      control: 'inline-radio',
    },
    direction: {
      options: getOptions(LegendDirection),
      control: 'inline-radio',
    },
    position: {
      options: getOptions(LegendPosition),
      control: 'inline-radio',
    },
    thresholdType: {
      options: getOptions(ThresholdType),
      control: 'inline-radio',
    },
    demoCount: {
      control: { type: 'range', min: 2, max: 5, step: 1 },
    },

    showLabels: {
      control: 'boolean',
    },
    demoMaxValue: {
      control: { type: 'range', min: 100, max: 1000, step: 100 },
    },
  },
} as Meta

const randomColor = (index: number) => {
  const seed = (index + 1) * 137.508
  const hue = seed % 360 | 0

  const saturation = 65 + ((index * 5) % 30)
  const lightness = 45 + ((index * 7) % 20)

  return hslToHex(hue, saturation, lightness)
}

const hslToHex = (h: number, s: number, l: number) => {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

export const Basic: StoryFn<
  ChartLineProps & {
    demoCount: number
    demoMaxValue: number
    useMaxValue: boolean
  }
> = (props) => {
  const { demoCount, demoMaxValue, useMaxValue, ...rest } = props
  const values = Array.from(
    { length: demoCount },
    (_, index) => demoCount + index,
  )
  const colors = Array.from({ length: demoCount }, (_, index) =>
    randomColor(index),
  )

  const data: LineData[] = values.map((value, index) => ({
    color: colors[index],
    threshold: {
      value: value * 10,
      label: `${value}%`,
      description: 'Forced Rebalance Threshold',
    },
    labelPosition: index % 2 === 0 ? ('top' as 'top' | 'bottom') : 'bottom',
  }))
  data.push({
    threshold: {
      value: 90,
      color: '#FF0000',
      label: '90%',
      description: 'Forced Rebalance Threshold',
    },
    labelPosition: 'top',
  })

  return (
    <div style={{ width: '600px' }}>
      <ChartLine
        {...rest}
        data={data}
        maxValue={useMaxValue ? demoMaxValue : undefined}
      />
    </div>
  )
}
