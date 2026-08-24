import { ComponentPropsWithoutRef, ReactNode } from 'react'

export type TestEnvBannerDataTestId = {
  root?: string
  label?: string
}

export type TestEnvBannerOwnProps = {
  /** Banner text. Defaults to the copy from the design. */
  text?: ReactNode
  /**
   * Shorter version of the text, used below the `sm` breakpoint — the design
   * trims the default copy there. Defaults to the design's short copy while
   * the banner is showing its default text; pass it alongside your own `text`
   * to get the same trimming for custom text.
   *
   * Without a short version the text is shown at every width and wraps onto
   * another line when it does not fit.
   */
  shortText?: ReactNode
  dataTestId?: TestEnvBannerDataTestId
}

export type TestEnvBannerProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
> &
  TestEnvBannerOwnProps
