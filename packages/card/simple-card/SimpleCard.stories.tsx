import { Meta, StoryFn } from '@storybook/react'
import { SimpleCard, CardProps } from '../../index'

export default {
  component: SimpleCard,
  title: 'Cards/SimpleCard',
  args: {
    title: 'Name',
    hasArrow: true,
    href: 'example.com',
    text: 'Provide Liquidity to Balancer MetaStable Pools to liquidity mine LDO and BAL.',
    titleImgSrc: 'https://lido.fi/static/index/defi/metamask.svg',
  },
} satisfies Meta

export const Basic: StoryFn<CardProps> = (props) => {
  return (
    <div style={{ width: '500px' }}>
      <SimpleCard {...props} />
    </div>
  )
}
