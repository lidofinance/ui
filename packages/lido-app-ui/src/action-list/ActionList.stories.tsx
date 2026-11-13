import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { ContainerWidths } from '../../.storybook/components'
import { Button } from '../button'
import { Card } from '../card'
import { Identicon } from '../identicon'
import { Tag } from '../tag'
import { BodyLarge, Description } from '../typography'
import { ActionList, ActionRow } from '.'
import { TintedCircle } from './storyFixtures'

const FIGMA = 'https://www.figma.com/design/9q8Bp7XHM2XGipfpLI63s1/?node-id='

const meta: Meta<typeof ActionList> = {
  title: 'Content & Data/ActionList',
  component: ActionList,
  subcomponents: { ActionRow } as Meta<typeof ActionList>['subcomponents'],
  tags: ['autodocs'],
  args: { divided: true },
  argTypes: {
    overline: { control: { type: 'text' } },
    divided: { control: { type: 'boolean' } },
  },
  parameters: {
    layout: 'padded',
    controls: { exclude: ['className'] },
    design: { type: 'figma', url: `${FIGMA}748-118631` },
    docs: {
      description: {
        component:
          'Navigation or summary list. `ActionRow` is a slot shell: a link (`href`) or button (`onClick`) with a chevron, otherwise a static row. Slots: `leading`, `children` and `end` sit inside the hit area (no interactive content); `trailing` stays outside it, so it can hold buttons and tags.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const address = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'

const AddressValue = ({ value }: { value: string }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
    <Identicon address={value} size={24} />
    {value.slice(0, 6)}…{value.slice(-4)}
  </span>
)

const Title = ({ children }: { children: ReactNode }) => (
  <BodyLarge as='span' weight='semibold'>
    {children}
  </BodyLarge>
)

const TitleWithTag = ({
  children,
  tag,
}: {
  children: ReactNode
  tag: ReactNode
}) => (
  <span
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '0 8px',
    }}
  >
    <Title>{children}</Title>
    {tag}
  </span>
)

const NotSet = () => (
  <BodyLarge as='span' color='neutral'>
    Not set
  </BodyLarge>
)

const Subtitle = ({ children }: { children: ReactNode }) => (
  <Description as='span' color='secondary'>
    {children}
  </Description>
)

export const Roles: Story = {
  render: (args) => (
    <Card>
      <ActionList {...args} overline='Roles'>
        <ActionRow end={<AddressValue value={address} />} href='#manager'>
          <Title>Manager address</Title>
        </ActionRow>
        <ActionRow
          end={
            <AddressValue value='0x2260fac5e5542a773aa44fbcfedf7c193bc2c599' />
          }
          href='#reward'
        >
          <TitleWithTag tag={<Tag variant='warning'>Pending change</Tag>}>
            Reward address
          </TitleWithTag>
        </ActionRow>
        <ActionRow end={<NotSet />} href='#extended'>
          <Title>Extended manager</Title>
        </ActionRow>
        <ActionRow end={<NotSet />} onClick={fn()}>
          <Title>Proposed address</Title>
        </ActionRow>
      </ActionList>
    </Card>
  ),
}

export const OperatorTypes: Story = {
  parameters: { design: { type: 'figma', url: `${FIGMA}1448-109598` } },
  render: (args) => (
    <Card>
      <ActionList {...args} overline='Current type'>
        <ActionRow leading={<TintedCircle size={52} />}>
          <Title>Community</Title>
          <Subtitle>Permissionless, 2.4 ETH bond per key</Subtitle>
        </ActionRow>
      </ActionList>
      <ActionList {...args} overline='Available types'>
        <ActionRow leading={<TintedCircle size={52} />} href='#ics'>
          <Title>Identified Community Staker</Title>
          <Subtitle>Higher curve for verified stakers</Subtitle>
        </ActionRow>
        <ActionRow leading={<TintedCircle size={52} />} href='#ea'>
          <Title>Early Adopter</Title>
          <Subtitle>Invite only</Subtitle>
        </ActionRow>
      </ActionList>
    </Card>
  ),
}

export const SingleRowWithTag: Story = {
  parameters: { design: { type: 'figma', url: `${FIGMA}75-93964` } },
  render: (args) => (
    <Card>
      <ActionList {...args}>
        <ActionRow
          trailing={<Tag variant='success'>Filled</Tag>}
          href='#survey'
        >
          <Title>Operator survey</Title>
          <Subtitle>Share your setup</Subtitle>
        </ActionRow>
      </ActionList>
    </Card>
  ),
}

export const TrailingButtons: Story = {
  render: (args) => (
    <Card>
      <ActionList {...args} overline='Addresses'>
        <ActionRow
          end={<AddressValue value={address} />}
          href='#manager'
          trailing={
            <Button size='small' variant='outline' onClick={fn()}>
              Change
            </Button>
          }
        >
          <Title>Manager address</Title>
        </ActionRow>
        <ActionRow
          end={<NotSet />}
          trailing={
            <Button size='small' variant='outline' onClick={fn()}>
              Set
            </Button>
          }
        >
          <Title>Reward address</Title>
        </ActionRow>
      </ActionList>
    </Card>
  ),
}

export const NarrowContainers: Story = {
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    design: { type: 'figma', url: `${FIGMA}2563-90226` },
  },
  render: (args) => (
    <ContainerWidths widths={[240, 320, 400, 600]}>
      <Card>
        <ActionList {...args} overline='Roles'>
          <ActionRow end={<AddressValue value={address} />} href='#reward'>
            <TitleWithTag tag={<Tag variant='warning'>Pending change</Tag>}>
              Reward address
            </TitleWithTag>
          </ActionRow>
          <ActionRow end={<NotSet />} href='#ext'>
            <Title>Extended manager</Title>
          </ActionRow>
        </ActionList>
      </Card>
    </ContainerWidths>
  ),
}
