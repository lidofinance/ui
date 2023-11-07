import { FC } from 'react'
import { ContentThemeOnlyDark, ContentThemeOnlyLight } from './styles.js'
import { ContentThemeProps } from './types.js'

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
