import Button from '.'

export default {
  title: 'Controls/ButtonNew',
  component: Button,
}

export const basic = () => <Button>Default</Button>
export const disabled = () => <Button disabled>Disabled</Button>
export const small = () => <Button size='sm'>Small</Button>
export const large = () => <Button size='lg'>Large</Button>
export const fullWidth = () => <Button fullwidth>Full Width</Button>
export const outlinedPrimary = () => (
  <Button variant='outlined' color='primary'>
    Outlined Primary
  </Button>
)
export const outlinedSecondary = () => (
  <Button variant='outlined' color='secondary'>
    Outlinde Seconddary
  </Button>
)
export const filledSecondary = () => (
  <Button variant='filled' color='secondary'>
    Filled Secondary
  </Button>
)
