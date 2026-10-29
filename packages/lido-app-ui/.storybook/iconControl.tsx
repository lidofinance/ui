import { type ComponentType, type SVGProps, isValidElement } from 'react'
import type { ArgsEnhancer } from 'storybook/internal/types'

import * as base from '../src/icons/components/base'
import * as chains from '../src/icons/components/chains'
import * as protocols from '../src/icons/components/protocols'
import * as token from '../src/icons/components/token'
import * as wallets from '../src/icons/components/wallets'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const ICONS: Record<string, IconComponent> = Object.assign(
  {},
  ...[base, token, protocols, chains, wallets].map(
    (group) =>
      Object.fromEntries(
        Object.entries(group).sort(([a], [b]) => a.localeCompare(b)),
      ) as Record<string, IconComponent>,
  ),
)

const NONE = 'none'
const NAMES = Object.keys(ICONS)
const NAME_BY_COMPONENT = new Map<unknown, string>(
  NAMES.map((name) => [ICONS[name], name]),
)

export const ICON_PROP = /icon/i

export const iconOptions = [NONE, ...NAMES]

export const iconMapping: Record<string, unknown> = {
  [NONE]: undefined,
  ...Object.fromEntries(
    NAMES.map((name) => {
      const Icon = ICONS[name]
      return [name, <Icon key={name} />]
    }),
  ),
}

const hasIconMapping = (mapping: unknown) =>
  typeof mapping === 'object' &&
  mapping !== null &&
  NONE in mapping &&
  NAMES[0] in mapping

/** Turns a bare `<IconX />` initial arg into its name so the select shows it. */
export const iconArgs: ArgsEnhancer = ({ argTypes, initialArgs }) => {
  const result: Record<string, string> = {}

  Object.entries(argTypes).forEach(([name, argType]) => {
    const arg = initialArgs?.[name]

    if (!hasIconMapping(argType.mapping) || !isValidElement(arg)) return
    if (Object.keys(arg.props as object).length > 0) return

    const iconName = NAME_BY_COMPONENT.get(arg.type)
    if (iconName) result[name] = iconName
  })

  return result
}
