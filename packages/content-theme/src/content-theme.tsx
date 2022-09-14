import React, { FC } from 'react'
import { ThemeName, useThemeToggle } from '@lidofinance/theme'
import { ContentThemeProps } from './types'

export const ContentTheme: FC<ContentThemeProps> = (
  props: ContentThemeProps
) => {
  const { themeName } = useThemeToggle()

  return (
    <>
      {themeName === ThemeName.dark && <>{props.darkContent}</>}
      {themeName === ThemeName.light && <>{props.lightContent}</>}
    </>
  )
}
