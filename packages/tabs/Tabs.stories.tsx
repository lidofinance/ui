import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'
import { AccordionTransparent } from '../accordion-transparent'
import { Block } from '../block'
import { Box } from '../box'
import {
  ChartLine,
  ChartLineBorderType,
  ChartLineThresholdType,
  LineData,
} from '../chart-line'
import { Text } from '../text'
import styled from '../utils/styled-components-wrapper.js'
import { Tab, Tabs } from './index.js'

export default {
  component: Tabs,
  title: 'Controls/Tabs',
} as Meta

const chartData: LineData[] = [
  {
    color: '#00a3ff',
    threshold: {
      value: 40,
      label: '40%',
      description: 'Metric A',
    },
    labelPosition: 'bottom',
  },
  {
    color: '#53BA95',
    threshold: {
      value: 70,
      label: '70%',
      description: 'Metric B',
    },
    labelPosition: 'top',
  },
]

const scrollTabs = [
  'Overview',
  'Performance',
  'Strategy',
  'Portfolio',
  'Analytics',
  'Risk',
  'Validators',
  'Rewards',
  'Withdrawals',
  'Governance',
  'Security',
  'Roadmap',
  'FAQ',
  'Support',
  'Settings',
]

const ScrollTabs = styled(Tabs)`
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Basic: StoryFn = () => {
  const [active, setActive] = useState('performance')

  return (
    <Box>
      <Tabs>
        <Tab
          active={active === 'performance'}
          onClick={() => setActive('performance')}
        >
          Block
        </Tab>
        <Tab
          active={active === 'strategy'}
          onClick={() => setActive('strategy')}
        >
          Accordion
        </Tab>
        <Tab active={active === 'faq'} onClick={() => setActive('faq')}>
          Chart
        </Tab>
      </Tabs>

      <Box mt='16px'>
        {active === 'performance' && (
          <Block>
            <Box mb='12px'>
              <Text size='sm' strong>
                Neutral Block
              </Text>
            </Box>
            <Box mb='12px'>
              <Text size='xs' color='secondary'>
                Simple text content to demonstrate a basic block layout.
              </Text>
            </Box>
            <Box>
              {['Line item one', 'Line item two', 'Line item three'].map(
                (item) => (
                  <Box key={item} mb='6px'>
                    <Text size='xs' color='secondary'>
                      {item}
                    </Text>
                  </Box>
                ),
              )}
            </Box>
          </Block>
        )}

        {active === 'strategy' && (
          <Box>
            <AccordionTransparent summary='Section one'>
              Expandable content example with neutral text.
            </AccordionTransparent>
            <AccordionTransparent summary='Section two'>
              Another accordion item for layout variety.
            </AccordionTransparent>
            <AccordionTransparent summary='Section three'>
              Final section to show multiple accordion panels.
            </AccordionTransparent>
          </Box>
        )}

        {active === 'faq' && (
          <Box>
            <ChartLine
              data={chartData}
              height={20}
              showLabels
              border={ChartLineBorderType.rounded}
              thresholdType={ChartLineThresholdType.flag}
              maxValue={100}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export const Scroll: StoryFn = () => {
  const [active, setActive] = useState(scrollTabs[0])

  return (
    <Box>
      <ScrollTabs>
        {scrollTabs.map((label) => (
          <Tab
            key={label}
            active={active === label}
            onClick={() => setActive(label)}
          >
            {label}
          </Tab>
        ))}
      </ScrollTabs>

      <Box mt='16px'>
        <Block>
          <Box mb='12px'>
            <Text size='sm' strong>
              {active}
            </Text>
          </Box>
          <Text size='xs' color='secondary'>
            Horizontal scroll example with many tabs.
          </Text>
        </Block>
      </Box>
    </Box>
  )
}
