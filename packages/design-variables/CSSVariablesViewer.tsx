import React, { useState, useEffect } from 'react'
import {
  cssVariablesList,
  cssVariablesByCategory,
  breakpointsList,
  mixinsList,
} from './css-variables.generated'

type CSSVariable = {
  name: string
  value: string
  category: string
}

type DesignTokenType = 'variables' | 'breakpoints' | 'mixins'

const isColorVariable = (value: string): boolean => {
  return /^(#|rgb|rgba|hsl|hsla|var\(--.*color.*\))/.test(value.trim())
}

const getCSSVariableValue = (variableName: string): string => {
  if (typeof window === 'undefined') return ''

  const computedStyle = getComputedStyle(document.documentElement)
  const value = computedStyle.getPropertyValue(variableName).trim()

  return value || 'undefined'
}

// Singleton temp element for color resolution to avoid DOM manipulation overhead
let tempColorElement: HTMLDivElement | null = null

const getResolvedColor = (value: string): string => {
  if (!tempColorElement) {
    tempColorElement = document.createElement('div')
    tempColorElement.style.visibility = 'hidden'
    tempColorElement.style.position = 'absolute'
    tempColorElement.style.top = '-9999px'
    document.body.appendChild(tempColorElement)
  }

  tempColorElement.style.backgroundColor = value
  const computedColor = getComputedStyle(tempColorElement).backgroundColor

  // Only return color if it's not transparent/initial
  if (
    computedColor &&
    computedColor !== 'rgba(0, 0, 0, 0)' &&
    computedColor !== 'initial'
  ) {
    return computedColor
  }

  return ''
}

const ColorPreview: React.FC<{ value: string }> = React.memo(({ value }) => {
  const [resolvedColor, setResolvedColor] = useState<string>('')

  useEffect(() => {
    const color = getResolvedColor(value)
    setResolvedColor(color)
  }, [value])

  if (!isColorVariable(value) || !resolvedColor) return null

  return (
    <div
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: resolvedColor,
        border: '1px solid var(--lido-ui-color-borders-default)',
        borderRadius: '4px',
        display: 'inline-block',
        marginRight: '8px',
        verticalAlign: 'middle',
      }}
    />
  )
})

ColorPreview.displayName = 'ColorPreview'

