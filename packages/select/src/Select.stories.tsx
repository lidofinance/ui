import { Select } from './'

export default {
  component: Select,
  title: 'Lido UI/Select',
}

const options = [
  { label: 'One', value: 'one' },
  { label: 'Two', value: 'two' },
  { label: 'Three', value: 'three' },
]

export const basic = () => <Select placeholder='Select' options={options} />

export const smallStrong = () => (
  <Select
    size='small'
    appearance='strong'
    placeholder='Select'
    options={options}
  />
)
