// Overview page shared by all package Storybooks: renders the Basic story of
// every component (or its first story when there's no Basic) on one page.

import {
  Component,
  FC,
  PropsWithChildren,
  ReactNode,
  useEffect,
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

type StoryItem = { title: string; Story: ComposedStoryFn<ReactRenderer> }

const PREFERRED_STORY = 'Basic'

// Requiring + `composeStories`-ing every single story module is heavy (it's
// every component's own file plus its full dependency tree) — doing that
// for the whole library in one synchronous pass freezes the tab. Process a
// few modules per idle tick instead, so the browser stays responsive and
// the page fills in progressively.
const BATCH_SIZE = 4

const scheduleIdle = (callback: () => void) => {
  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(callback)
  } else {
    setTimeout(callback, 0)
  }
}

const composeStoryItem = (module: StoriesModule): StoryItem | undefined => {
  if (!module.default?.title) return undefined
  const stories = composeStories(module) as Record<
    string,
    ComposedStoryFn<ReactRenderer>
  >
  const Story = stories[PREFERRED_STORY] ?? Object.values(stories)[0]
  if (!Story) return undefined
  return { title: module.default.title as string, Story }
}

const useStoriesCollection = (contexts: StoriesContext[]) => {
  const [items, setItems] = useState<StoryItem[]>([])

  useEffect(() => {
    let cancelled = false
    const keys = contexts.flatMap((context) =>
      context.keys().map((key) => ({ context, key })),
    )
    let index = 0

    const processBatch = () => {
      if (cancelled) return
      const batch = keys.slice(index, index + BATCH_SIZE)
      index += BATCH_SIZE

      const collected = batch
        .map(({ context, key }) => context(key) as StoriesModule)
        .map(composeStoryItem)
        .filter((item): item is StoryItem => item != null)

      if (collected.length) {
        setItems((prev) =>
          [...prev, ...collected].sort((a, b) =>
            a.title.localeCompare(b.title),
          ),
        )
      }

      if (index < keys.length) scheduleIdle(processBatch)
    }

    scheduleIdle(processBatch)
    return () => {
      cancelled = true
    }
  }, [contexts])

  return items
}

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
  // Mounting every story at once (dozens of components, each with its own
  // effects/animations) is what makes the page lag on load — render a
  // story's children only once its box scrolls near the viewport.
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const box = ref.current
    if (!box) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setInView(true)
        observer.disconnect()
      },
      { rootMargin: '600px 0px' },
    )
    observer.observe(box)
    return () => observer.disconnect()
  }, [])

  useLayoutEffect(() => {
    const box = ref.current
    if (!box) return
    const fixedHeights = Array.from(box.querySelectorAll('*'))
      .filter((el) => getComputedStyle(el).position === 'fixed')
      .map((el) => el.getBoundingClientRect().height)
    if (fixedHeights.length) setMinHeight(Math.max(...fixedHeights))
  }, [inView])

  return (
    <div ref={ref} style={{ ...boxStyle, minHeight }}>
      {inView ? children : null}
    </div>
  )
}

export const StoriesOverview: FC<{ contexts: StoriesContext[] }> = ({
  contexts,
}) => {
  const items = useStoriesCollection(contexts)

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
