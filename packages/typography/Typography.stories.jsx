import React from 'react'

export default {
  title: 'Typography/Typography',
}

const storyDescription = `
In typography, styles are applied to classes .ui-typography-h1, .ui-typography-h2, .ui-typography-control, etc. It contains in the TypographyByClasses story
`

export const TypographyByClasses = () => (
  <div style={{ padding: 20 }}>
    <p style={{ marginBottom: 50 }}>{storyDescription}</p>
    <div className='ui-typography-h1' style={{ marginBottom: 20 }}>
      .ui-typography-h1
    </div>
    <div className='ui-typography-h2' style={{ marginBottom: 20 }}>
      .ui-typography-h2
    </div>
    <div className='ui-typography-h3' style={{ marginBottom: 20 }}>
      .ui-typography-h3
    </div>
    <div className='ui-typography-h3 medium' style={{ marginBottom: 20 }}>
      .ui-typography-h3.medium
    </div>
    <div className='ui-typography-h4' style={{ marginBottom: 20 }}>
      .ui-typography-h4
    </div>
    <div className='ui-typography-h4 medium' style={{ marginBottom: 20 }}>
      .ui-typography-h4.medium
    </div>
    <div className='ui-typography-subheader' style={{ marginBottom: 20 }}>
      .ui-typography-subheader
    </div>
    <div className='ui-typography-subheader bold' style={{ marginBottom: 20 }}>
      .ui-typography-subheader.bold
    </div>
    <div className='ui-typography-control' style={{ marginBottom: 20 }}>
      .ui-typography-control
    </div>
    <div className='ui-typography-control bold' style={{ marginBottom: 20 }}>
      .ui-typography-control.bold
    </div>
    <div className='ui-typography-body' style={{ marginBottom: 20 }}>
      .ui-typography-body
    </div>
    <div className='ui-typography-body bold' style={{ marginBottom: 20 }}>
      .ui-typography-body.bold
    </div>
    <div className='ui-typography-description' style={{ marginBottom: 20 }}>
      .ui-typography-description
    </div>
    <div
      className='ui-typography-description bold'
      style={{ marginBottom: 20 }}
    >
      .ui-typography-description.bold
    </div>
  </div>
)

TypographyByClasses.parameters = {
  docs: {
    description: {
      story: storyDescription,
    },
  },
}
