import type { Meta, StoryObj } from '@storybook/react'

import { DemoRouter, StorySection } from '../../.storybook/components'
import { Breadcrumbs } from '../breadcrumbs'
import { IconArrowNarrowUpRight, IconBell } from '../icons'
import { NavLink } from '../nav-link'
import { SmallCard } from '../small-card'
import { TextLink } from '../text-link'
import { LinkProvider } from './LinkProvider'

const DemoLinks = ({ withProvider }: { withProvider: boolean }) => (
  <DemoRouter withProvider={withProvider}>
    <StorySection row={false} style={{ gap: 8 }}>
      <TextLink href='/keys'>In-app: /keys</TextLink>
      <TextLink href='keys?tab=1'>Relative with query: keys?tab=1</TextLink>
      <TextLink href='https://lido.fi'>External: https://lido.fi</TextLink>
      <TextLink href='mailto:support@lido.fi'>Mailto: support@lido.fi</TextLink>
      <TextLink href='#section'>Hash: #section</TextLink>
      <TextLink href='/exports/keys.csv' download>
        Download: /exports/keys.csv
      </TextLink>
      <TextLink href='/keys' target='_blank'>
        target=_blank: /keys
      </TextLink>
    </StorySection>
    <StorySection style={{ gap: 8 }}>
      <NavLink href='/keys'>NavLink: /keys</NavLink>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Keys', href: '/keys' },
          { label: 'Details' },
        ]}
      />
    </StorySection>
    <div style={{ width: 248 }}>
      <SmallCard
        logo={<IconBell />}
        icon={<IconArrowNarrowUpRight />}
        title='SmallCard'
        description='In-app: /keys'
        href='/keys'
      />
    </div>
  </DemoRouter>
)

const meta: Meta<typeof LinkProvider> = {
  title: 'Navigation/LinkProvider',
  component: LinkProvider,
  parameters: {
    controls: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <DemoLinks withProvider />,
  parameters: {
    docs: {
      description: {
        story:
          'Click each link: in-app hrefs report `component`, absolute URLs (including `mailto:`) report `externalComponent`, and hash, `download` and `target="_blank"` links report a plain `<a>`. Navigation is prevented in the demo.',
      },
    },
  },
}

export const WithoutProvider: Story = {
  render: () => <DemoLinks withProvider={false} />,
  parameters: {
    docs: {
      description: {
        story:
          'The same links without a provider: every click is a plain `<a>`.',
      },
    },
  },
}
