import { Story, Meta } from '@storybook/react'
import { Box } from '.'

export default {
  component: Box,
  title: 'Styled System/Box',
} as Meta

export const Basic: Story = (props) => (
  <Box {...props} width={1 / 2} height={100} margin='auto' bg='primary' />
)

export const Breakpoints: Story = (props) => (
  <Box
    {...props}
    width={1 / 2}
    height={100}
    margin='auto'
    color='white'
    bg={['success', 'error', 'primary', 'accent']}
    fontSize={[2, 3, 4, 5]}
    display='flex'
    alignItems='center'
    justifyContent='center'
  >
    Example
  </Box>
)
