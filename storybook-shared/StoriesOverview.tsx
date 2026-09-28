// Overview page shared by all package Storybooks: renders the Basic story of
// every component (or its first story when there's no Basic) on one page.

import {
  Component,
  FC,
  PropsWithChildren,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { composeStories, type ReactRenderer } from '@storybook/react'
import type { ComposedStoryFn } from '@storybook/types'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Require {
      context(
        directory: string,
        useSubdirectories: boolean,
        regExp: RegExp,
      ): StoriesContext
    }
  }
}

export type StoriesContext = {
  keys(): string[]
  (id: string): unknown
}

type StoriesModule = Parameters<typeof composeStories>[0]

const PREFERRED_STORY = 'Basic'

const collectStories = (contexts: StoriesContext[]) =>
  contexts
    .flatMap((context) =>
      context.keys().map((key) => context(key) as StoriesModule),
    )
    .filter((module) => module.default?.title)
    .map((module) => {
      const stories = composeStories(module) as Record<
        string,
        ComposedStoryFn<ReactRenderer>
      >
      return {
        title: module.default.title as string,
        Story: stories[PREFERRED_STORY] ?? Object.values(stories)[0],
      }
    })
    .filter(({ Story }) => Story)
    .sort((a, b) => a.title.localeCompare(b.title))

// One broken story shouldn't take down the whole overview page.
class StoryErrorBoundary extends Component<
  { children: ReactNode },
  { error?: Error }
> {
  state: { error?: Error } = {}

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return <div>Failed to render: {this.state.error.message}</div>
    }
    return this.props.children
  }
}

const titleStyle: React.CSSProperties = {
  display: 'inline-block',
  margin: '0 0 8px',
  fontSize: '16px',
  fontWeight: 700,
  color: 'inherit',
}

const boxStyle: React.CSSProperties = {
  marginBottom: '32px',
  padding: '24px',
  border: '1px solid rgba(128, 128, 128, 0.3)',
  borderRadius: '12px',
  overflow: 'auto',
  // Makes the box the containing block for position: fixed stories (e.g. banners)
  transform: 'translateZ(0)',
}

// position: fixed content takes no space, so grow the box to fit it
const StoryBox: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [minHeight, setMinHeight] = useState<number>()

  useLayoutEffect(() => {
    const box = ref.current
    if (!box) return
    const fixedHeights = Array.from(box.querySelectorAll('*'))
      .filter((el) => getComputedStyle(el).position === 'fixed')
      .map((el) => el.getBoundingClientRect().height)
    if (fixedHeights.length) setMinHeight(Math.max(...fixedHeights))
  }, [])

  return (
    <div ref={ref} style={{ ...boxStyle, minHeight }}>
      {children}
    </div>
  )
}

export const StoriesOverview: FC<{ contexts: StoriesContext[] }> = ({
  contexts,
}) => {
  const [items] = useState(() => collectStories(contexts))

  return (
    <div>
      {items.map(({ title, Story }) => (
        <section key={title}>
          <a
            href={`./?path=/story/${Story.id}`}
            target='_top'
            style={titleStyle}
          >
            {title}
          </a>
          <StoryBox>
            <StoryErrorBoundary>
              <Story />
            </StoryErrorBoundary>
          </StoryBox>
        </section>
      ))}
    </div>
  )
}
