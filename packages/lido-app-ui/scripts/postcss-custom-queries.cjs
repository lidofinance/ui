// Resolves `@custom-media` names in `@media` and `@container` params;
// postcss-custom-media only handles `@media`.
const REF = /(?<![\w-])\(\s*(--[\w-]+)\s*\)/g

module.exports = () => ({
  postcssPlugin: 'postcss-custom-queries',
  prepare() {
    const queries = new Map()

    const visit = (atRule) => {
      atRule.params = atRule.params.replace(REF, (_, name) => {
        if (!queries.has(name)) {
          throw atRule.error(`Unknown custom media query ${name}`, {
            word: name,
          })
        }
        return queries.get(name)
      })
    }

    return {
      Once(root) {
        root.walkAtRules('custom-media', (rule) => {
          const [, name, query] =
            rule.params.match(/^(--[\w-]+)\s+([\s\S]+)$/) || []
          if (name) {
            // plain substitution is only safe for one parenthesised group
            if (!/^\([^()]*\)$/.test(query.trim())) {
              throw rule.error(
                `${name} must be a single parenthesised condition`,
                { word: name },
              )
            }
            queries.set(name, query.trim())
          }
          rule.remove()
        })
      },
      AtRule: { media: visit, container: visit },
    }
  },
})

module.exports.postcss = true
