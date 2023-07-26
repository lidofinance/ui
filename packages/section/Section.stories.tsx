import { StoryFn, Meta } from '@storybook/react'
import { Block } from '../block'
import { Section, SectionProps } from '.'

export default {
  component: Section,
  title: 'Layout/Section',
  args: {
    title: 'Section',
  },
} satisfies Meta

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

export const HeaderStyleOverride: StoryFn<SectionProps> = (props) => (
  <div>
    <style>{`
      h2 {
        color: red;
      }
    `}</style>
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
  </div>
)
