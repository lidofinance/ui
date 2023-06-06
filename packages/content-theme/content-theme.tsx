import { ReactElement, FC } from 'react'
import { ContentThemeOnlyDark, ContentThemeOnlyDarkProps, ContentThemeOnlyLight, ContentThemeOnlyLightProps } from './styles'

export type ContentThemeProps =  ContentThemeOnlyDarkProps & ContentThemeOnlyLightProps & {
    darkContent: ReactElement
    lightContent: ReactElement
  }

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
