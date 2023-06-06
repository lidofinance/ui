import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'
import styled from 'styled-components'

export type LidoLogoStylesProps = InferStyledComponentPropsWithoutRef<
  typeof LidoLogoStyles
>

export const LidoLogoStyles = styled.div`
  color: var(--lido-color-text);
  line-height: 0;
`
