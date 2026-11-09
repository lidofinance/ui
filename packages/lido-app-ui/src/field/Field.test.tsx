import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { Field, getFieldDescribedBy, getFieldErrorId } from './Field'

describe('Field', () => {
  it('points the label at the control id', () => {
    render(
      <Field id='ctl' label='Name'>
        <input id='ctl' />
      </Field>,
    )
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })

  it('renders the error as an alert with the helper id', () => {
    render(
      <Field id='ctl' error='Required'>
        <input id='ctl' />
      </Field>,
    )
    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent('Required')
    expect(alert.id).toBe(getFieldErrorId('ctl'))
  })

  it('builds aria-describedby from the present parts', () => {
    expect(getFieldDescribedBy('ctl', 'Oops', 'Hint')).toBe(
      'ctl-error ctl-description',
    )
    expect(getFieldDescribedBy('ctl', true, 'Hint')).toBe('ctl-description')
    expect(getFieldDescribedBy('ctl', undefined, undefined)).toBeUndefined()
  })

  it('forwards tooltip testids', async () => {
    render(
      <Field
        id='ctl'
        label='Name'
        tooltip='Help'
        dataTestId={{ tooltip: 'tt', tooltipContent: 'tt-content' }}
      >
        <input id='ctl' />
      </Field>,
    )
    const trigger = screen.getByTestId('tt')
    expect(trigger).toBeInTheDocument()
    fireEvent.focus(trigger)
    expect(await screen.findByTestId('tt-content')).toHaveTextContent('Help')
  })
})
