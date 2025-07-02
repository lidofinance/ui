import { LineData } from '../types.js'

type ProcessedLineData = LineData & {
  id: string
  index: number
  width: number
}

type ProcessedData = {
  data: ProcessedLineData[]
  ids: string[]
}

export const processData = (
  data: LineData[],
  maxValue?: number,
): ProcessedData => {
  // Calculate maxValue once if not provided
  const calculatedMaxValue =
    maxValue ?? Math.max(...data.map((item) => item.threshold.value))

  return data
    .sort((a, b) => a.threshold.value - b.threshold.value)
    .reduce<ProcessedData>(
      (acc, item, index) => {
        const { threshold } = item
        const id = `chart-percent-line-group-${index}-${threshold.label}`
        const width = threshold.value / (calculatedMaxValue / 100)

        const processedItem: ProcessedLineData = {
          ...item,
          id,
          index,
          width,
        }

        acc.data.push(processedItem)
        acc.ids.push(id)

        return acc
      },
      { data: [], ids: [] },
    )
}
