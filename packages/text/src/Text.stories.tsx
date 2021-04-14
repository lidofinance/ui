import Text from '.'

export default {
  component: Text,
  title: 'Lido UI/Text',
}

export const basic = () => <Text>Normal text</Text>

export const caption = () => <Text variant='caption'>Caption text</Text>

export const body18 = () => <Text variant='body18'>Body 18 text</Text>

export const body20 = () => <Text variant='body20'>Body 20 text</Text>
