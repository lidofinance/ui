import styled from 'styled-components'
import { StoryFn, Meta } from '@storybook/react'
import { Block } from '@lidofinance/block'
import { Section, SectionProps } from '.'

export default {
  component: Section,
  title: 'Layout/Section',
  args: {
    title: 'Section',
  },
} as Meta

export const Basic: StoryFn<SectionProps> = (props) => (
  <Section {...props}>
    <Block>Example content</Block>
  </Section>
)

export const HeaderDecorator: StoryFn<SectionProps> = (props) => (
  <Section
    {...props}
    headerDecorator={
      <a href={'https://lido.fi/'} target={'_blank'} rel={'noreferrer'}>
        Lido link
      </a>
    }
  >
    <Block>Example content</Block>
  </Section>
)

const H2OverrideStyled = styled.div`
  h2 {
    margin: 0 auto 0 0;
    padding: 0;
    font-weight: 800;
    font-size: 18px;
    line-height: 1.3em;
  }
`

export const HeaderStyleOverride: StoryFn<SectionProps> = (props) => (
  <H2OverrideStyled>
    <Section
      {...props}
      headerDecorator={
        <a href={'https://lido.fi/'} target={'_blank'} rel={'noreferrer'}>
          Lido link
        </a>
      }
    >
      <Block>H2 style overridden</Block>
    </Section>
  </H2OverrideStyled>
)
