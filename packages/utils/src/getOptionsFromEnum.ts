const getOptionsFromEnum = (enumObject: Record<string, string | number>) => {
  return Object.values(enumObject).filter((value) => typeof value === 'string')
}

export default getOptionsFromEnum
