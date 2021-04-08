// Sample for ts testing
// Will be developed in it's own branch

type Props = {
  value?: string
}

function Input({ value }: Props) {
  return (
    <div>
      <div>{value}</div>
    </div>
  )
}

export default Input
