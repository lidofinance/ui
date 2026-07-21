import styled from '../utils/styled-components-wrapper.js'
import { Button } from '../button/index.js'
import { Dark, Light } from '../icons/index.js'

export const CookieThemeTogglerStyle = styled(Button).attrs({
  variant: 'text',
  size: 'xs',
})`
  display: inline-grid;
  grid-template-areas: 'a';
  min-width: 0;
  margin-left: ${({ theme }) => theme.spaceMap.sm}px;
  line-height: 0;
  font-size: 0;
  padding: 0;

  width: 44px;
  height: 44px;
  // button element contains span as children container, we want to bypass it.
  // by aiming explicit "span:first-child" we're verifying that this is what we are aiming for
  // witout breaking our SVGs
  & > span:first-child {
    display: contents;
  }
`

export const CookieThemeTogglerLightIcon = styled(Light)`
  grid-area: a;
  align-self: center;
  justify-self: center;
  visibility: var(--lido-color-darkModeVisibility);
`

export const CookieThemeTogglerDarkIcon = styled(Dark)`
  grid-area: a;
  align-self: center;
  justify-self: center;
  visibility: var(--lido-color-lightModeVisibility);
`
