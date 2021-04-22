import Button from '.'

export default {
  title: 'ButtonNew',
  component: Button,
};

export const basic = () => <Button>Normal text</Button>
export const disabled = () => <Button disabled>Normal text</Button>
export const small = () => <Button size="sm">Normal text</Button>
export const large = () => <Button size="lg">Normal text</Button>
export const fullWidth = () => <Button fullwidth>Normal text</Button>
export const outlinedPrimary = () => <Button variant="outlined" color="primary">Normal text</Button>
export const outlinedSecondary = () => <Button variant="outlined" color="secondary">Normal text</Button>
export const filledSecondary = () => <Button variant="filled" color="secondary">Normal text</Button>

