import React, { FC } from 'react'
import { Fonts } from './element-fonts'
import { initGlobalColors, StyleThemeColors } from './element-theme-colors'
import { initGlobalCookieTheme, ScriptThemeValue } from './element-theme-script'
export { Fonts } from './element-fonts'

export const initColors = () => {
  initGlobalColors()
  initGlobalCookieTheme()
}

export const LidoUIHead: FC<{
  cssStyleVars?: boolean
  jsStyleScript?: boolean
  cssFont?: boolean
}> = ({ cssStyleVars = true, cssFont = false, jsStyleScript = true }) => (
  <>
    {cssStyleVars ? <StyleThemeColors /> : null}
    {jsStyleScript ? <ScriptThemeValue /> : null}
    {cssFont ? <Fonts /> : null}
  </>
)