export const CSSVariablesViewer: React.FC = () => {
  const [variables, setVariables] = useState<CSSVariable[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeTab, setActiveTab] = useState<DesignTokenType>('variables')

  const updateVariables = () => {
    const variablesList: CSSVariable[] = cssVariablesList.map((varInfo) => ({
      name: varInfo.name,
      value: getCSSVariableValue(varInfo.name),
      category: varInfo.category,
    }))

    setVariables(variablesList)
  }

  useEffect(() => {
    updateVariables()

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-lido-theme'
        ) {
          // Small delay to ensure CSS variables are updated
          setTimeout(updateVariables, 100)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-lido-theme'],
    })

    return () => observer.disconnect()
  }, [])

  const filteredVariables = variables.filter((variable) => {
    const matchesSearch =
      variable.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      variable.value.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === 'All' || variable.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ['All', ...Object.keys(cssVariablesByCategory)].sort()

  const tabs = [
    {
      id: 'variables' as const,
      label: 'CSS Variables',
      count: variables.length,
    },
    {
      id: 'breakpoints' as const,
      label: 'Breakpoints',
      count: breakpointsList.length,
    },
    {
      id: 'mixins' as const,
      label: 'Typography Mixins',
      count: mixinsList.length,
    },
  ]

  const renderVariablesContent = () => (
    <>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label
            htmlFor='category-select'
            style={{
              display: 'block',
              marginBottom: '4px',
              color: 'var(--lido-ui-color-text-secondary)',
            }}
          >
            Category:
          </label>
          <select
            id='category-select'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid var(--lido-ui-color-borders-default)',
              backgroundColor: 'var(--lido-ui-color-backgrounds-cards)',
              color: 'var(--lido-ui-color-text-primary)',
            }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div style={{ flexGrow: 1 }}>
          <label
            htmlFor='search-input'
            style={{
              display: 'block',
              marginBottom: '4px',
              color: 'var(--lido-ui-color-text-secondary)',
            }}
          >
            Search:
          </label>
          <input
            id='search-input'
            type='text'
            placeholder='Search by name or value...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid var(--lido-ui-color-borders-default)',
              backgroundColor: 'var(--lido-ui-color-backgrounds-cards)',
              color: 'var(--lido-ui-color-text-primary)',
            }}
          />
        </div>
      </div>

      <div
        style={{
          border: '1px solid var(--lido-ui-color-borders-default)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr
              style={{
                backgroundColor: 'var(--lido-ui-color-backgrounds-grey)',
              }}
            >
              <th
                style={{
                  padding: '12px',
                  textAlign: 'left',
                  color: 'var(--lido-ui-color-text-primary)',
                }}
              >
                Variable Name
              </th>
              <th
                style={{
                  padding: '12px',
                  textAlign: 'left',
                  color: 'var(--lido-ui-color-text-primary)',
                }}
              >
                Preview
              </th>
              <th
                style={{
                  padding: '12px',
                  textAlign: 'left',
                  color: 'var(--lido-ui-color-text-primary)',
                }}
              >
                Value
              </th>
              <th
                style={{
                  padding: '12px',
                  textAlign: 'left',
                  color: 'var(--lido-ui-color-text-primary)',
                }}
              >
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredVariables.map((variable) => (
              <tr
                key={variable.name}
                style={{
                  borderTop: '1px solid var(--lido-ui-color-borders-default)',
                  backgroundColor: 'var(--lido-ui-color-backgrounds-cards)',
                }}
              >
                <td
                  style={{
                    padding: '12px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    color: 'var(--lido-ui-color-text-primary)',
                  }}
                >
                  {variable.name}
                </td>
                <td style={{ padding: '12px' }}>
                  <ColorPreview value={variable.value} />
                </td>
                <td
                  style={{
                    padding: '12px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    color: 'var(--lido-ui-color-text-secondary)',
                  }}
                >
                  {variable.value}
                </td>
                <td
                  style={{
                    padding: '12px',
                    fontSize: '14px',
                    color: 'var(--lido-ui-color-text-tertiary)',
                  }}
                >
                  {variable.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          marginTop: '16px',
          color: 'var(--lido-ui-color-text-secondary)',
          fontSize: '14px',
        }}
      >
        Showing {filteredVariables.length} of {variables.length} variables
      </div>
    </>
  )

  const renderBreakpointsContent = () => (
    <div
      style={{
        border: '1px solid var(--lido-ui-color-borders-default)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr
            style={{
              backgroundColor: 'var(--lido-ui-color-backgrounds-grey)',
            }}
          >
            <th
              style={{
                padding: '12px',
                textAlign: 'left',
                color: 'var(--lido-ui-color-text-primary)',
              }}
            >
              Breakpoint Name
            </th>
            <th
              style={{
                padding: '12px',
                textAlign: 'left',
                color: 'var(--lido-ui-color-text-primary)',
              }}
            >
              Media Query
            </th>
          </tr>
        </thead>
        <tbody>
          {breakpointsList.map((breakpoint) => (
            <tr
              key={breakpoint.name}
              style={{
                borderTop: '1px solid var(--lido-ui-color-borders-default)',
                backgroundColor: 'var(--lido-ui-color-backgrounds-cards)',
              }}
            >
              <td
                style={{
                  padding: '12px',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  color: 'var(--lido-ui-color-text-primary)',
                }}
              >
                {breakpoint.name}
              </td>
              <td
                style={{
                  padding: '12px',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  color: 'var(--lido-ui-color-text-secondary)',
                }}
              >
                {breakpoint.mediaQuery}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderMixinsContent = () => (
    <div
      style={{
        border: '1px solid var(--lido-ui-color-borders-default)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr
            style={{
              backgroundColor: 'var(--lido-ui-color-backgrounds-grey)',
            }}
          >
            <th
              style={{
                padding: '12px',
                textAlign: 'left',
                color: 'var(--lido-ui-color-text-primary)',
              }}
            >
              Mixin Name
            </th>
            <th
              style={{
                padding: '12px',
                textAlign: 'left',
                color: 'var(--lido-ui-color-text-primary)',
              }}
            >
              CSS Content
            </th>
          </tr>
        </thead>
        <tbody>
          {mixinsList.map((mixin) => (
            <tr
              key={mixin.name}
              style={{
                borderTop: '1px solid var(--lido-ui-color-borders-default)',
                backgroundColor: 'var(--lido-ui-color-backgrounds-cards)',
              }}
            >
              <td
                style={{
                  padding: '12px',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  color: 'var(--lido-ui-color-text-primary)',
                }}
              >
                {mixin.name}
              </td>
              <td
                style={{
                  padding: '12px',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  color: 'var(--lido-ui-color-text-secondary)',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {mixin.content}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'variables':
        return renderVariablesContent()
      case 'breakpoints':
        return renderBreakpointsContent()
      case 'mixins':
        return renderMixinsContent()
      default:
        return null
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2
          style={{
            color: 'var(--lido-ui-color-text-primary)',
            marginBottom: '16px',
          }}
        >
          Design System Reference
        </h2>

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            marginBottom: '16px',
            borderBottom: '1px solid var(--lido-ui-color-borders-default)',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 16px',
                border: 'none',
                backgroundColor:
                  activeTab === tab.id
                    ? 'var(--lido-ui-color-backgrounds-cards)'
                    : 'transparent',
                color:
                  activeTab === tab.id
                    ? 'var(--lido-ui-color-text-primary)'
                    : 'var(--lido-ui-color-text-secondary)',
                cursor: 'pointer',
                borderBottom:
                  activeTab === tab.id
                    ? '2px solid var(--lido-ui-color-text-primary)'
                    : '2px solid transparent',
              }}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {renderContent()}
      </div>
    </div>
  )
}
