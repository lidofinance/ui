export const joinAriaLabel = (
  ariaLabel: string | undefined,
  counterLabel: string | undefined,
) => (ariaLabel && counterLabel ? `${ariaLabel}, ${counterLabel}` : ariaLabel)
