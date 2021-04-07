import Button from '.'

export default {
    component: Button,
    title: 'Lido UI/Button',
}

export const basic = () => <Button>Button</Button>

export const loading = () => (
    <Button isLoading loadingText='Loading...'>
        Button
    </Button>
)

export const disabled = () => <Button isDisabled>Button</Button>

export const fullWidth = () => <Button isFullWidth>Button</Button>

export const injected = () => <Button bg='red'>Button</Button>
