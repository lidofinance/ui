import { Meta, StoryFn } from '@storybook/react'
import {
  SliderCardIcon,
  SliderCardImage,
  SliderCard,
  SliderCardProps,
} from './SliderCard'
import {
  StorybookContainer,
  StorybookGroup,
  StorybookSection,
} from '../../../.storybook/components'
import { Metamask } from '../../icons'

export default {
  component: SliderCard,
  title: 'Cards/SliderCard',
  args: {
    title: 'Name',
    subtitle: '',
    href: 'https://example.com',
    text: 'Provide Liquidity to Balancer MetaStable Pools to liquidity mine LDO and BAL.',
    icon: <Metamask />,
    buttonText: '',
    variant: 'default',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'last-child'],
    },
    buttonText: {
      control: { type: 'text' },
    },
  },
} satisfies Meta

export const Basic: StoryFn<SliderCardProps> = (props) => {
  return (
    <div style={{ width: '220px' }}>
      <SliderCard {...props} />
    </div>
  )
}

export const AllStates: StoryFn<SliderCardProps> = () => {
  const flexStyle = { display: 'flex', gap: '200px' }

  return (
    <StorybookContainer>
      <div style={flexStyle}>
        <StorybookSection title='Icons' style={{ width: '100%' }}>
          <div style={flexStyle}>
            <StorybookGroup title='Icon Default'>
              <SliderCardIcon
                title='Application'
                href='https://example.com'
                icon={<Metamask />}
                text='Lorem ipsum dolor sit amet consectetur. Amet aliquet venenatis mi senectussenectus'
              />
            </StorybookGroup>

            <StorybookGroup title='Icon Last Child'>
              <SliderCardIcon
                title='Title'
                href='https://example.com'
                subtitle='Subtitle'
                text='Explore more apps on Lido Ecosystem page'
                buttonText='Explore'
                variant='last-child'
              />
            </StorybookGroup>
          </div>
        </StorybookSection>
      </div>
      <div style={flexStyle}>
        <StorybookSection title='Images' style={{ width: '100%' }}>
          <div style={flexStyle}>
            <StorybookGroup title='Image Default'>
              <SliderCardImage
                title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l'
                href='https://example.com'
                image={
                  <img
                    src='https://lido.fi/static/index/node-operator/map-v3.svg'
                    alt=''
                  />
                }
                text='Description'
              />
            </StorybookGroup>

            <StorybookGroup title='Image Last Child'>
              <SliderCardImage
                title='Explore'
                href='https://example.com'
                image={
                  <img
                    src='https://lido.fi/static/index/node-operator/map-v3.svg'
                    alt=''
                  />
                }
                text='Explore more videos on Lido Youtube channel'
                variant='last-child'
              />
            </StorybookGroup>
          </div>
        </StorybookSection>
      </div>
    </StorybookContainer>
  )
}

AllStates.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Displays all possible SliderCard states for easy review.',
    },
  },
}
