import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StoryContainer } from '../../.storybook/components'
import {
  MOTION_AMPLITUDES,
  MOTION_COMPOSITES,
  MOTION_DURATIONS,
  MOTION_EASINGS,
} from './motionTokens'
import {
  cell,
  code,
  MotionDemoButton,
  MotionDemoCurve,
  MotionDemoPair,
  MotionDemoPattern,
  MotionDemoPlay,
  MotionDemoPress,
  MotionDemoTick,
  Note,
  Table,
  useTokenValue,
} from './storyFixtures'

const meta: Meta = {
  title: 'Foundations/Motion',
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Motion tokens and the shared enter/exit patterns. Exits are shorter than enters and never use ease-in. Animate only opacity, transform and clip-path; use transitions, not keyframes, for anything that can re-trigger.',
      },
    },
  },
}

export default meta
type Story = StoryObj

const DurationRow = ({ token, note }: { token: string; note: string }) => {
  const value = useTokenValue(token)
  const isExit = token.endsWith('-exit')
  return (
    <tr>
      <td style={{ ...cell, ...code }}>{token}</td>
      <td style={cell}>{value}</td>
      <td style={cell}>{note}</td>
      <td style={cell}>
        <MotionDemoPlay
          duration={token}
          easing={
            isExit ? '--lido-app-ui-easing-exit' : '--lido-app-ui-easing-out'
          }
        />
      </td>
    </tr>
  )
}

export const Durations: Story = {
  render: () => (
    <StoryContainer gap={24}>
      <Note>
        Enter uses fast/base/slow; exit uses the matching *-exit token, about
        0.7x as long and never under 80ms. A transition takes its timing from
        the destination state, which is how the mixins make exits faster.
      </Note>
      <Table head={['Token', 'Value', 'Use', 'Play']}>
        {MOTION_DURATIONS.map((item) => (
          <DurationRow key={item.token} {...item} />
        ))}
      </Table>
      <Note>Enter and exit side by side (top dot enters, bottom exits).</Note>
      {(['fast', 'base', 'slow'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: 16 }}>
          <code style={{ ...code, width: 56 }}>{size}</code>
          <MotionDemoPair
            enter={`--lido-app-ui-duration-${size}`}
            exit={`--lido-app-ui-duration-${size}-exit`}
          />
        </div>
      ))}
    </StoryContainer>
  ),
}

const EasingRow = ({ token, note }: { token: string; note: string }) => {
  const value = useTokenValue(token)
  return (
    <tr>
      <td style={{ ...cell, ...code }}>{token}</td>
      <td style={{ ...cell, ...code }}>{value}</td>
      <td style={cell}>
        <MotionDemoCurve value={value} />
      </td>
      <td style={cell}>{note}</td>
      <td style={cell}>
        <MotionDemoPlay duration='--lido-app-ui-duration-move' easing={token} />
      </td>
    </tr>
  )
}

export const Easings: Story = {
  render: () => (
    <StoryContainer gap={24}>
      <Note>
        easing-out for enters and value changes, easing-move for on-screen
        movement, easing-drawer for drawers. easing-standard is for colour only.
        easing-exit is an alias of easing-out so it can be tuned later.
      </Note>
      <Table head={['Token', 'Value', 'Curve', 'Use', 'Play']}>
        {MOTION_EASINGS.map((item) => (
          <EasingRow key={item.token} {...item} />
        ))}
      </Table>
      <Table head={['Token', 'Value', 'Use']}>
        {[...MOTION_AMPLITUDES, ...MOTION_COMPOSITES].map(({ token, note }) => (
          <tr key={token}>
            <td style={{ ...cell, ...code }}>{token}</td>
            <td style={{ ...cell, ...code }}>
              <TokenValue token={token} />
            </td>
            <td style={cell}>{note}</td>
          </tr>
        ))}
      </Table>
    </StoryContainer>
  ),
}

const TokenValue = ({ token }: { token: string }) => <>{useTokenValue(token)}</>

const Card = ({
  title,
  mixin,
  children,
}: {
  title: string
  mixin: string
  children: React.ReactNode
}) => (
  <div
    style={{
      display: 'grid',
      gap: 8,
      padding: 16,
      border: '1px solid var(--lido-app-ui-color-border-default)',
      borderRadius: 'var(--lido-app-ui-border-radius-md)',
      color: 'var(--lido-app-ui-color-text-default)',
      alignContent: 'start',
    }}
  >
    <strong style={{ fontSize: 14 }}>{title}</strong>
    <code style={code}>{mixin}</code>
    {children}
  </div>
)

