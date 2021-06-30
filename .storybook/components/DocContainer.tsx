import { FC } from 'react'
import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from '@storybook/addon-docs'
import { useDarkMode } from 'storybook-dark-mode'
import { light, dark } from '../themes'

export const DocsContainer: FC<DocsContainerProps> = ({
  children,
  context,
}) => {
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
