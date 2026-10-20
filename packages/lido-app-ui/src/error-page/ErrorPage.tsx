import type { HTMLAttributes, ReactNode } from 'react'

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
  code?: ErrorPageCode | (string & {})
  title?: ReactNode
  description?: ReactNode
  /** Slot below the text, usually a `Button`. */
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

export const ErrorPage = ({
  code,
  title,
  description,
  action,
  className,
  dataTestId,
  ...rest
}: ErrorPageProps) => {
  const preset = isPresetCode(code) ? presets[code] : undefined
  const resolvedTitle = title !== undefined ? title : preset?.title
  const resolvedDescription =
    description !== undefined ? description : preset?.description

  return (
    <div
      className={cn(styles.root, className)}
      data-testid={dataTestId?.root}
      {...rest}
    >
      <div className={styles.inner}>
        {code != null ? (
          <div className={styles.code} data-testid={dataTestId?.code}>
            {code}
          </div>
        ) : null}
        <div className={styles.text}>
          {resolvedTitle != null ? (
            <h1 className={styles.title} data-testid={dataTestId?.title}>
              {resolvedTitle}
            </h1>
          ) : null}
          {resolvedDescription != null ? (
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
}
