import { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Light, Eth } from '@lidofinance/icons'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  TdProps,
  TableTextColor,
  TableAlign,
  ThSortDirs,
  TrHighlight,
} from '.'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Table,
  title: 'Table/Table',
  parameters: {
    layout: 'centered',
  },
  args: {
    textColor: 'default',
    align: 'left',
    stickyHeader: true,
    showHighlight: false,
  },
  argTypes: {
    textColor: {
      options: getOptions(TableTextColor),
      control: 'inline-radio',
    },
    align: {
      options: getOptions(TableAlign),
      control: 'inline-radio',
    },
  },
} as Meta

export const Base: Story<
  TdProps & { showHighlight: boolean; stickyHeader: boolean }
> = (props, options) => {
  const [sortDir, setSortDir] = useState<ThSortDirs>('ASC')

  const isShowTrHighlights = options.args.showHighlight

  return (
    <div style={{ height: 300, overflowY: 'scroll' }}>
      <Table style={{ width: 600 }}>
        <Thead sticky={options.args.stickyHeader}>
          <Tr>
            <Th
              onClick={() => setSortDir(sortDir === 'ASC' ? 'DESC' : 'ASC')}
              sortDir={sortDir}
            >
              Date | Type
            </Th>
            <Th {...props}>Change</Th>
            <Th {...props}>Balance</Th>
            <Th {...props}>APR</Th>
            <Th {...props} variant='icon'>
              <Eth />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array(5)
            .fill(null)
            .map((item, index) => (
              <Tr
                key={index}
                // @ts-expect-error this is a story anyway
                highlight={
                  isShowTrHighlights ? TrHighlight[index % 3] : undefined
                }
              >
                <Td {...props} onClick={() => void 0}>
                  01-13-2021
                  <br />
                  Stake
                </Td>
                <Td {...props}>
                  + 0.000007452
                  <br />+ $0.02
                </Td>
                <Td {...props}>
                  10.00038581
                  <br />
                  $18,912.80
                </Td>
                <Td {...props}>2.4%</Td>
                <Td {...props} variant='icon'>
                  <Light />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  )
}
