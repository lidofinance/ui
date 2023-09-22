import { FC } from 'react'
import { ContentThemeOnlyDark, ContentThemeOnlyLight } from './styles'
import { ContentThemeProps } from './types'

export const ContentTheme: FC<ContentThemeProps> = ({
  darkContent,
  lightContent,
  ...rest
}: ContentThemeProps) => {
  return (
    <>
      <ContentThemeOnlyDark {...rest}>{darkContent}</ContentThemeOnlyDark>
      <ContentThemeOnlyLight {...rest}>{lightContent}</ContentThemeOnlyLight>
    </>
  )
}
