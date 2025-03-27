import { Meta, StoryFn } from '@storybook/react'
import { SimpleCard, SimpleCardProps } from './SimpleCard'

export default {
  component: SimpleCard,
  title: 'Cards/SimpleCard',
  args: {
    title: 'Name',
    subtitle: '',
    largeTitle: false,
    href: 'https://example.com',
    text: 'Provide Liquidity to Balancer MetaStable Pools to liquidity mine LDO and BAL.',
    titleImgSrc: 'https://lido.fi/static/index/defi/metamask.svg',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta

export const Basic: StoryFn<SimpleCardProps> = (props) => {
  return (
    <div style={{ width: '220px' }}>
      <SimpleCard {...props} />
    </div>
  )
}

export const AllStates: StoryFn<SimpleCardProps> = (props) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}
      >
        <div style={{ padding: '16px', border: '1px solid #eaeaea' }}>
          <h3>With large title</h3>
          <div style={{ width: '240px' }}>
            <SimpleCard
              largeTitle
              title='102'
              href='https://example.com'
              subtitle='more apps'
              text='Explore more apps on Lido Ecosystem page'
              buttonText='Explore'
            />
          </div>
          <br />
          <div style={{ height: '1px', border: '1px solid black' }} />
          <br />
          <div style={{ width: '400px' }}>
            <SimpleCard
              largeTitle
              title='102'
              href='https://example.com'
              subtitle='more apps'
              text='Explore more apps on Lido Ecosystem page'
              buttonText='Explore'
            />
          </div>
        </div>

        <div style={{ padding: '16px', border: '1px solid #eaeaea' }}>
          <h3>With image</h3>
          <div style={{ width: '220px' }}>
            <SimpleCard
              largeTitle={false}
              title='Name'
              href='https://example.com'
              titleImgSrc={props.titleImgSrc}
              text='Explore more apps on Lido Ecosystem page'
              buttonText='Explore'
            />
          </div>
          <br />
          <div style={{ height: '1px', border: '1px solid black' }} />
          <br />
          <div style={{ width: '400px' }}>
            <SimpleCard
              href='https://example.com'
              largeTitle={false}
              title='Name'
              titleImgSrc={props.titleImgSrc}
              text='Explore more apps on Lido Ecosystem page'
              buttonText='Explore'
            />
          </div>
        </div>
      </div>
    </>
  )
}
