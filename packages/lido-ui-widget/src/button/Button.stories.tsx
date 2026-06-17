import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeToggler, CookieThemeProvider, ThemeName } from '@lido-ui/shared'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Widget/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['filled', 'outlined', 'ghost'],
    },
    color: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'warning'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Connect Wallet',
    variant: 'filled',
    color: 'primary',
    size: 'md',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Section label='filled'>
        <Button variant='filled' color='primary'>
          Primary
        </Button>
        <Button variant='filled' color='secondary'>
          Secondary
        </Button>
        <Button variant='filled' color='warning'>
          Warning
        </Button>
      </Section>
      <Section label='outlined'>
        <Button variant='outlined' color='primary'>
          Primary
        </Button>
        <Button variant='outlined' color='secondary'>
          Secondary
        </Button>
      </Section>
      <Section label='ghost'>
        <Button variant='ghost' color='primary'>
          Primary
        </Button>
        <Button variant='ghost' color='secondary'>
          Secondary
        </Button>
      </Section>
      <Section label='sizes'>
        <Button size='sm'>Small</Button>
        <Button size='md'>Medium</Button>
        <Button size='lg'>Large</Button>
      </Section>
      <Section label='states'>
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button fullwidth>Full Width</Button>
      </Section>
    </div>
  ),
}

export const SharedComponents: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <p
        style={{
          margin: 0,
          color: 'var(--lido-ui-color-text-secondary)',
          fontSize: 14,
        }}
      >
        Theme components from @lido-ui/shared:
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          style={{ fontSize: 13, color: 'var(--lido-ui-color-text-secondary)' }}
        >
          ThemeToggler:
        </span>
        <ThemeToggler />
      </div>
      <CookieThemeProvider overrideThemeName={ThemeName.dark}>
        <div
          style={{
            padding: 16,
            background: 'var(--lido-ui-color-text-inverted)',
            borderRadius: 8,
            display: 'flex',
            gap: 12,
          }}
        >
          <Button variant='filled' color='primary'>
            Dark theme
          </Button>
          <Button variant='outlined' color='secondary'>
            Button
          </Button>
        </div>
      </CookieThemeProvider>
    </div>
  ),
}

function Section({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p
        style={{
          margin: '0 0 8px',
          fontSize: 12,
          color: 'var(--lido-ui-color-text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </p>
      <div
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
    </div>
  )
}
