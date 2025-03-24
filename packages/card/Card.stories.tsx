import { Meta, StoryFn } from '@storybook/react'
import { Card, CardProps } from '../index'

export default {
  component: Card,
  title: 'Cards/Card',
  args: {
    description:
      'Please exercise caution interacting with any DeFi front-ends right now',
    title:
      'Please note Lido front-ends have been switched off as a precautionary measure whilst the Ledger connect issue is being investigated.',
    link: 'https://example.com',
    linkText: 'Keep an eye on @LidoFinance Twitter for any updates',
  },
} satisfies Meta

export const Basic: StoryFn<CardProps> = (props) => <Card {...props} />
