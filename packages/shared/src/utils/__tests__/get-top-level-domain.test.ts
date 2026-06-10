import { getTopLevelDomain } from '../get-top-level-domain.js'

describe('getTopLevelDomain', () => {
  // Store original window.location
  let originalLocation: Location

  beforeEach(() => {
    // Save original location
    originalLocation = window.location

    // eslint-disable-next-line
    // @ts-ignore
    delete window.location
    // eslint-disable-next-line
    // @ts-ignore
    window.location = {
      ...originalLocation,
      hostname: '',
    } as Location
  })

  afterEach(() => {
    // Restore original location
    // eslint-disable-next-line
    // @ts-ignore
    window.location = originalLocation as Location
  })

  it('should return "localhost" when hostname is "localhost"', () => {
    window.location.hostname = 'localhost'
    expect(getTopLevelDomain()).toBe('localhost')
  })

  it('should return "localhost" when hostname ends with "localhost"', () => {
    window.location.hostname = 'test.localhost'
    expect(getTopLevelDomain()).toBe('localhost')
  })

  it('should return top-level domain with dot prefix for simple domain', () => {
    window.location.hostname = 'example.com'
    expect(getTopLevelDomain()).toBe('.example.com')
  })

  it('should return top-level domain with dot prefix for subdomain', () => {
    window.location.hostname = 'sub.example.com'
    expect(getTopLevelDomain()).toBe('.example.com')
  })

  it('should return top-level domain with dot prefix for multiple subdomains', () => {
    window.location.hostname = 'deep.sub.example.com'
    expect(getTopLevelDomain()).toBe('.example.com')
  })

  it('should handle country-specific domains correctly', () => {
    window.location.hostname = 'example.co.uk'
    expect(getTopLevelDomain()).toBe('.co.uk')
  })
})
