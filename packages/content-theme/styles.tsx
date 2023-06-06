import { InferStyledComponentPropsWithoutRef } from '@lidofinance/utils'
import styled from 'styled-components'

export type ContentThemeOnlyDarkProps = InferStyledComponentPropsWithoutRef<
  typeof ContentThemeOnlyDark
>

export const ContentThemeOnlyDark = styled.div`
  display: var(--lido-color-darkDisplay, contents);
`

export type ContentThemeOnlyLightProps = InferStyledComponentPropsWithoutRef<
  typeof ContentThemeOnlyLight
>

export const ContentThemeOnlyLight = styled.div`
  display: var(--lido-color-lightDisplay, contents);
`
