import React from 'react'
import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks'
import { useDarkMode } from 'storybook-dark-mode'
import { light, dark } from '../themes'

export const DocsContainer = ({ children, context }) => {
  const isDarkMode = useDarkMode()

  return (
    <BaseContainer
      context={{
        ...context,
        parameters: {
          ...context.parameters,
          docs: {
            theme: isDarkMode ? dark : light,
          },
        },
      }}
    >
      {children}
    </BaseContainer>
  )
}
