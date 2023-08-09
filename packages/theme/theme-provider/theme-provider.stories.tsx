import { StoryFn, Meta } from '@storybook/react'
import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { DarkThemeProvider, LightThemeProvider } from '.'

export default {
  title: 'Theme/Providers',
} satisfies Meta

const Block: FC<PropsWithChildren> = styled.div`
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  margin: ${({ theme }) => theme.spaceMap.md}px 0;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xl}px;
  background: var(--lido-color-foreground);
  color: var(--lido-color-text);

  &:not(:only-child):first-child {
    margin-top: 0;
  }

  &:not(:only-child):last-child {
    margin-bottom: 0;
  }
`

const ThemeProvider = styled.div`
  --lido-color-text: #ffa29a;
  --lido-color-foreground: #323161;
`

export const Providers: StoryFn = (props) => (
  <>
    <Block>Component inherits global theme</Block>
    <LightThemeProvider>
      <Block>Wrapped in LightThemeProvider</Block>
    </LightThemeProvider>
    <DarkThemeProvider>
      <Block>Wrapped in DarkThemeProvider</Block>
    </DarkThemeProvider>
    <ThemeProvider {...props}>
      <Block>Wrapped in ThemeProvider, which overwrites CSS variables</Block>
    </ThemeProvider>
  </>
)
