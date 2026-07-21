export const getTopLevelDomain =
  typeof window === 'undefined'
    ? () => 'localhost'
    : () => {
        const parts = location.hostname.split('.')
        if (parts[parts.length - 1] === 'localhost') {
          return 'localhost'
        }
        // Get host with dot in first position
        return `.${parts.slice(-2).join('.')}`
      }
