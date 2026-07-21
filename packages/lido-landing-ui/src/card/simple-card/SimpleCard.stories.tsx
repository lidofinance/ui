import { Meta, StoryFn } from '@storybook/react'
import { Image } from '../../icons'
import { SimpleCard, SimpleCardProps } from './SimpleCard'

const circleLogo = (color: string) =>
  `data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80'%20height='80'%3E%3Ccircle%20cx='40'%20cy='40'%20r='40'%20fill='%23${color}'/%3E%3C/svg%3E`

const placeholderLogos = {
  blue: circleLogo('74D9F8'),
  purple: circleLogo('9D68F9'),
  pink: circleLogo('F376DD'),
  orange: circleLogo('FFAA7D'),
}

export default {
  component: SimpleCard,
  title: 'Cards/SimpleCard',
  args: {
    title: 'Application',
    href: 'https://example.com',
    text: 'Lorem ipsum dolor sit amet consectetur. Amet aliquet venenatis mi senectus enim nibh. Aliquet tin...',
    titleImg: <Image />,
    featuredText: 'Featured',
    tags: ['one', 'two', 'three'],
    maxLogosAmount: 2,
    learnMoreLink: 'https://example.com',
    logosArray: [
      placeholderLogos.blue,
      placeholderLogos.purple,
      placeholderLogos.pink,
      placeholderLogos.orange,
    ],
  },
} satisfies Meta

export const Basic: StoryFn<SimpleCardProps> = (props) => {
  return (
    <div style={{ width: '500px' }}>
      <SimpleCard {...props} />
    </div>
  )
}

export const AllStates: StoryFn<SimpleCardProps> = (props) => {
  return (
    <>
      <div style={{ width: '500px' }}>
        <SimpleCard {...props} />
      </div>

      <br />
      <div
        style={{
          width: '600px',
          backgroundColor: 'pink',
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
        }}
      >
        <SimpleCard
          titleImg={props.titleImg}
          title={props.title}
          text={props.text}
          logosArray={props.logosArray}
        />
        <SimpleCard
          titleImg={props.titleImg}
          title={'veery veery long title, so long so long title ' + props.title}
          text={'veery veery long text very veery long text ' + props.text}
          logosArray={props.logosArray}
        />
      </div>
      <br />
      <div style={{ width: '400px' }}>
        <SimpleCard
          titleImg={props.titleImg}
          title={props.title}
          href='https://example.com'
          text={props.text}
          tags={['one', 'hello im a long tag', 'two', 'three', 'four']}
          logosArray={props.logosArray}
        />
      </div>

      <br />
      <div style={{ display: 'flex', gap: '10px', width: '600px' }}>
        <SimpleCard
          titleImg={props.titleImg}
          logosArray={props.logosArray}
          title={'One logo on the right'}
          href='https://example.com'
          text={props.text}
          maxLogosAmount={1}
        />

        <SimpleCard
          titleImg={props.titleImg}
          logosArray={props.logosArray}
          title={'Two logos on the right'}
          href='https://example.com'
          text={props.text}
          maxLogosAmount={2}
        />
      </div>
    </>
  )
}

AllStates.parameters = {
  controls: { disable: true },
}
