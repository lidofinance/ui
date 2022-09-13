import React from 'react'
import { themeDark, themeLight } from '../themes'
import { generateCssColorVariables } from '../utils/generate-css-color-variables'
import { globalStyleDataAttribute, ThemeName } from '../constants'
import { VOID_FN } from '@lidofinance/utils'

/**
 * What is happening here:
 * We want to have React dehydrated HTML to be loaded after theme is initialized.
 * That means that we need to have some code executed BEFORE main react components code,
 * before even injected script itself, so we need to provide some CSS and JS in document head
 * to read the theme from cookie and make global CSS follow preferred palette.
 * This file is providing CSS themes that defines custom CSS variables with palette to
 * make HTML document styled even before any code is loaded
 * */

const darkThemeColors = generateCssColorVariables(themeDark.colors)
const lightThemeColors = generateCssColorVariables(themeLight.colors)

export let initGlobalColors = VOID_FN
export const themeCSSValueString = `
html, [data-lido-theme='${ThemeName.light}'] {
color-theme: light;
${lightThemeColors}
}
@media (prefers-color-scheme: dark) {
html:not([data-lido-theme='${ThemeName.light}']) { 
color-theme: dark;
${darkThemeColors} 
}
}
[data-lido-theme='${ThemeName.dark}'] {
color-theme: dark;
${darkThemeColors}
}`

if (typeof window !== 'undefined') {
  if (!document.querySelector(`style[${globalStyleDataAttribute}]`)) {
    initGlobalColors = () => {
      const style = document.createElement('style')
      style.setAttribute(globalStyleDataAttribute, '')
      style.innerHTML = themeCSSValueString

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
