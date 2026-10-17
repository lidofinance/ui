import type { HTMLAttributes, ReactNode } from 'react'

import cn from 'classnames'

import styles from './ErrorPage.module.css'

export type ErrorPageVariant = '404' | '500'

export type ErrorPageDataTestId = {
  root?: string
  code?: string
  title?: string
  description?: string
  action?: string
}

export type ErrorPageProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  /** Preset for code, title and description. */
  variant?: ErrorPageVariant
  code?: ReactNode
  title?: ReactNode
  description?: ReactNode
  /** Slot below the text, usually a `Button`. */
  action?: ReactNode
  dataTestId?: ErrorPageDataTestId
}

const presets: Record<
  ErrorPageVariant,
  { title: string; description: string }
> = {
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

export const ErrorPage = ({
  variant,
  code,
  title,
  description,
  action,
  className,
  dataTestId,
  ...rest
}: ErrorPageProps) => {
  const preset = variant ? presets[variant] : undefined
  const resolvedCode = code !== undefined ? code : variant
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
        {resolvedCode != null ? (
          <div className={styles.code} data-testid={dataTestId?.code}>
            {resolvedCode}
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
