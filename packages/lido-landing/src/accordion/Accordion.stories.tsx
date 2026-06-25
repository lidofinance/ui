import type { Meta, StoryObj } from '@storybook/react'
import {
  StorybookContainer,
  StorybookSection,
} from '../../.storybook/components'
import { Accordion } from '.'
import { Link } from '../links'
import { Checkbox } from '../checkbox'
import { Discord, Image } from '../icons/'
import { useState } from 'react'

const meta: Meta<typeof Accordion> = {
  title: 'Content Organization/Accordion',
  component: Accordion,
  args: {
    title: 'Accordion Title',
    defaultExpanded: false,
  },
  argTypes: {
    defaultExpanded: {
      control: { type: 'boolean' },
    },
    expanded: {
      control: { type: 'boolean' },
    },
    title: {
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    children: (
      <div>
        <p>This is the accordion content. It can contain any React elements.</p>
        <p>
          Multiple paragraphs, lists, buttons, or other components work here.
        </p>
      </div>
    ),
  },
}

export const AllStates: Story = {
  render: () => {
    const containerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    }

    const iconStyle: React.CSSProperties = {
      verticalAlign: 'middle',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
    }

    const [checked, setChecked] = useState(false)

    return (
      <StorybookContainer>
        <StorybookSection title='Accordion'>
          <div style={containerStyle}>
            <Accordion title='Title' defaultExpanded={false}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                possimus doloribus cupiditate quos quia illum excepturi, eius
                repellendus dignissimos quasi, vel, quas laboriosam harum
                pariatur eum necessitatibus. Voluptatum, eos voluptatem!
              </p>
              <p style={{ marginTop: '16px' }}>
                Visit our <Link href='https://lido.fi'>external website </Link>
                or check the <Link href='/docs'>internal documentation</Link>
                .{' '}
              </p>
              <div
                onClick={() => {
                  setChecked(!checked)
                }}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setChecked(!checked)
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  cursor: 'pointer',
                  marginTop: '16px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    position: 'relative',
                    width: '38px',
                    height: '38px',
                    border: '1px solid var(--lido-ui-color-borders-default)',
                    borderRadius: '50%',
                  }}
                >
                  <Image style={iconStyle} />
                </div>
                Network name
                <Checkbox variant='primary' checked={checked} />
              </div>
            </Accordion>
            <Accordion title='Title' expanded>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                possimus doloribus cupiditate quos quia illum excepturi, eius
                repellendus dignissimos quasi, vel, quas laboriosam harum
                pariatur eum necessitatibus. Voluptatum, eos voluptatem!
              </p>
              <p style={{ marginTop: '16px' }}>
                Visit our <Link href='https://lido.fi'>external website </Link>
                or check the <Link href='/docs'>internal documentation</Link>
                .{' '}
              </p>
              <div
                onClick={() => {
                  setChecked(!checked)
                }}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setChecked(!checked)
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  cursor: 'pointer',
                  marginTop: '16px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    position: 'relative',
                    width: '38px',
                    height: '38px',
                    border: '1px solid var(--lido-ui-color-borders-default)',
                    borderRadius: '50%',
                  }}
                >
                  <Discord style={iconStyle} />
                </div>
                Network name
                <Checkbox variant='primary' checked={checked} />
              </div>
            </Accordion>
          </div>
        </StorybookSection>
      </StorybookContainer>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Displays all possible Accordion states with DynamicLink and Checkbox components including colored icons for easy review.',
      },
    },
  },
}
