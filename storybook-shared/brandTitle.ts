const backLink =
  '<a href="../" title="All Lido UI storybooks" aria-label="All Lido UI storybooks" style="display:inline-flex;align-items:center;padding:4px;margin-right:6px;border-radius:6px;color:inherit;text-decoration:none"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 8H3M7 4L3 8l4 4"/></svg></a>'

export const brandTitle = (name: string, gradient: string): string => {
  // Deployed builds live under a sub-path with the hub at ../; local dev serves at /
  const showBack =
    typeof window !== 'undefined' && window.location.pathname !== '/'

  return `<span style="display:inline-flex;align-items:center">${showBack ? backLink : ''}<a href="./" style="display:inline-block;padding:4px 10px;border-radius:6px;background:${gradient};color:#fff;font-weight:700;font-size:13px;white-space:nowrap;text-decoration:none">${name}</a></span>`
}
