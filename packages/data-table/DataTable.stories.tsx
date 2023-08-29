import { StoryFn, Meta } from '@storybook/react'
import { DataTableProps, DataTableRowProps } from './types'
import DataTable, { DataTableRow } from './DataTable'

export default {
  component: DataTable,
  title: 'Layout/DataTable',
  parameters: {
    layout: 'centered',
  },
} as Meta

export const Base: StoryFn<
  DataTableProps & Pick<DataTableRowProps, 'loading'>
> = ({ loading, ...rest }) => {
  return (
    <div style={{ width: 300 }}>
      <DataTable {...rest}>
        <DataTableRow title='You will receive' loading={loading}>
          100&nbsp;LDO
        </DataTableRow>
        <DataTableRow title='Transaction gas cost' loading={loading}>
          $0.12
        </DataTableRow>
      </DataTable>
    </div>
  )
}

Base.args = {
  loading: false,
}

export const WithHint: StoryFn<DataTableProps> = (props) => {
  return (
    <div style={{ width: 300 }}>
      <DataTable {...props}>
        <DataTableRow
          title='Staking rewards fee'
          help='This fee is split between node operators, the DAO, and an insurance fund'
        >
          10%
        </DataTableRow>
        <DataTableRow title='Transaction gas cost'>$0.12</DataTableRow>
      </DataTable>
    </div>
  )
}

export const WithHighlighted: StoryFn<DataTableProps> = (props) => {
  return (
    <div style={{ width: 300 }}>
      <DataTable {...props}>
        <DataTableRow title='Staking rewards fee' highlight>
          10%
        </DataTableRow>
        <DataTableRow title='Transaction gas cost'>$0.12</DataTableRow>
      </DataTable>
    </div>
  )
}
