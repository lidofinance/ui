import { ComponentPropsWithoutRef, ReactNode } from 'react'

export type EnvBannerDataTestId = {
  root?: string
  label?: string
}

export type EnvBannerOwnProps = {
  /**
   * Shorter version of the text, used below the `sm` breakpoint — the design
   * trims the default copy there. Defaults to the design's short copy while
   * the banner is showing its default text; pass it alongside your own
   * `children` to get the same trimming for custom text.
   *
   * Without a short version the text is shown at every width and wraps onto
   * another line when it does not fit.
   */
  shortText?: ReactNode
  dataTestId?: EnvBannerDataTestId
}

/**
 * The banner text is `children`, so the whole API is
 * `<EnvBanner>My text</EnvBanner>` — or `<EnvBanner />` for the default copy.
 */
export type EnvBannerProps = ComponentPropsWithoutRef<'div'> & EnvBannerOwnProps
