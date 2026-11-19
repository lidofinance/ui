import { getStoryContext } from '@storybook/test-runner'
import type { TestRunnerConfig } from '@storybook/test-runner'
import { checkA11y, injectAxe } from 'axe-playwright'

import { viewports } from './viewports'

const DEFAULT_SIZE = { width: 1280, height: 720 }

const px = (value: string) => Number.parseInt(value, 10)

const config: TestRunnerConfig = {
  async preVisit(page, context) {
    await injectAxe(page)

    // The runner ignores the viewport addon, so apply the story's viewport global itself.
    const { storyGlobals } = (await getStoryContext(page, context)) as {
      storyGlobals?: { viewport?: { value?: string } }
    }
    const key = storyGlobals?.viewport?.value as
      | keyof typeof viewports
      | undefined
    const preset = key ? viewports[key] : undefined
    await page.setViewportSize(
      preset
        ? {
            width: px(preset.styles.width),
            height: px(preset.styles.height),
          }
        : DEFAULT_SIZE,
    )
  },
  async postVisit(page) {
    // Report-only until the existing backlog is triaged.
    await checkA11y(
      page,
      '#storybook-root',
      {
        detailedReport: true,
        detailedReportOptions: { html: true },
        verbose: false,
      },
      true,
    )
  },
}

export default config
