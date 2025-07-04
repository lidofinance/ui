import { useCallback, useEffect, useState } from 'react'

type ValidationRule = {
  validate: (value: string) => boolean | Promise<boolean>
  message: string
}

export type ValidationTrigger = 'onChange' | 'onBlur' | 'onSubmit'

export type ValidationOptions = {
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  pattern?: RegExp
  email?: boolean
  url?: boolean
  tel?: boolean
  customRules?: ValidationRule[]
  trigger?: ValidationTrigger
}

export type ValidationState = {
  isValid: boolean
  errors: string[]
}

export type UseInputValidationProps = {
  validation?: ValidationOptions
  onValidationChange?: (state: ValidationState) => void
  type?: string
  initialValue?: string
}

// Extracted validation helper functions
const validateRequired = (
  value: string,
): { valid: boolean; message?: string } => {
  return {
    valid: !!value,
    message: !value ? 'This field is required' : undefined,
  }
}

const validateLength = (
  value: string,
  minLength?: number,
  maxLength?: number,
): { valid: boolean; message?: string } => {
  if (minLength && value.length < minLength) {
    return {
      valid: false,
      message: `Minimum length is ${minLength} characters`,
    }
  }

  if (maxLength && value.length > maxLength) {
    return {
      valid: false,
      message: `Maximum length is ${maxLength} characters`,
    }
  }

  return { valid: true }
}

const validateNumber = (
  value: string,
  min?: number,
  max?: number,
): { valid: boolean; message?: string } => {
  const numValue = Number(value)

  if (min !== undefined && numValue < min) {
    return {
      valid: false,
      message: `Minimum value is ${min}`,
    }
  }

  if (max !== undefined && numValue > max) {
    return {
      valid: false,
      message: `Maximum value is ${max}`,
    }
  }

  return { valid: true }
}

const validateEmail = (value: string): { valid: boolean; message?: string } => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  return {
    valid: emailRegex.test(value),
    message: !emailRegex.test(value) ? 'Invalid email address' : undefined,
  }
}

const validateUrl = (value: string): { valid: boolean; message?: string } => {
  try {
    new URL(value)
    return { valid: true }
  } catch {
    return {
      valid: false,
      message: 'Invalid URL',
    }
  }
}

const validateTel = (value: string): { valid: boolean; message?: string } => {
  const telRegex = /^\+?[\d\s-()]{10,}$/

  return {
    valid: telRegex.test(value),
    message: !telRegex.test(value) ? 'Invalid phone number' : undefined,
  }
}

export const useInputValidation = ({
  validation,
  onValidationChange,
  type,
  initialValue,
}: UseInputValidationProps) => {
  const [validationState, setValidationState] = useState<ValidationState>({
    isValid: true,
    errors: [],
  })
  const [isDirty, setIsDirty] = useState(false)

  const validateInput = useCallback(
    async (inputValue: string): Promise<boolean> => {
      if (!validation) return true

      const errors: string[] = []
      const {
        required,
        minLength,
        maxLength,
        min,
        max,
        pattern,
        email,
        url,
        tel,
        customRules,
      } = validation

      // Required validation
      if (required) {
        const result = validateRequired(inputValue)
        if (!result.valid && result.message) {
          errors.push(result.message)
        }
      }

      // Length validation
      const lengthResult = validateLength(inputValue, minLength, maxLength)
      if (!lengthResult.valid && lengthResult.message) {
        errors.push(lengthResult.message)
      }

      // Number validation
      if (type === 'number') {
        const numberResult = validateNumber(inputValue, min, max)
        if (!numberResult.valid && numberResult.message) {
          errors.push(numberResult.message)
        }
      }

      // Pattern validation
      if (pattern && !pattern.test(inputValue)) {
        errors.push('Invalid format')
      }

      // Email validation
      if (email || type === 'email') {
        const emailResult = validateEmail(inputValue)
        if (!emailResult.valid && emailResult.message) {
          errors.push(emailResult.message)
        }
      }

      // URL validation
      if (url || type === 'url') {
        const urlResult = validateUrl(inputValue)
        if (!urlResult.valid && urlResult.message) {
          errors.push(urlResult.message)
        }
      }

      // Phone validation
      if (tel || type === 'tel') {
        const telResult = validateTel(inputValue)
        if (!telResult.valid && telResult.message) {
          errors.push(telResult.message)
        }
      }

      // Custom rules validation
      if (customRules) {
        for (const rule of customRules) {
          try {
            const isValid = await rule.validate(inputValue)
            if (!isValid) {
              errors.push(rule.message)
            }
          } catch (error) {
            errors.push('Validation error occurred')
          }
        }
      }

      const newState = {
        isValid: errors.length === 0,
        errors,
      }

      setValidationState(newState)
      onValidationChange?.(newState)

      return newState.isValid
    },
    [validation, type, onValidationChange],
  )

  // Initial validation on mount if value exists
  useEffect(() => {
    if (validation && initialValue !== undefined) {
      setIsDirty(true)
      validateInput(String(initialValue))
    }
  }, [validation, initialValue, validateInput])

  const handleInputChange = useCallback(() => {
    setIsDirty(true)
  }, [])

  const handleInputBlur = useCallback(
    async (value: string) => {
      if (validation && isDirty) {
        setValidationState((prev) => ({ ...prev }))
        await validateInput(value)
      }
    },
    [validation, validateInput, isDirty],
  )

  return {
    validationState,
    isDirty,
    validateInput,
    handleInputChange,
    handleInputBlur,
    setIsDirty,
  }
}
