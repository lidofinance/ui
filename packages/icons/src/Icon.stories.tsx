import { Story, Meta } from '@storybook/react'
import { Theme } from '@lidofinance/theme'
import styled, { useTheme } from 'styled-components'
import * as components from './index'

type IconVariants = keyof typeof components
const iconKeys = Object.keys(components) as IconVariants[]

export default {
  title: 'Images/Icons',
} as Meta

export const Base: Story<{ color: string; type: IconVariants }> = (props) => {
  const theme: Theme = useTheme()
  const { color, type } = props
  const Component = components[type]

  return <Component style={{ fill: color || theme.colors.text }} />
}

Base.argTypes = {
  color: { control: 'color' },
  type: {
    options: iconKeys,
    control: 'select',
  },
}

Base.args = {
  type: 'History',
}

const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const IconListItem = styled.div`
  text-align: center;
  font-size: 13px;
  line-height: 15px;
  width: 100px;
  margin: 2px;
  padding: 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
`

const IconListTitle = styled.div`
  opacity: 0.5;
`

export const List: Story = () => (
  <IconList>
    {iconKeys.map((componentName) => {
      const Icon = components[componentName]

      return (
        <IconListItem key={componentName}>
          <Icon />
          <IconListTitle>{componentName}</IconListTitle>
        </IconListItem>
      )
    })}
  </IconList>
)

const SocialList = styled.div`
  display: flex;
`

const SocialListItem = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  line-height: 0;
  border-radius: 6px;
  margin: 4px;
  padding: 4px;

  svg {
    fill: #fff;
  }
`

export const Social: Story = () => {
  const { Facebook, Twitter, Linkedin, Email, Telegram } = components

  return (
    <SocialList>
      <SocialListItem $color='#3B5998'>
        <Facebook />
      </SocialListItem>
      <SocialListItem $color='linear-gradient(203.2deg, #37AEE2 21.67%, #1E96C8 70%)'>
        <Telegram />
      </SocialListItem>
      <SocialListItem $color='#55ACEE'>
        <Twitter />
      </SocialListItem>
      <SocialListItem $color='#007BB5'>
        <Linkedin />
      </SocialListItem>
      <SocialListItem $color='#52A573;'>
        <Email />
      </SocialListItem>
    </SocialList>
  )
}
