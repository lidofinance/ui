import type { Decorator } from '@storybook/react'
import { useGlobals } from 'storybook/internal/preview-api'
import {
  CookieThemeProvider,
  ThemeName,
  ThemeToggleContext,
} from '@lidofinance/lido-shared-ui'
import { ThemeSwitcher } from '../../src/theme-switcher'

const backgrounds = {
  surface: 'var(--lido-app-ui-color-background-surface)',
  page: 'var(--lido-app-ui-color-background-page)',
}

type StoryBackground = keyof typeof backgrounds

// Drives the theme from the toolbar's `themeOverride` global (see
// preview.tsx). The in-canvas ThemeSwitcher flips that global instead of the
// theme cookie, so it never drifts from the toolbar.
export const WithThemeProvider: Decorator = (
  Story,
  { parameters, viewMode },
) => {
  const [{ themeOverride }, updateGlobals] = useGlobals()
  const pinned =
    themeOverride === ThemeName.light || themeOverride === ThemeName.dark
  const fullscreen = parameters.layout === 'fullscreen'
  const showSwitcher =
    !fullscreen && viewMode !== 'docs' && parameters.themeSwitcher !== false
  const background =
    backgrounds[parameters.storyBackground as StoryBackground] ??
    backgrounds.surface

  const content = (
    <>
      {showSwitcher ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '16px 16px 0',
            boxSizing: 'border-box',
            background,
          }}
        >
          <ThemeSwitcher />
        </div>
      ) : null}

      <div
        style={{
          fontFamily: 'var(--lido-app-ui-font-family)',
          color: 'var(--lido-app-ui-color-text-default)',
          background,
          padding: fullscreen ? 0 : 20,
          minHeight: fullscreen ? '100vh' : undefined,
          boxSizing: 'border-box',
        }}
      >
        <Story />
      </div>
    </>
  )

  return (
    <CookieThemeProvider overrideThemeName={pinned ? themeOverride : undefined}>
      {pinned ? (
        <ThemeToggleContext.Provider
          value={{
            themeName: themeOverride,
            toggleTheme: () =>
              updateGlobals({
                themeOverride:
                  themeOverride === ThemeName.light
                    ? ThemeName.dark
                    : ThemeName.light,
              }),
          }}
        >
          {content}
        </ThemeToggleContext.Provider>
      ) : (
        content
      )}
    </CookieThemeProvider>
  )
}
