import { StoryFn, Meta } from '@storybook/react'

import {
  ChartProportion,
  ChartProportionProps,
  BorderType,
  ChartProportionData,
  BorderSize,
  MarginSize,
} from './index.js'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: ChartProportion,
  title: 'Charts/ChartProportion',
  args: {
    loading: false,
    height: 20,
    border: 'rounded',
    borderSize: 'md',
    margin: 'md',
    demoCount: 3,
    showLabels: true,
  },
  argTypes: {
    demoCount: {
      control: { type: 'range', min: 2, max: 5, step: 1 },
    },
    height: {
      control: { type: 'range', min: 3, max: 24, step: 1 },
    },
    border: {
      options: getOptions(BorderType),
      control: 'inline-radio',
    },
    borderSize: {
      options: getOptions(BorderSize),
      control: 'inline-radio',
    },
    margin: {
      options: getOptions(MarginSize),
      control: 'inline-radio',
    },
    showLabels: {
      control: 'boolean',
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
  ChartProportionProps & {
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
  const colors = Array.from({ length: demoCount + 1 }, (_, index) =>
    randomColor(index),
  )

  const data: ChartProportionData[] = values.map((value, index) => ({
    color: colors[index],
    value: value,
    progress: 100,
    label: `${value}%`,
  }))
  data.push({
    color: colors[colors.length - 1],
    value: data.reduce((acc, item) => acc + item.value, 0),
    progress: 50,
    label: `${data.reduce((acc, item) => acc + item.value, 0)}%`,
  })

  return (
    <div style={{ width: '600px', padding: '10px' }}>
      <ChartProportion {...rest} data={data} />
    </div>
  )
}
