export const getTopLevelDomain = () => {
  if (typeof window === 'undefined') {
    return 'localhost'
  }
  const pathParts = window.location.hostname.split('.')

  if (pathParts[pathParts.length - 1] === 'localhost') {
    return 'localhost'
  }
  // Get host with dot in first position
  return `.${pathParts.slice(-2).join('.')}`
}
