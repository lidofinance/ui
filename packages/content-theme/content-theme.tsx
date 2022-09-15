import React, { FC } from 'react'

import {
  ContentThemeContainer,
  ContentThemeOnlyDark,
  ContentThemeOnlyLight,
} from './styles'

import { ContentThemeProps } from './types'

export const ContentTheme: FC<ContentThemeProps> = (
  props: ContentThemeProps
) => {
  return (
    <ContentThemeContainer>
      <ContentThemeOnlyDark>{props.darkContent}</ContentThemeOnlyDark>
      <ContentThemeOnlyLight>{props.lightContent}</ContentThemeOnlyLight>
    </ContentThemeContainer>
  )
}
