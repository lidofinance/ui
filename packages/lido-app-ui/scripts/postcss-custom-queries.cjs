// Resolves `@custom-media` names in `@media` and `@container` params;
// postcss-custom-media only handles `@media`.
const REF = /(?<![\w-])\(\s*(--[\w-]+)\s*\)/g

// Paren depth after each character.
const depths = (text) => {
  let depth = 0
  return Array.from(text, (c) =>
    c === '(' ? ++depth : c === ')' ? --depth : depth,
  )
}

const hasTopLevelComma = (text) =>
  depths(text).some((d, i) => d === 0 && text[i] === ',')

const isSingleGroup = (text) =>
  text[0] === '(' && depths(text).indexOf(0) === text.length - 1

module.exports = () => ({
  postcssPlugin: 'postcss-custom-queries',
  prepare() {
    const raw = new Map()
    const resolved = new Map()

    const resolve = (name, node, stack = []) => {
      if (resolved.has(name)) return resolved.get(name)
      if (!raw.has(name)) {
        throw node.error(`Unknown custom media query ${name}`, { word: name })
      }
      if (stack.includes(name)) {
        throw node.error(
          `Circular custom media query: ${[...stack, name].join(' -> ')}`,
          { word: name },
        )
      }
      const { query, rule } = raw.get(name)
      // can't be nested inside `(...)` or combined with `and`
      if (hasTopLevelComma(query) || /^(?!not\s*\()[a-z]/i.test(query)) {
        throw rule.error(
          `${name} must be a plain condition: no media type, \`only\`, or top-level comma`,
          { word: name },
        )
      }
      const inner = substitute(query, node, [...stack, name])
      const value = isSingleGroup(inner) ? inner : `(${inner})`
      resolved.set(name, value)
      return value
    }

    const substitute = (params, node, stack) =>
      params.replace(REF, (_, name) => resolve(name, node, stack))

    const visit = (atRule) => {
      atRule.params = substitute(atRule.params, atRule, [])
    }

    return {
      Once(root) {
        root.walkAtRules('custom-media', (rule) => {
          const [, name, query] =
            rule.params.match(/^(--[\w-]+)\s+([\s\S]+)$/) || []
          if (name) raw.set(name, { query: query.trim(), rule })
          rule.remove()
        })
      },
      AtRule: { media: visit, container: visit },
    }
  },
})

module.exports.postcss = true
