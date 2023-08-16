import { FC } from 'react'
import { ContentThemeOnlyDark, ContentThemeOnlyLight } from './styles'
import { ContentThemeProps } from './types'

export const ContentTheme: FC<ContentThemeProps> = (
  props: ContentThemeProps,
) => {
  return (
    <>
      <ContentThemeOnlyDark>{props.darkContent}</ContentThemeOnlyDark>
      <ContentThemeOnlyLight>{props.lightContent}</ContentThemeOnlyLight>
    </>
  )
}
