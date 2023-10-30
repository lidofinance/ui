import styled from 'styled-components'
import { Select } from './Select.js'

export const SelectIconStyle = styled(Select)`
  input {
    width: 0;
  }
`

export const SelectIconDecoratorStyle = styled.span`
  margin-right: -24px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  justify-self: stretch;
`
