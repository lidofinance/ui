import React from 'react'
import { themeDark, themeLight } from '../themes'
import { globalStyleDataAttribute, ThemeName, VOID_FN } from '../globals'
import { generateCssColorVariables } from './utils/generate-css-color-variables'

const darkThemeColors = generateCssColorVariables(themeDark.colors)
const lightThemeColors = generateCssColorVariables(themeLight.colors)

const generateModeVisibilityCssVariables = (mode: ThemeName): string => {
  return mode === ThemeName.dark
    ? `
    --lido-lightModeVisibility: hidden;
    --lido-darkModeVisibility: visible;
  `
    : `
    --lido-lightModeVisibility: visible;
    --lido-darkModeVisibility: hidden;
  `
}

export let initGlobalColors = VOID_FN
export const themeCSSValueString = `
html, [data-lido-theme='${ThemeName.light}'] {
    color-theme: light;
    ${generateModeVisibilityCssVariables(ThemeName.light)}
    ${lightThemeColors}
}
@media (prefers-color-scheme: dark) {
    html:not([data-lido-theme='${ThemeName.light}']) { 
        color-theme: dark;
        ${generateModeVisibilityCssVariables(ThemeName.dark)}
        ${darkThemeColors} 
    }
}
[data-lido-theme='${ThemeName.dark}'] {
    color-theme: dark;
    ${generateModeVisibilityCssVariables(ThemeName.dark)}
    ${darkThemeColors}
}`

if (typeof window !== 'undefined') {
  if (!document.querySelector(`style[${globalStyleDataAttribute}]`)) {
    initGlobalColors = () => {
      const style = document.createElement('style')
      style.setAttribute(globalStyleDataAttribute, '')
      style.innerText = themeCSSValueString

      document.head.appendChild(style)
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      initGlobalColors = VOID_FN
    }
  }
}

export const StyleThemeColors = () => (
  <style
    {...{ [globalStyleDataAttribute]: true }}
    dangerouslySetInnerHTML={{ __html: themeCSSValueString }}
  />
)
