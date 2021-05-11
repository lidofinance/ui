import { Story } from '@storybook/react'
import { CheckboxProps } from './types'
import Checkbox from './Checkbox'

export default {
  component: Checkbox,
  title: 'Lido UI/Checkbox',
}

export const Basic: Story<CheckboxProps> = (props) => <Checkbox {...props} />

export const Disabled: Story<CheckboxProps> = (props) => (
  <>
    <Checkbox disabled {...props} /> <Checkbox disabled checked {...props} />
  </>
)
