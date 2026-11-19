import { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Accordion } from '../accordion'
import { Drawer } from '../drawer'
import { Fab } from '../fab'
import { IconQuestion } from '../icons'
import { Typography } from '../typography'
import {
  SimpleCard,
  faqItems,
  sections,
  storyParams,
  topNavItems,
  topNavShell,
} from './fixtures'

const meta: Meta = {
  title: 'Recipes/FAQ Drawer',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/1SFw8VIyvedXmg9s4vCinh/Interface-Design-System?node-id=6191-2861',
    },
    layout: 'fullscreen',
    storyBackground: 'page',
    docs: {
      story: { inline: false, iframeHeight: 720 },
      description: {
        component:
          'Top-nav app shell with a floating help `Fab` that opens a right-side `Drawer` of FAQ `Accordion`s; render the `Fab` between `Main` and `Footer` so it stops above the footer. Keep the open state next to the `Fab`. `returnFocusTo` points at the `Fab` because Safari does not focus a clicked button, so focus would otherwise fall back to `<body>` on close.',
      },
    },
  },
  globals: { viewport: { value: 'px1440', isRotated: false } },
}

export default meta
type Story = StoryObj<typeof meta>

const FaqShell = () => {
  const [open, setOpen] = useState(false)
  const fabRef = useRef<HTMLButtonElement>(null)

  return topNavShell(topNavItems, {
    content: (
      <>
        <SimpleCard title='Page title' />
        {sections}
      </>
    ),
    afterMain: (
      <>
        <Fab
          ref={fabRef}
          icon={<IconQuestion />}
          aria-label='Frequently asked questions'
          aria-haspopup='dialog'
          aria-expanded={open}
          onClick={() => setOpen(true)}
        />
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title='FAQ'
          width={500}
          returnFocusTo={fabRef}
        >
          <div>
            {faqItems.map(({ question, answer }, index) => (
              <Accordion
                key={question}
                title={question}
                border={index < faqItems.length - 1}
              >
                <Typography variant='body'>{answer}</Typography>
              </Accordion>
            ))}
          </div>
        </Drawer>
      </>
    ),
  })
}

export const Default: Story = {
  parameters: storyParams(
    'Click the help button to open the drawer. Escape, the scrim and the close button close it.',
  ),
  render: () => <FaqShell />,
}

export const Mobile: Story = {
  parameters: storyParams(
    'On narrow viewports the drawer takes the full width.',
  ),
  globals: { viewport: { value: 'px375', isRotated: false } },
  render: () => <FaqShell />,
}
