import { Meta, StoryFn } from '@storybook/react'
import { Image } from '../../icons'
import { SimpleCard, SimpleCardProps } from './SimpleCard'

const tokenLogos = {
  ldo: 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2281%22%20height%3D%2280%22%20fill%3D%22none%22%20viewBox%3D%220%200%2081%2080%22%3E%3Cg%20clip-path%3D%22url(%23a)%22%3E%3Crect%20width%3D%2280%22%20height%3D%2280%22%20x%3D%22.429%22%20fill%3D%22%23FFAA7D%22%20rx%3D%2240%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20d%3D%22m40.467%2015.917%2011.398%2017.194-11.399%206.401L29.07%2033.11l11.398-17.193Zm-7.909%2016.38%207.909-11.93%207.909%2011.93-7.91%204.442-7.908-4.442Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22m40.45%2043.291-13.222-7.426-.361.544c-4.072%206.143-3.163%2014.188%202.187%2019.342%206.295%206.065%2016.5%206.065%2022.796%200%205.35-5.154%206.259-13.199%202.186-19.342l-.36-.545-13.226%207.427Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Crect%20width%3D%2280%22%20height%3D%2280%22%20x%3D%22.429%22%20fill%3D%22%23fff%22%20rx%3D%2240%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E',
  steth:
    'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2281%22%20height%3D%2280%22%20fill%3D%22none%22%20viewBox%3D%220%200%2081%2080%22%3E%3Cpath%20fill%3D%22%2300A3FF%22%20d%3D%22m55.053%2035.471.403.614c4.546%206.92%203.531%2015.984-2.44%2021.79C49.503%2061.291%2044.898%2063%2040.294%2063l14.76-27.529Z%22%20opacity%3D%22.6%22%2F%3E%3Cpath%20fill%3D%22%2300A3FF%22%20d%3D%22m40.292%2043.838%2014.76-8.367L40.292%2063V43.838Z%22%20opacity%3D%22.2%22%2F%3E%3Cpath%20fill%3D%22%2300A3FF%22%20d%3D%22m25.519%2035.471-.403.614c-4.546%206.92-3.53%2015.984%202.44%2021.79C31.07%2061.291%2035.675%2063%2040.279%2063L25.518%2035.47Z%22%2F%3E%3Cpath%20fill%3D%22%2300A3FF%22%20d%3D%22m40.274%2043.838-14.76-8.367L40.275%2063V43.838Z%22%20opacity%3D%22.6%22%2F%3E%3Cpath%20fill%3D%22%2300A3FF%22%20d%3D%22M40.298%2025.147v14.43l12.713-7.21-12.713-7.22Z%22%20opacity%3D%22.2%22%2F%3E%3Cpath%20fill%3D%22%2300A3FF%22%20d%3D%22m40.294%2025.147-12.723%207.22%2012.723%207.21v-14.43Z%22%20opacity%3D%22.6%22%2F%3E%3Cpath%20fill%3D%22%2300A3FF%22%20d%3D%22m40.294%2013.011-12.723%2019.36%2012.723-7.24v-12.12Z%22%2F%3E%3Cpath%20fill%3D%22%2300A3FF%22%20d%3D%22m40.298%2025.13%2012.723%207.24L40.298%2013v12.13Z%22%20opacity%3D%22.6%22%2F%3E%3C%2Fsvg%3E',
  eth: 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2281%22%20height%3D%2280%22%20fill%3D%22none%22%20viewBox%3D%220%200%2081%2080%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22m39.992%2033.053-16.373%207.446%2016.373%209.673%2016.366-9.673-16.366-7.447Z%22%20opacity%3D%22.6%22%2F%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22m23.62%2040.499%2016.372%209.673V13.333L23.619%2040.5Z%22%20opacity%3D%22.45%22%2F%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M39.986%2013.333v36.839l16.367-9.673-16.367-27.166Z%22%20opacity%3D%22.8%22%2F%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22m23.62%2043.601%2016.372%2023.066V53.274L23.619%2043.6Z%22%20opacity%3D%22.45%22%2F%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M39.986%2053.273v13.393L56.366%2043.6l-16.38%209.673Z%22%20opacity%3D%22.8%22%2F%3E%3C%2Fsvg%3E',
  wsteth:
    'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2281%22%20height%3D%2280%22%20fill%3D%22none%22%20viewBox%3D%220%200%2081%2080%22%3E%3Cg%20clip-path%3D%22url(%23a)%22%3E%3Crect%20width%3D%2280%22%20height%3D%2280%22%20x%3D%22.571%22%20fill%3D%22%2300A3FF%22%20rx%3D%2240%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22m55.339%2035.944.403.618c4.545%206.973%203.53%2016.106-2.441%2021.957-3.513%203.442-8.117%205.163-12.722%205.164l14.76-27.74Z%22%20opacity%3D%22.6%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22m40.578%2044.374%2014.759-8.43-14.76%2027.739V44.374Z%22%20opacity%3D%22.2%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22m25.804%2035.944-.403.618c-4.546%206.973-3.53%2016.106%202.44%2021.957%203.514%203.442%208.118%205.163%2012.722%205.164l-14.759-27.74Z%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22m40.56%2044.374-14.76-8.43%2014.76%2027.739V44.374Z%22%20opacity%3D%22.6%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M40.583%2025.54v14.541l12.714-7.266-12.714-7.274Z%22%20opacity%3D%22.2%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22m40.58%2025.54-12.724%207.275%2012.723%207.266v-14.54Z%22%20opacity%3D%22.6%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M40.58%2013.312%2027.855%2032.82l12.723-7.295V13.312Z%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22m40.583%2025.523%2012.723%207.295L40.583%2013.3v12.223Z%22%20opacity%3D%22.6%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Crect%20width%3D%2280%22%20height%3D%2280%22%20x%3D%22.571%22%20fill%3D%22%23fff%22%20rx%3D%2240%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E',
}

export default {
  component: SimpleCard,
  title: 'Cards/SimpleCard',
  args: {
    title: 'Name',
    href: 'https://lido.fi',
    text: 'Lorem ipsum dolor sit amet consectetur. Amet aliquet venenatis mi senectus enim nibh. Aliquet tin...',
    titleImg: <Image />,
    featuredText: 'Featured',
    tags: ['one', 'two', 'three'],
    maxLogosAmount: 2,
    learnMoreLink: 'https://example.com',
    logosArray: [
      tokenLogos.ldo,
      tokenLogos.steth,
      tokenLogos.eth,
      tokenLogos.wsteth,
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
          href='https://lido.fi'
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
          href='https://lido.fi'
          text={props.text}
          maxLogosAmount={1}
        />

        <SimpleCard
          titleImg={props.titleImg}
          logosArray={props.logosArray}
          title={'Two logos on the right'}
          href='https://lido.fi'
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
