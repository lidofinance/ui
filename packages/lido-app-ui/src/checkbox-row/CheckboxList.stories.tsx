import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from '../tag'
import { CheckboxList } from './CheckboxList'
import { CheckboxRow } from './CheckboxRow'

const meta: Meta<typeof CheckboxList> = {
  title: 'Inputs & Controls/CheckboxList',
  component: CheckboxList,
  argTypes: {
    header: { control: false },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <CheckboxList {...args} style={{ width: 480 }}>
      <CheckboxRow
        label='Operator #419'
        description='Community Staking Module'
      />
      <CheckboxRow label='Operator #420' defaultChecked />
      <CheckboxRow label='Operator #421' disabled />
    </CheckboxList>
  ),
}

const keys = [
  '0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
  '0xb2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3',
  '0xc3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4',
]

export const SelectAll: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Bulk key selection: the header row selects all and shows `indeterminate` while only some keys are checked.',
      },
    },
  },
  render: function Render() {
    const [checked, setChecked] = useState<string[]>([keys[0]])
    const all = checked.length === keys.length
    const some = checked.length > 0 && !all

    return (
      <CheckboxList
        style={{ width: 480 }}
        header={
          <CheckboxRow
            label='Select all keys'
            checked={all}
            indeterminate={some}
            onChange={() => setChecked(all ? [] : keys)}
          />
        }
      >
        {keys.map((key, index) => (
          <CheckboxRow
            key={key}
            mono
            label={key}
            checked={checked.includes(key)}
            trailing={index === 1 ? <Tag variant='error'>Duplicate</Tag> : null}
            onChange={(event) =>
              setChecked((prev) =>
                event.target.checked
                  ? [...prev, key]
                  : prev.filter((item) => item !== key),
              )
            }
          />
        ))}
      </CheckboxList>
    )
  },
}
