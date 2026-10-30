import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'

import cn from 'classnames'

import styles from './ErrorPage.module.css'

export type ErrorPageCode = '404' | '500'

export type ErrorPageDataTestId = {
  root?: string
  code?: string
  title?: string
  description?: string
  action?: string
}

export type ErrorPageProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  /** `'404'` / `'500'` fill default title and description. */
  code?: ErrorPageCode | number | (string & {})
  /** Overrides the preset title; `null` suppresses it. */
  title?: ReactNode
  /** Overrides the preset description; `null` suppresses it. */
  description?: ReactNode
  /** Slot below the text: one or more `Button`s, which wrap on narrow screens. */
  action?: ReactNode
  dataTestId?: ErrorPageDataTestId
}

const presets: Record<ErrorPageCode, { title: string; description: string }> = {
  '404': {
    title: 'Page not found',
    description:
      'The page you’re looking for doesn’t exist or has been moved. Check the URL or return to your dashboard.',
  },
  '500': {
    title: 'Something went wrong',
    description:
      'We’re having trouble loading this page. Please try again in a moment.',
  },
}

const isPresetCode = (code?: string): code is ErrorPageCode =>
  code === '404' || code === '500'

const isEmpty = (node: ReactNode) =>
  node == null || node === '' || typeof node === 'boolean'

/** Centered 404 / 500 block with its own page gutters; render it directly in the page, not inside a container that already adds them. */
export const ErrorPage = forwardRef<HTMLDivElement, ErrorPageProps>(
  (
    { code, title, description, action, className, dataTestId, ...rest },
    ref,
  ) => {
    const codeStr = code == null ? undefined : String(code)
    const preset = isPresetCode(codeStr) ? presets[codeStr] : undefined
    const resolvedTitle = title !== undefined ? title : preset?.title
    const resolvedDescription =
      description !== undefined ? description : preset?.description

    return (
      <div
        ref={ref}
        className={cn(styles.root, className)}
        data-testid={dataTestId?.root}
        {...rest}
      >
        <div className={styles.inner}>
          {codeStr != null ? (
            <div className={styles.code} data-testid={dataTestId?.code}>
              {codeStr}
            </div>
          ) : null}
          <div className={styles.text}>
            {!isEmpty(resolvedTitle) ? (
              <h1 className={styles.title} data-testid={dataTestId?.title}>
                {resolvedTitle}
              </h1>
            ) : null}
            {!isEmpty(resolvedDescription) ? (
              <p
                className={styles.description}
                data-testid={dataTestId?.description}
              >
                {resolvedDescription}
              </p>
            ) : null}
          </div>
          {action != null ? (
            <div className={styles.action} data-testid={dataTestId?.action}>
              {action}
            </div>
          ) : null}
        </div>
      </div>
    )
  },
)

ErrorPage.displayName = 'ErrorPage'
