import { RefObject, useCallback } from 'react'

export type UseInputStateProps = {
  wrapperRef?: RefObject<HTMLLabelElement>
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  validation?: boolean
  isDirty?: boolean
  validateInput?: (value: string) => Promise<boolean>
}

/**
 * Hook for managing input focus states and validation
 * Handles focus styling and triggers validation on blur when appropriate
 */
export const useInputState = ({
  wrapperRef,
  onBlur,
  validation,
  isDirty,
  validateInput,
}: UseInputStateProps) => {
  /**
   * Handles input blur event
   * - Removes focus styling
   * - Calls custom blur handler if provided
   * - Triggers validation if enabled and input is dirty
   */
  const handleBlur = useCallback(
    async (e: React.FocusEvent<HTMLInputElement>) => {
      if (wrapperRef?.current) {
        wrapperRef.current.classList.remove('focused')
      }

      onBlur?.(e)

      if (validation && isDirty && validateInput) {
        await validateInput(e.target.value)
      }
    },
    [onBlur, validation, validateInput, wrapperRef, isDirty],
  )

  /**
   * Handles input focus event
   * Adds focus styling to the wrapper element
   */
  const handleInputFocus = useCallback(() => {
    if (wrapperRef?.current) {
      wrapperRef.current.classList.add('focused')
    }
  }, [wrapperRef])

  return {
    handleBlur,
    handleInputFocus,
  }
}
