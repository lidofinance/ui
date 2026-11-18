import '@testing-library/jest-dom/vitest'
import { configure } from '@testing-library/react'
import { afterEach } from 'vitest'

import { resetWarnOnce } from './utils/warnOnce'

configure({ reactStrictMode: true })

afterEach(resetWarnOnce)
