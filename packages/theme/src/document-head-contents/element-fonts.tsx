import React from 'react'

const CSS_FONTS = `@import url(https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800);
body {
font-family: Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}`

export const Fonts = (): JSX.Element => <style>{CSS_FONTS}</style>
