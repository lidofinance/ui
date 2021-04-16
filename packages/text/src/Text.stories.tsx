import Text from '.'

export default {
  component: Text,
  title: 'Lido UI/Text',
}

export const normal = () => <Text>Normal 16px text</Text>

export const small = () => <Text size='sm'>12px text</Text>

export const large = () => <Text size='lg'>18px text</Text>

export const extraLarge = () => <Text size='xl'>20px text</Text>
