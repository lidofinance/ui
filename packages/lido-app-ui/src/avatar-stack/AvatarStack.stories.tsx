import type { Meta, StoryObj } from '@storybook/react'

import { TokenEth, TokenLdo, TokenUsdc, TokenSteth } from '../icons'
import { Tooltip } from '../tooltip'
import { AvatarStack } from '.'

const logo = (label: string, color: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" fill="${color}"/><text x="24" y="31" font-size="20" font-family="sans-serif" font-weight="700" text-anchor="middle" fill="#fff">${label}</text></svg>`,
  )}`

const partners = [
  { name: 'Obol', label: 'O', color: '#2f9e8f', href: '#obol' },
  { name: 'SSV', label: 'S', color: '#3b6fe0', href: '#ssv' },
  { name: 'Diva', label: 'D', color: '#8a4fd6', href: '#diva' },
  { name: 'Stakewise', label: 'W', color: '#e0713b', href: '#stakewise' },
]

const meta: Meta<typeof AvatarStack> = {
  title: 'Data Display/AvatarStack',
  component: AvatarStack,
  args: {
    size: 32,
    children: partners.map(({ name, label, color }) => (
      <img key={name} src={logo(label, color)} alt={name} />
    )),
  },
  argTypes: {
    size: { control: { type: 'number' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Links: Story = {
  render: () => (
    <AvatarStack>
      {partners.map(({ name, label, color, href }) => (
        <a key={name} href={href} aria-label={name}>
          <img src={logo(label, color)} alt='' />
        </a>
      ))}
    </AvatarStack>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Links fill their circle; the focus ring is drawn around the circle, so tab through to see it.',
      },
    },
  },
}

export const WithTooltips: Story = {
  render: () => (
    <AvatarStack>
      {partners.map(({ name, label, color }) => (
        <Tooltip key={name} content={name}>
          <a href={`#${name.toLowerCase()}`} aria-label={name}>
            <img src={logo(label, color)} alt='' />
          </a>
        </Tooltip>
      ))}
    </AvatarStack>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Wrap a focusable child (link or button) in `Tooltip` so the label also reaches keyboard users; the accessible name stays on the link. Each circle also zooms slightly and comes to the front, unless reduced motion is preferred.',
      },
    },
  },
}

export const TokenIcons: Story = {
  render: () => (
    <AvatarStack>
      <TokenEth aria-label='ETH' role='img' />
      <TokenSteth aria-label='stETH' role='img' />
      <TokenUsdc aria-label='USDC' role='img' />
      <TokenLdo aria-label='LDO' role='img' />
    </AvatarStack>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Inline SVG icons fill the circle the same way as images.',
      },
    },
  },
}

export const Small: Story = {
  args: { size: 24 },
  parameters: {
    docs: {
      description: {
        story: 'The overlap scales with the size: a quarter of the diameter.',
      },
    },
  },
}
