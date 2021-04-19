import Input from './Input'
import { Button } from '@lidofinance/button'
import styled from 'styled-components'

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
    errorMessage='Error message'
    defaultValue='alexpro@gmail.com'
  />
)

export const withAction = () => (
  <Input
    placeholder='Email address'
    defaultValue='alexpro@gmail.com'
    action={
      <Button
        height={44}
        loadingText=''
        isLoading={false}
        children='Subscribe'
      />
    }
  />
)

const SuccessAction = styled.div`
  padding: 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #61b75f;
  line-height: 44px;
`

export const withSuccessAction = () => (
  <Input
    placeholder='Email address'
    defaultValue='alexpro@gmail.com'
    action={<SuccessAction children='Subscribed' />}
    successMessage='Thank you for subscribing! We will notify you once we kick off our platform.'
  />
)
