import { Meta, StoryObj } from '@storybook/react'
import { StoriesOverview } from '../../../storybook-shared/StoriesOverview'

export default {
  title: 'Overview',
  tags: ['!autodocs'],
  parameters: { controls: { disable: true }, actions: { disable: true } },
} satisfies Meta

// Contexts must mirror the `stories` globs in main.ts; the arguments have to be
// literals so webpack can resolve them at build time.
export const Overview: StoryObj = {
  render: () => (
    <StoriesOverview
      contexts={[
        require.context('../src', true, /\.stories\.tsx$/),
        require.context('../../lido-shared-ui/src', true, /\.stories\.tsx$/),
      ]}
    />
  ),
}
