import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import { CheckboxList, CheckboxRow } from '../checkbox-row'
import { SegmentedControl } from '../segmented-control'
import { H3 } from '../typography'
import {
  Field,
  FieldError,
  getFieldDescribedBy,
  getFieldLabelId,
  resolveFieldError,
} from './Field'

const meta: Meta<typeof Field> = {
  title: 'Inputs & Controls/Field',
  component: Field,
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Label row, error and description around any control. The control takes the `id` and `aria-describedby={getFieldDescribedBy(id, error, description)}`; groups also use `aria-labelledby={getFieldLabelId(id)}`.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const operators = ['Operator #419', 'Operator #420', 'Operator #421']

export const WithCheckboxList: Story = {
  render: function Render() {
    const id = 'operators'
    const [checked, setChecked] = useState<string[]>([])
    const error = checked.length === 0 ? 'Select at least one operator' : null
    const hasError = error != null
    const description = 'Keys are assigned to every selected operator.'

    return (
      <StoryContainer style={{ maxWidth: 480 }}>
        <Field
          id={id}
          label='Operators'
          tooltip='Operators the keys are uploaded for.'
          error={error}
          description={description}
        >
          <CheckboxList
            id={id}
            role='group'
            aria-labelledby={getFieldLabelId(id)}
            aria-describedby={getFieldDescribedBy(id, error, description)}
            error={hasError}
          >
            {operators.map((name) => (
              <CheckboxRow
                key={name}
                label={name}
                checked={checked.includes(name)}
                onChange={(event) =>
                  setChecked((prev) =>
                    event.target.checked
                      ? [...prev, name]
                      : prev.filter((item) => item !== name),
                  )
                }
              />
            ))}
          </CheckboxList>
        </Field>
      </StoryContainer>
    )
  },
}

export const WithSegmentedControl: Story = {
  render: function Render() {
    const id = 'action'
    const [value, setValue] = useState('supply')
    const description = 'Switch the direction of the position change.'

    return (
      <StoryContainer style={{ maxWidth: 400 }}>
        <Field
          id={id}
          label='Action'
          tooltip='What to do with the position.'
          description={description}
        >
          <SegmentedControl
            id={id}
            aria-labelledby={getFieldLabelId(id)}
            aria-describedby={getFieldDescribedBy(id, undefined, description)}
            value={value}
            onChange={setValue}
            items={[
              { value: 'supply', label: 'Supply' },
              { value: 'withdraw', label: 'Withdraw' },
              { value: 'borrow', label: 'Borrow' },
            ]}
          />
        </Field>
      </StoryContainer>
    )
  },
}

export const CustomErrorLayout: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Without `Field`: `resolveFieldError` splits `error` into invalid state and message, `FieldError` renders the message under the id `getFieldDescribedBy` points at.',
      },
    },
  },
  render: function Render() {
    const id = 'terms'
    const [checked, setChecked] = useState<string[]>([])
    const error =
      checked.length < operators.length ? (
        <>
          Accept all {operators.length} operators ({checked.length} selected)
        </>
      ) : null
    const { hasError, message, hasMessage } = resolveFieldError(error)

    return (
      <StoryContainer style={{ maxWidth: 480, display: 'grid', gap: 12 }}>
        <H3 id={getFieldLabelId(id)}>Operators to accept</H3>
        {hasMessage ? <FieldError id={id}>{message}</FieldError> : null}
        <CheckboxList
          id={id}
          role='group'
          aria-labelledby={getFieldLabelId(id)}
          aria-describedby={getFieldDescribedBy(id, error, undefined)}
          error={hasError}
        >
          {operators.map((name) => (
            <CheckboxRow
              key={name}
              label={name}
              checked={checked.includes(name)}
              onChange={(event) =>
                setChecked((prev) =>
                  event.target.checked
                    ? [...prev, name]
                    : prev.filter((item) => item !== name),
                )
              }
            />
          ))}
        </CheckboxList>
      </StoryContainer>
    )
  },
}
