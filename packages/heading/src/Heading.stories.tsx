import Heading from '.'

export default {
  component: Heading,
  title: 'Typography/Heading',
}

export const basic = () => <Heading>Normal Heading</Heading>
export const small = () => <Heading size='sm'>32px Heading</Heading>
export const medium = () => <Heading size='md'>44px Heading</Heading>
export const large = () => <Heading size='lg'>56px Heading</Heading>
export const variantColor = () => (
  <Heading variant='textSecondary'>Secondary color</Heading>
)
