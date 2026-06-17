import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'
import { Box } from '../box'
import { Text } from '../text'
import { Switcher, SwitcherItem } from './index.js'

export default {
  component: Switcher,
  title: 'Controls/Switcher',
} as Meta

export const Basic: StoryFn = () => {
  const [active, setActive] = useState('earn')

  return (
    <Box>
      <Switcher>
        <SwitcherItem
          active={active === 'earn'}
          onClick={() => setActive('earn')}
        >
          Earn
        </SwitcherItem>
        <SwitcherItem
          active={active === 'stake'}
          onClick={() => setActive('stake')}
        >
          Stake
        </SwitcherItem>
      </Switcher>

      <Box mt='16px'>
        <Text size='xs' color='secondary'>
          Selected: {active}
        </Text>
      </Box>
    </Box>
  )
}
export const Multiple: StoryFn = () => {
  const options = [
    {
      id: 'apy',
      label: 'APY',
      tone: 'primary',
      bar: 'var(--lido-color-primary)',
    },
    {
      id: 'tvl',
      label: 'TVL',
      tone: 'success',
      bar: 'var(--lido-color-success)',
    },
    {
      id: 'risk',
      label: 'Risk',
      tone: 'warning',
      bar: 'var(--lido-color-warning)',
    },
    {
      id: 'fees',
      label: 'Fees',
      tone: 'error',
      bar: 'var(--lido-color-error)',
    },
  ] as const

  const [active, setActive] = useState<(typeof options)[number]['id']>(
    options[0].id,
  )
  const activeOption =
    options.find((option) => option.id === active) ?? options[0]

  return (
    <Box>
      <Switcher>
        {options.map((option) => (
          <SwitcherItem
            key={option.id}
            active={active === option.id}
            onClick={() => setActive(option.id)}
          >
            {option.label}
          </SwitcherItem>
        ))}
      </Switcher>

      <Box mt='16px' display='grid' style={{ rowGap: '8px' }}>
        <Text size='xs' strong color={activeOption.tone}>
          Selected: {activeOption.label}
        </Text>
        <Box height='8px' borderRadius='110px' bg={activeOption.bar} />
      </Box>
    </Box>
  )
}
