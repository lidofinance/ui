// A component to define a section within a Storybook story, typically for a major variant like size.

import type { FC, PropsWithChildren } from 'react'

export type StorybookSectionProps = PropsWithChildren<{
  title: string
}>

export const StorybookSection: FC<StorybookSectionProps> = ({
  title,
  children,
}) => {
  const sectionStyle: React.CSSProperties = {
    padding: '32px',
    border: '1px solid var(--lido-ui-color-borders-default)',
    borderRadius: '12px',
    backgroundColor: 'var(--lido-ui-color-backgrounds-cards)',
    boxShadow: '0 2px 8px var(--lido-ui-color-borders-default)',
  }

  const titleStyle: React.CSSProperties = {
    margin: '0 0 24px 0',
    fontSize: '20px',
    fontWeight: '600',
    color: 'var(--lido-ui-color-text-primary)',
  }

  return (
    <section style={sectionStyle}>
      <h3 style={titleStyle}>{title}</h3>
      {children}
    </section>
  )
}
