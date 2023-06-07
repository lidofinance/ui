import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'
import styled from 'styled-components'

export type ServicePageStyleProps = InferStyledComponentPropsWithoutRef<typeof ServicePageStyle>

export const ServicePageStyle = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
`

export const ServicePageInsideStyle = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 320px;
  width: 100%;
  padding: 0 32px;
  max-width: 560px;
`
