import { FC } from 'react'
import { Story, Meta } from '@storybook/react'
import { CookieThemeProvider } from './cookie-provider'
import { useThemeToggle } from './hooks'
import styled from 'styled-components'

export default {
  title: 'Theme/Cookie provider',
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

export const ThemeToggler: FC = () => {
  const { toggleTheme, themeName } = useThemeToggle()

  console.log('toggleTheme ', toggleTheme)
  console.log('themeName ', themeName)

  return (
    <button color='secondary' onClick={toggleTheme}>
      toggle {themeName}
    </button>
  )
}

export const Providers: Story = () => (
  <>
    <CookieThemeProvider>
      <Block>
        You can change theme here. Current theme will save to cookie.
        <br />
        <ThemeToggler />
      </Block>
    </CookieThemeProvider>
  </>
)
