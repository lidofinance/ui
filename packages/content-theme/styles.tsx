import styled from 'styled-components'

export const ContentThemeContainer = styled.div`
  display: contents;
`

export const ContentThemeOnlyDark = styled.div`
  display: var(--lido-color-darkDisplay, contents);
`

export const ContentThemeOnlyLight = styled.div`
  display: var(--lido-color-lightDisplay, contents);
`
