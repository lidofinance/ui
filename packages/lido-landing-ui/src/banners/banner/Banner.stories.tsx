import { Meta, StoryFn } from '@storybook/react'
import { Banner, BannerIconGroup, BannerProps } from '../index'
import { ETH, Icon, STETH, WETH, WSTETH } from '../../icons'

export default {
  component: Banner,
  title: 'Banners/Banner',
  args: {
    title: 'Banner title',
    variant: 'primary',
    href: 'https://example.com',
  },
  argTypes: {
    onLinkClick: { action: 'clicked on banner' },
    onClose: { action: 'clicked on close' },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta

export const Basic: StoryFn<BannerProps> = (props) => <Banner {...props} />

const iconGroup = (
  <BannerIconGroup
    icons={[
      <ETH key='eth' />,
      <STETH key='steth' />,
      <WSTETH key='wsteth' />,
      <WETH key='weth' />,
    ]}
  />
)

export const AllStates: StoryFn<BannerProps> = () => {
  return (
    <>
      <Banner title='Regular banner' href='https://example.com'></Banner>
      <br />
      <Banner
        variant='secondary'
        title='Secondary banner '
        href='https://example.com'
      ></Banner>
      <br />
      <Banner
        variant='secondary'
        title='A lot of text in the banner to test how it looks when it is very-very-very long'
        href='https://example.com'
      ></Banner>
      <br />
      <Banner
        title='Banner with an icon before the title'
        icon={<Icon />}
        href='https://example.com'
      ></Banner>
      <br />
      <Banner
        variant='secondary'
        title='Secondary banner with an icon'
        icon={<Icon />}
        href='https://example.com'
      ></Banner>
      <br />
      <Banner
        title='Banner with an icon after the title that wraps together with the last word'
        endIcon={<Icon />}
        href='https://example.com'
      ></Banner>
      <br />
      <Banner
        title='Now Lido Staking UI supports direct staking on four L2 chains'
        endIcon={iconGroup}
        href='https://example.com'
      ></Banner>
      <br />
      <Banner
        variant='secondary'
        title='Banner with an icon group before the title'
        icon={iconGroup}
        href='https://example.com'
      ></Banner>
    </>
  )
}

AllStates.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Displays all possible Banner states for an easy overview.',
    },
  },
}
