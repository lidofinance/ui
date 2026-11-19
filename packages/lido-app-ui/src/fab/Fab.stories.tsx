import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Fab, type FabProps } from '.'

import { Footer } from '../footer'
import { IconQuestion } from '../icons'
import { Layout, Main, PageContent } from '../page-layout'
import { sections } from '../recipes/fixtures'
import { Typography } from '../typography'

const meta: Meta<typeof Fab> = {
  title: 'Buttons/Fab',
  component: Fab,
  args: {
    icon: <IconQuestion />,
    'aria-label': 'Help',
  },
  render: (args) => <DemoPage fab={<Fab {...args} />} />,
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    href: { control: { type: 'text' } },
    type: { table: { disable: true } },
    linkProps: { table: { disable: true } },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/Interface-Design-System?node-id=6191-3737',
    },
    docs: {
      story: { inline: false, iframeHeight: 360 },
      description: {
        component:
          "Floating surface `IconButton` at the viewport's bottom-right (20px inset, 12px on mobile) that stops above the `Footer` at the page end. Opener pattern with a `Drawer`: Recipes/FAQ Drawer.",
      },
    },
  },
}

export default meta
// A union of props breaks `StoryObj<typeof meta>` (args collapse to never).
type Story = StoryObj<FabProps>

const DemoPage = ({ fab }: { fab: ReactNode }) => (
  <Layout>
    <Main>
      <PageContent>{sections}</PageContent>
    </Main>
    {fab}
    <Footer aside={<Typography variant='caption'>Demo footer</Typography>} />
  </Layout>
)

export const Basic: Story = {}

export const AsLink: Story = {
  args: { href: '#faq' },
  parameters: {
    docs: {
      description: {
        story: 'With `href` it renders an anchor, e.g. to a FAQ section.',
      },
    },
  },
}
