import { Meta, StoryFn } from '@storybook/react'
import { RichCard, RichCardProps } from './RichCard'

export default {
  component: RichCard,
  title: 'Cards/RichCard',
  args: {
    title: 'Name',
    text: 'Provide Liquidity to Balancer MetaStable Pools to liquidity mine LDO and BAL.',
    titleImgSrc: 'https://lido.fi/static/index/defi/metamask.svg',
    tags: ['one', 'two', 'three'],
    extraLogosAmount: 2,
    logosArray: [
      'https://lido.fi/static/index/defi-strategies/mellow-points.svg',
      'https://lido.fi/static/index/defi-strategies/mellow-points.svg',
      'https://lido.fi/static/index/defi/mellow.svg',
    ],
  },
} satisfies Meta

export const Basic: StoryFn<RichCardProps> = (props) => {
  return (
    <div style={{ width: '500px' }}>
      <RichCard {...props} />
    </div>
  )
}

export const AllStates: StoryFn<RichCardProps> = (props) => {
  return (
    <>
      <div style={{ width: '500px' }}>
        <RichCard {...props} />
      </div>

      <br />
      <div style={{ width: '600px' }}>
        <RichCard
          titleImgSrc={props.titleImgSrc}
          title={props.title}
          text={props.text}
          logosArray={['https://lido.fi/static/index/defi/mellow.svg']}
        />
      </div>
      <br />
      <div style={{ width: '400px' }}>
        <RichCard
          titleImgSrc={props.titleImgSrc}
          title={props.title}
          text={props.text}
          tags={['one', 'hello im a long tag', 'two', 'three', 'four']}
        />
      </div>
    </>
  )
}
