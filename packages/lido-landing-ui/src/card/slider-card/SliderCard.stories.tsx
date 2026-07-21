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
import { Image } from '../../icons'

const placeholderImage = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 220 120'
    role='img'
    aria-label='Placeholder image'
  >
    <defs>
      <linearGradient id='slider-card-placeholder' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stopColor='#74d9f8' />
        <stop offset='50%' stopColor='#9d68f9' />
        <stop offset='100%' stopColor='#f376dd' />
      </linearGradient>
    </defs>
    <rect
      width='220'
      height='120'
      rx='8'
      fill='url(#slider-card-placeholder)'
      opacity='0.7'
    />
  </svg>
)

export default {
  component: SliderCard,
  title: 'Cards/SliderCard',
  args: {
    title: 'Application',
    subtitle: '',
    href: 'https://example.com',
    text: 'Lorem ipsum dolor sit amet consectetur. Amet aliquet venenatis mi senectussenectus',
    icon: <Image />,
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
                icon={<Image />}
                text='Lorem ipsum dolor sit amet consectetur. Amet aliquet venenatis mi senectussenectus'
              />
            </StorybookGroup>

            <StorybookGroup title='Icon Last Child'>
              <SliderCardIcon
                title='Title'
                href='https://example.com'
                subtitle='Subtitle'
                text='Lorem ipsum dolor sit amet consectetur. Amet aliquet'
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
                image={placeholderImage}
                text='Description'
              />
            </StorybookGroup>

            <StorybookGroup title='Image Last Child'>
              <SliderCardImage
                title='Explore'
                href='https://example.com'
                image={placeholderImage}
                text='Lorem ipsum dolor sit amet consectetur. Amet aliquet'
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
