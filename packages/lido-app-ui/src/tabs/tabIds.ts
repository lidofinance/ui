const idPart = (value: string) => value.replace(/[\s%]/g, encodeURIComponent)

export const getTabId = (tabsId: string, value: string) =>
  `${tabsId}-tab-${idPart(value)}`

export const getTabPanelId = (tabsId: string, value: string) =>
  `${tabsId}-panel-${idPart(value)}`

/** Props for a `role=tabpanel` element linked to the tab with `value` in the Tabs rendered with `id={tabsId}`. */
export const getTabPanelProps = (tabsId: string, value: string) => ({
  role: 'tabpanel' as const,
  id: getTabPanelId(tabsId, value),
  'aria-labelledby': getTabId(tabsId, value),
  tabIndex: 0,
})
