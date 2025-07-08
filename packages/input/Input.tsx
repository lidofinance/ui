import {
  forwardRef,
  ReactNode,
  RefObject,
  ForwardedRef,
  ComponentPropsWithoutRef,
  useState,
  useCallback,
  HTMLInputTypeAttribute,
  useMemo,
} from 'react'
import styles from './Input.module.css'
import cn from 'classnames'
import {
  useInputValidation,
  ValidationOptions,
  ValidationState,
} from './hooks/useInputValidation.hook'
import { useInputState } from './hooks/useInputState.hook'
import { useButtonSize } from './hooks/useButtonSize.hook'
import {
  renderRightDecorator,
  RightDecoratorButton,
  RightDecoratorType,
} from './utils/rightDecoratorUtils'
import { getIconElement, getIsColored } from './utils/leftDecoratorUtils'
import { IconConfigProp } from 'packages/utils'

export type InputDataTestId = {
  root?: string
  error?: string
}

export type InputVariant = 'label' | 'placeholder'

export type InputSize = 's' | 'm' | 'l'

export type InputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'size' | 'type'
> & {
  variant?: InputVariant
  size?: InputSize
  wrapperRef?: RefObject<HTMLLabelElement>
  error?: ReactNode
  type?: HTMLInputTypeAttribute
  rightDecorator?: ReactNode | RightDecoratorButton
  rightDecoratorType?: RightDecoratorType
  icon?: IconConfigProp
  validation?: ValidationOptions
  onValidationChange?: (state: ValidationState) => void
  dataTestId?: InputDataTestId
}

export const Input = forwardRef(
  (
    {
      variant = 'label',
      id,
      wrapperRef,
      disabled = false,
      size = 'l',
      className,
      type = 'text',
      error,
      rightDecorator,
      rightDecoratorType = 'element',
      icon,
      'aria-label': ariaLabel,
      placeholder,
      validation,
      onValidationChange,
      onChange,
      onBlur,
      value,
      dataTestId,
      ...rest
    }: InputProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isDirty, setIsDirty] = useState(false)

    // Extract validation logic into custom hook
    const {
      validationState,
      handleInputBlur: validateOnBlur,
      handleInputChange: validateOnChange,
    } = useInputValidation({
      validation,
      onValidationChange,
      type,
      initialValue: value !== undefined ? String(value) : undefined,
    })

    const { buttonSize } = useButtonSize({ size })

    // Get icon element if provided
    const iconElement = useMemo(() => getIconElement(icon), [icon])
    const isColoredIcon = useMemo(() => getIsColored(icon), [icon])

    // Handle input state changes
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e)
        validateOnChange()
        setIsDirty(true)
      },
      [onChange, validateOnChange],
    )

    // Use custom hook for input state
    const { handleBlur, handleInputFocus } = useInputState({
      wrapperRef,
      onBlur,
      validation: !!validation,
      isDirty,
      validateInput: async (value) => {
        await validateOnBlur(value)
        return true
      },
    })

    // Consolidated error state logic
    const hasError = error !== undefined
    const hasErrorMessage = Boolean(error?.toString().length)
    const shouldShowValidationError = isDirty && !validationState.isValid
    const hasValidationErrors =
      shouldShowValidationError && validationState.errors.length > 0
    const showErrorMessage = hasErrorMessage || hasValidationErrors
    const errorMessage =
      error || (hasValidationErrors ? validationState.errors[0] : null)
    const showPlainPlaceholder = size === 's' || variant === 'placeholder'
    const hasButton = !!rightDecorator && rightDecoratorType === 'button'

    return (
      <label
        className={cn(styles.container, className)}
        htmlFor={id}
        ref={wrapperRef}
        data-testid={dataTestId?.root}
      >
        <span
          className={cn(
            styles.inputContent,
            styles[`inputContent--size-${size}`],
            {
              [styles.isError]: hasError || shouldShowValidationError,
              [styles.isDisabled]: disabled,
              [styles.withIcon]: iconElement,
              [styles.withButton]: hasButton,
              [styles.withColoredIcon]: isColoredIcon,
              [styles.withFloatingLabel]: !showPlainPlaceholder,
            },
          )}
        >
          {iconElement && (
            <span className={styles.leftDecorator} aria-hidden='true'>
              {iconElement}
            </span>
          )}
          <div className={styles.inputWrapper}>
            <div className={styles.inputInnerWrapper}>
              <input
                className={cn(styles.input, styles[`size--${size}`])}
                disabled={disabled}
                type={type}
                aria-invalid={hasError || shouldShowValidationError}
                aria-label={ariaLabel || placeholder}
                aria-describedby={showErrorMessage ? `${id}-error` : undefined}
                aria-required={validation?.required}
                ref={ref}
                placeholder={placeholder}
                onFocus={handleInputFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                value={value}
                {...rest}
              />
              {placeholder && !showPlainPlaceholder && (
                <span className={styles.floatingLabel} aria-hidden='true'>
                  {placeholder}
                </span>
              )}
            </div>
            {rightDecorator && (
              <span
                className={cn(styles.rightDecorator, {
                  [styles.rightDecoratorElement]:
                    rightDecoratorType === 'element',
                })}
                aria-hidden={
                  rightDecoratorType === 'element' ? 'true' : 'false'
                }
              >
                {renderRightDecorator({
                  rightDecorator,
                  rightDecoratorType,
                  buttonClassName: styles[`inputButton--size-${size}`],
                  disabled,
                  buttonSize,
                })}
              </span>
            )}
          </div>
          {showErrorMessage && (
            <span
              className={styles.error}
              data-testid={dataTestId?.error}
              id={`${id}-error`}
              role='alert'
            >
              {errorMessage}
            </span>
          )}
        </span>
      </label>
    )
  },
)

Input.displayName = 'Input'
