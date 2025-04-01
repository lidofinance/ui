import { Meta, StoryFn } from '@storybook/react'
import { Accordion, AccordionProps } from '.'

const meta = {
  title: 'Layout/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px', maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'Title',
    variant: 'header',
    children: (
      <>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
      </>
    ),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>
export default meta

export const Base: StoryFn<AccordionProps> = (props: AccordionProps) => {
  return <Accordion {...props} />
}

export const AllStates: StoryFn<AccordionProps> = () => {
  return (
    <>
      <Accordion title='Header' variant='header'>
        <>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
          <p>Paragraph 3</p>
        </>
      </Accordion>
      <div style={{ height: '30px' }} />
      <Accordion title='Subheader' variant='subheader'>
        <>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
          <p>Paragraph 3</p>
        </>
      </Accordion>
    </>
  )
}
