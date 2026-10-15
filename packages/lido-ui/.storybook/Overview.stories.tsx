import { Meta, StoryObj } from '@storybook/react'
import {
  collectStories,
  StoriesOverview,
} from '../../../storybook-shared/StoriesOverview'

export default {
  title: 'Overview',
  tags: ['!autodocs'],
  parameters: { controls: { disable: true }, actions: { disable: true } },
} satisfies Meta

// Contexts must mirror the `stories` globs in main.ts; the arguments have to be
// literals so webpack can resolve them at build time. Collected at module scope:
// JSX args created during render get a fiber `_owner`, which makes argTypes
// inference walk the fiber graph.
const items = collectStories([
  require.context('../src', true, /\.stories\.tsx$/),
])

export const Overview: StoryObj = {
  render: () => <StoriesOverview items={items} />,
}
