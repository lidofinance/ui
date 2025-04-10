import {
  forwardRef,
  ReactNode,
  RefObject,
  ForwardedRef,
  ComponentPropsWithoutRef,
  ReactElement,
  useState,
  useCallback,
} from 'react'
import styles from './Input.module.css'
import cn from 'classnames'
import {
  useInputValidation,
  ValidationOptions,
  ValidationState,
} from './hooks/useInputValidation.hook'
import { useInputState } from './hooks/useInputState.hook'
import { useInputStyles, InputSize } from './hooks/useInputStyles.hook'
import {
  renderRightDecorator,
  RightDecoratorButton,
  RightDecoratorType,
} from './utils/rightDecoratorUtils'
import { getLeftDecorator } from './utils/leftDecoratorUtils'

type InputType =
  | 'email'
  | 'text'
  | 'number'
  | 'password'
  | 'url'
  | 'tel'
  | 'search'

export type InputDataTestId = {
  root?: string
  error?: string
}

export type InputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'size' | 'type'
> & {
  size?: InputSize
  wrapperRef?: RefObject<HTMLLabelElement>
  error?: ReactNode
  type?: InputType
  fullwidth?: boolean
  rightDecorator?: ReactNode | RightDecoratorButton
  rightDecoratorType?: RightDecoratorType
  leftDecorator?: ReactElement
  validation?: ValidationOptions
  onValidationChange?: (state: ValidationState) => void
  dataTestId?: InputDataTestId
}

export const Input = forwardRef(
  (
    {
      id,
      wrapperRef,
      disabled = false,
      size = 'l',
      style,
      className,
      children,
      type = 'text',
      error,
      fullwidth = false,
      rightDecorator,
      rightDecoratorType = 'element',
      leftDecorator: propsLeftDecorator,
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

    // Extract input style calculations
    const { buttonStyle } = useInputStyles({ size })

    // Get left decorator based on props and input type
    const leftDecorator = getLeftDecorator({
      leftDecorator: propsLeftDecorator,
      type,
    })

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
    const isValidating = validationState.isValidating
    const isSearchType = type === 'search'
    const showPlainPlaceholder = isSearchType || size === 'm'

    return (
      <label
        className={cn(styles.container, className, {
          [styles.fullwidth]: fullwidth,
          [styles.disabled]: disabled,
        })}
        style={style}
        htmlFor={id}
        ref={wrapperRef}
        data-testid={dataTestId?.root}
      >
        <span
          className={cn(styles.inputContent, styles[`size--${size}`], {
            [styles.isError]: hasError || shouldShowValidationError,
            [styles.isDisabled]: disabled,
            [styles.isLoading]: isValidating,
            [styles.search]: isSearchType,
            [styles.noLeftDecorator]: !isSearchType && !leftDecorator,
          })}
        >
          {leftDecorator && (
            <span
              className={cn(styles.leftDecorator, {
                [styles.leftDecoratorSizeXL]: size === 'xl',
                [styles.searchLeftDecorator]: isSearchType,
              })}
              aria-hidden='true'
            >
              {leftDecorator}
            </span>
          )}
          <div className={styles.inputControlWrapper}>
            <div
              className={cn(styles.inputWrapper, {
                [styles.hasRightDecorator]: !!rightDecorator,
                [styles.hasRightDecoratorButton]:
                  !!rightDecorator && rightDecoratorType === 'button',
              })}
            >
              <div className={styles.inputInnerWrapper}>
                <input
                  className={cn(styles.input, styles[`size--${size}`])}
                  disabled={disabled}
                  type={type}
                  aria-invalid={hasError || shouldShowValidationError}
                  aria-label={ariaLabel || placeholder}
                  aria-describedby={
                    showErrorMessage ? `${id}-error` : undefined
                  }
                  ref={ref}
                  placeholder={showPlainPlaceholder ? placeholder : ' '}
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
                    [styles.rightDecoratorText]: rightDecoratorType === 'text',
                    [styles.rightDecoratorButton]:
                      rightDecoratorType === 'button',
                  })}
                  aria-hidden='true'
                >
                  {renderRightDecorator({
                    rightDecorator,
                    rightDecoratorType,
                    buttonStyle,
                    disabled,
                  })}
                </span>
              )}
            </div>
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
