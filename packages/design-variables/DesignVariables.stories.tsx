import { Meta, StoryFn } from '@storybook/react'
import { CSSVariablesViewer } from './CSSVariablesViewer'

const meta: Meta = {
  title: 'Design System/Design Variables',
  parameters: {
    docs: {
      description: {
        component:
          'Interactive design variables showcase. Browse CSS variables, breakpoints, and typography mixins used in the Lido UI design system. Switch between tabs to explore different token types.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

export const AllVariables: StoryFn = () => {
  return <CSSVariablesViewer />
}
