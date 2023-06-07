export const FOCUSABLE_ELEMENTS = [
  'a[href]',
  'button:not([disabled]):not([aria-hidden])',
  '[tabindex]:not([tabindex^="-"])',
]

export enum PopupMenuVariant {
  small,
  default,
}
export type PopupMenuVariants = keyof typeof PopupMenuVariant
