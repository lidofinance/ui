export const getTopLevelDomain =
  typeof window === 'undefined'
    ? () => 'localhost'
    : () => {
        if (document.location.host.indexOf('localhost') === 0) {
          return 'localhost'
        } else {
          // Get host with dot in first position
          return `.${location.hostname.split('.').slice(-2).join('.')}`
        }
      }
