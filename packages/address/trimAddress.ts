export const trimAddress = (address: string, symbols: number): string => {
  if (symbols <= 0) return ''
  if (symbols * 2 >= address.length) return address

  const left = address.slice(0, symbols)
  const right = address.slice(-symbols)

  return `${left}...${right}`
}
