import { Meta, StoryFn } from '@storybook/react'
import { CSSProperties } from 'react'
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
    target: {
      control: { type: 'select' },
      options: ['_blank', '_self', '_parent', '_top'],
    },
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

const Metric = ({
  label,
  value,
  success,
}: {
  label: string
  value: string
  success?: boolean
}) => (
  <span style={{ display: 'inline-flex', gap: '4px' }}>
    <span style={{ color: 'var(--lido-ui-color-text-tertiary)' }}>{label}</span>
    <span
      style={{
        color: success
          ? 'var(--lido-ui-color-text-success)'
          : 'var(--lido-ui-color-text-primary)',
      }}
    >
      {value}
    </span>
  </span>
)

// Matches the LDO Holders HUB slider card: 250x382, 32px top / 64px bottom padding.
const hubCardStyle = {
  '--lido-ui-slider-card-width': '250px',
  '--lido-ui-slider-card-height': '382px',
  '--lido-ui-slider-card-padding-bottom': '64px',
} as CSSProperties

export const WithFooter: StoryFn<SliderCardProps> = () => {
  return (
    <StorybookContainer>
      <StorybookSection title='Footer slot'>
        <div style={{ display: 'flex', gap: '64px' }}>
          <StorybookGroup title='Metrics, external link'>
            <SliderCardIcon
              title='stETH'
              href='https://example.com'
              icon={<Image />}
              text="Lido's liquid staking token, widely used across DeFi"
              style={hubCardStyle}
              footer={
                <span style={{ display: 'inline-flex', gap: '16px' }}>
                  <Metric label='TVL' value='$14.2B' />
                  <Metric label='APY' value='99.9%' success />
                </span>
              }
            />
          </StorybookGroup>

          <StorybookGroup title='Internal route (target=_self)'>
            <SliderCardIcon
              title='stVaults'
              href='/stvaults'
              target='_self'
              icon={<Image />}
              text='Configurable vaults with your own risk and reward setup'
              style={hubCardStyle}
              footer={<Metric label='ⓘ' value='Custom configuration' />}
            />
          </StorybookGroup>

          <StorybookGroup title='Library defaults (220x346)'>
            <SliderCardIcon
              title='stETH'
              href='https://example.com'
              icon={<Image />}
              text="Lido's liquid staking token, widely used across DeFi"
              footer={<Metric label='TVL' value='$14.2B' />}
            />
          </StorybookGroup>
        </div>
      </StorybookSection>
    </StorybookContainer>
  )
}

WithFooter.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story:
        'The `footer` slot renders arbitrary content pinned to the bottom of the card, above the optional button. `target` defaults to `_blank` and can be set to `_self` for internal routes. Size is tuned with the `--lido-ui-slider-card-width`, `--lido-ui-slider-card-height` and `--lido-ui-slider-card-padding-bottom` custom properties.',
    },
  },
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
