import { Story, Meta } from '@storybook/react'
import Table from './Table'
import Thead from './Thead'
import Tbody from './Tbody'
import Tr from './Tr'
import Td from './Td'
import Th from './Th'

import { TdProps, TableTextColor, TableAlign } from './types'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: Table,
  title: 'Table/Table',
  parameters: {
    layout: 'centered',
  },
  args: {
    textColor: 'secondary',
    align: 'left',
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

export const Base: Story<TdProps> = (props) => {
  return (
    <Table style={{ width: 600 }}>
      <Thead>
        <Tr>
          <Th>Date | Type</Th>
          <Th {...props}>Change</Th>
          <Th {...props}>Balance</Th>
          <Th {...props}>APR</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
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
        </Tr>
        <Tr>
          <Td>
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
        </Tr>
      </Tbody>
    </Table>
  )
}
