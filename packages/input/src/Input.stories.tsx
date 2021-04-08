import Input from './Input'

export default {
  component: Input,
  title: 'Lido UI/Input',
}

export const basic = () => <Input placeholder='Email address' />

export const withValue = () => (
  <Input placeholder='Email address' defaultValue='alexpro@gmail.com' />
)

export const withError = () => (
  <Input
    placeholder='Email address'
    error='Error message'
    defaultValue='alexpro@gmail.com'
  />
)
