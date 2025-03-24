import { Meta, StoryFn } from '@storybook/react'
import { SimpleCard, SimpleCardProps } from './SimpleCard'

export default {
  component: SimpleCard,
  title: 'Cards/SimpleCard',
  args: {
    title: 'Name',
    largeTitle: false,
    href: 'example.com',
    text: 'Provide Liquidity to Balancer MetaStable Pools to liquidity mine LDO and BAL.',
    titleImgSrc: 'https://lido.fi/static/index/defi/metamask.svg',
  },
} satisfies Meta

export const Basic: StoryFn<SimpleCardProps> = (props) => {
  return (
    <div style={{ width: '500px' }}>
      <SimpleCard {...props} />
    </div>
  )
}

export const AllStates: StoryFn<SimpleCardProps> = () => {
  return (
    <SimpleCard
      largeTitle
      title='102 more apps'
      text='Explore more apps on Lido'
      buttonText='Read more'
    />
  )
}
