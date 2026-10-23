import { isValidElement } from 'react'
import type {
  ArgTypesEnhancer,
  StrictInputType,
} from 'storybook/internal/types'

import { ICON_PROP, iconMapping, iconOptions } from './iconControl'

const SLOT_TYPE = /ReactNode|ReactElement|JSX\.Element/

const typeString = (argType: StrictInputType): string => {
  const type = argType.type as { raw?: unknown; value?: unknown } | undefined

  return [argType.table?.type?.summary, type?.raw, type?.value]
    .filter((part) => typeof part === 'string')
    .join(' ')
}

const isDefaultControl = (control: unknown) =>
  control === undefined ||
  (typeof control === 'object' &&
    control !== null &&
    (control as { type?: string }).type === 'object')

/** ReactNode slots get no control (text for string args); icon-named ones get an icon select. */
export const slotControls: ArgTypesEnhancer = ({ argTypes, initialArgs }) => {
  const result: typeof argTypes = {}

  Object.entries(argTypes).forEach(([name, argType]) => {
    const arg = initialArgs?.[name]
    const isSlot = isValidElement(arg) || SLOT_TYPE.test(typeString(argType))

    if (
      !isSlot ||
      argType.mapping ||
      argType.options ||
      !isDefaultControl(argType.control)
    ) {
      result[name] = argType
      return
    }

    if (ICON_PROP.test(name)) {
      result[name] = {
        ...argType,
        options: iconOptions,
        mapping: iconMapping,
        control: { type: 'select' },
      }
      return
    }

    result[name] = {
      ...argType,
      control:
        typeof arg === 'string' || typeof arg === 'number'
          ? { type: 'text' }
          : false,
    }
  })

  return result
}
slotControls.secondPass = true
