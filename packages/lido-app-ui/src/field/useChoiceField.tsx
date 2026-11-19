import { useId, type ReactNode } from 'react'

import cn from 'classnames'

import {
  FieldError,
  getFieldDescribedBy,
  getFieldLabelId,
  resolveFieldError,
} from './Field'

type ChoiceStyles = Record<string, string>

type ChoiceFieldOptions = {
  styles: ChoiceStyles
  label?: ReactNode
  error?: ReactNode | boolean
  disabled?: boolean
  className?: string
  describedBy?: string
  dataTestId?: { root?: string; label?: string; error?: string }
}

/** Shared label/error shell of Checkbox and RadioButton. */
export const useChoiceField = ({
  styles,
  label,
  error,
  disabled,
  className,
  describedBy: describedByProp,
  dataTestId,
}: ChoiceFieldOptions) => {
  const id = useId()
  const labelId = getFieldLabelId(id)
  const { hasError, message, hasMessage } = resolveFieldError(error)
  const hasLabel = label != null && label !== false

  const labelNode = hasLabel ? (
    <span
      id={labelId}
      className={cn(styles.label, { [styles.labelDisabled]: disabled })}
      data-testid={dataTestId?.label}
    >
      {label}
    </span>
  ) : null

  const errorNode = (
    <FieldError id={id} dataTestId={dataTestId?.error}>
      {message}
    </FieldError>
  )

  return {
    hasError,
    inputProps: {
      'aria-labelledby': hasMessage && hasLabel ? labelId : undefined,
      'aria-describedby': getFieldDescribedBy(
        id,
        error,
        undefined,
        describedByProp,
      ),
    },
    labelProps: {
      className: cn(styles.container, className, {
        [styles.containerDisabled]: disabled,
        [styles.containerWithLabel]: hasLabel,
      }),
      'data-testid': dataTestId?.root,
    },
    text: hasMessage ? (
      <span className={styles.text}>
        {labelNode}
        {errorNode}
      </span>
    ) : (
      labelNode
    ),
  }
}
