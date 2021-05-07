import { Story } from '@storybook/react'
import styled from 'styled-components'
import * as components from './index'

type IconVariants = keyof typeof components
const iconKeys = Object.keys(components) as IconVariants[]

export default {
  title: 'Lido UI/Icons',
}

export const Base: Story<{ color: string; type: IconVariants }> = (props) => {
  const { color, type } = props
  const Component = components[type]

  return <Component style={{ fill: color }} />
}

Base.argTypes = {
  color: { control: 'color' },
  type: {
    options: iconKeys,
    control: 'select',
  },
}

Base.args = {
  color: '#000',
  type: 'Document',
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
  color: rgb(153, 153, 153);
  border-radius: 4px;

  &:hover {
    background: rgba(153, 153, 153, 0.1);
  }
`

export const List = () => {
  return (
    <IconList>
      {iconKeys.map((componentName) => {
        const Icon = components[componentName]

        return (
          <IconListItem key={componentName}>
            <Icon />
            <div className='title'>{componentName}</div>
          </IconListItem>
        )
      })}
    </IconList>
  )
}

const SocialList = styled.div`
  display: flex;
`

const SocialListItem = styled.div`
  background: ${(props) => props.color};
  line-height: 0;
  border-radius: 50%;
  margin: 4px;
  padding: 4px;

  svg {
    fill: #fff;
  }
`

export const Social = () => {
  const { Facebook, Twitter, Linkedin, Email } = components

  return (
    <SocialList>
      <SocialListItem color='#3B5998'>
        <Facebook />
      </SocialListItem>
      <SocialListItem color='#55ACEE'>
        <Twitter />
      </SocialListItem>
      <SocialListItem color='#007BB5'>
        <Linkedin />
      </SocialListItem>
      <SocialListItem color='#5392A0'>
        <Email />
      </SocialListItem>
    </SocialList>
  )
}
