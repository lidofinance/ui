import { FC } from 'react'
import { Fonts } from './element-fonts.js'
import { initGlobalColors, StyleThemeColors } from './element-theme-colors.js'
import {
  initGlobalCookieTheme,
  ScriptThemeValue,
} from './element-theme-script.js'
export { Fonts } from './element-fonts.js'

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
