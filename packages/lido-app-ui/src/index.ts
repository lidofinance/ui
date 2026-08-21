import './styles/global.css'

export { Button } from './button'
export type {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
  ButtonColor,
} from './button'

// Re-exported from lido-shared-ui so app products get the same non-production
// banner as the landing. Its styles come in through styles/global.css.
export {
  EnvBanner,
  ENV_BANNER_DEFAULT_TEXT,
  ENV_BANNER_DEFAULT_SHORT_TEXT,
} from '@lidofinance/lido-shared-ui'
export type {
  EnvBannerProps,
  EnvBannerOwnProps,
  EnvBannerDataTestId,
} from '@lidofinance/lido-shared-ui'
