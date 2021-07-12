import { Story, Meta } from '@storybook/react'
import { FC } from 'react'
import {
  DarkThemeProvider,
  LightThemeProvider,
  ThemeProvider,
} from './provider'
import styled from 'styled-components'
import { themeLight } from './themes'

export default {
  title: 'Theme/Providers',
} as Meta

const Block: FC = styled.div`
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  margin: ${({ theme }) => theme.spaceMap.md}px 0;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xl}px;
  background: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.text};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const themeCustom = {
  ...themeLight,
  colors: {
    ...themeLight.colors,
    text: '#FFA29A',
    foreground: '#323161',
  },
}

export const Providers: Story = (props) => (
  <>
    <Block>Component inherits global theme</Block>
    <LightThemeProvider {...props}>
      <Block>Wrapped in LightThemeProvider</Block>
    </LightThemeProvider>
    <DarkThemeProvider {...props}>
      <Block>Wrapped in DarkThemeProvider</Block>
    </DarkThemeProvider>
    <ThemeProvider theme={themeCustom} {...props}>
      <Block>Wrapped in ThemeProvider, which provides custom theme</Block>
    </ThemeProvider>
  </>
)