export const Patterns: Story = {
  render: () => (
    <StoryContainer gap={24}>
      <Note>
        Each pattern is a mixin from styles/motion-mixins.css, driven by
        usePresence through data-state / data-motion.
      </Note>
      <div
        style={{
          display: 'grid',
          gap: 16,
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        }}
      >
        <Card title='Fade' mixin='@mixin motion-fade'>
          <MotionDemoPattern kind='fade' />
        </Card>
        <Card title='Pop' mixin='@mixin motion-pop top left'>
          <MotionDemoPattern kind='pop' />
        </Card>
        <Card title='Slide' mixin='@mixin motion-slide 16px, 0'>
          <MotionDemoPattern kind='slide' />
        </Card>
        <Card title='Collapse' mixin='@mixin motion-collapse'>
          <MotionDemoPattern kind='collapse' />
        </Card>
        <Card title='Press' mixin='@mixin motion-press'>
          <MotionDemoPress />
        </Card>
      </div>
    </StoryContainer>
  ),
}

export const Interruption: Story = {
  render: () => (
    <StoryContainer gap={24}>
      <Note>
        Click twice within 100ms: the exit reverses from where it is, it does
        not restart. Live status and attributes are shown under each toggle.
      </Note>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Card title='Pop' mixin='status / data-state / data-motion'>
          <MotionDemoPattern kind='pop' showState />
        </Card>
        <Card title='Collapse' mixin='status / data-state / data-motion'>
          <MotionDemoPattern kind='collapse' showState />
        </Card>
      </div>
    </StoryContainer>
  ),
}

export const SlowMotion: Story = {
  render: function Render() {
    const [slow, setSlow] = useState(true)
    return (
      <StoryContainer gap={24}>
        <MotionDemoButton onClick={() => setSlow((v) => !v)}>
          {slow ? 'Normal speed' : 'x5 slower'}
        </MotionDemoButton>
        <Note>
          Duration tokens are overridden on this container. transition-colors
          does not scale: it resolves at :root, so a subtree override does not
          reach it.
        </Note>
        <div
          style={
            slow
              ? ({
                  '--lido-app-ui-duration-fast': '750ms',
                  '--lido-app-ui-duration-fast-exit': '500ms',
                  '--lido-app-ui-duration-base': '1000ms',
                  '--lido-app-ui-duration-base-exit': '700ms',
                } as React.CSSProperties)
              : undefined
          }
        >
          <div
            style={{
              display: 'grid',
              gap: 16,
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            }}
          >
            <Card title='Pop' mixin='fast'>
              <MotionDemoPattern kind='pop' />
            </Card>
            <Card title='Slide' mixin='base'>
              <MotionDemoPattern kind='slide' />
            </Card>
            <Card title='Collapse' mixin='base'>
              <MotionDemoPattern kind='collapse' />
            </Card>
          </div>
        </div>
      </StoryContainer>
    )
  },
}

export const DoDont: Story = {
  render: () => (
    <StoryContainer gap={24}>
      <div
        style={{
          display: 'grid',
          gap: 24,
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        <div style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
          <strong>Do</strong>
          <Note>Exit with ease-out at the shorter exit duration.</Note>
          <MotionDemoPair
            enter='--lido-app-ui-duration-base'
            exit='--lido-app-ui-duration-base-exit'
          />
          <Note>Draw a tick with clip-path (x5 slower).</Note>
          <MotionDemoTick mode='clip' slow />
          <Note>Scale surfaces from 0.96 (see Patterns, Pop).</Note>
        </div>
        <div style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
          <strong>Don&apos;t</strong>
          <Note>
            Exit with ease-in: the first frames look like nothing happened, so
            the close feels late. The aliased easing-in token is deprecated.
          </Note>
          <Note>
            Scale a small SVG from 0: it gets promoted and demoted and snaps at
            the end (x5 slower).
          </Note>
          <MotionDemoTick mode='scale' slow />
          <Note>
            Use keyframes for toasts or toggles that can re-trigger: a restart
            jumps from zero, a transition reverses from where it is.
          </Note>
        </div>
      </div>
    </StoryContainer>
  ),
}

export const ReducedMotion: Story = {
  render: () => (
    <StoryContainer gap={16}>
      <Note>
        Every mixin carries its own prefers-reduced-motion block: transform,
        clip-path and size transitions are dropped, opacity stays at the fast
        duration. usePresence needs no matchMedia: with no running motion it
        finishes immediately.
      </Note>
      <Note>
        Emulate it in DevTools, Rendering, &ldquo;Emulate CSS media feature
        prefers-reduced-motion&rdquo;, or turn on Reduce motion in macOS
        settings.
      </Note>
      <Card title='Pop (reduced: fade only)' mixin='@mixin motion-pop'>
        <MotionDemoPattern kind='pop' />
      </Card>
    </StoryContainer>
  ),
}
