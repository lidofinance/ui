import React from 'react'

export default {
  title: 'Typography/Typography',
}

const storyDescription = `
In typography, styles are applied to tags h1, h2, h3, input, body, etc. It contains in the TypographyByTags story.\n
And to the classes .ui-typography-h1, .ui-typography-h2, .ui-typography-control, etc. It contains in the TypographyByClasses story
`

export const TypographyByTags = () => (
  <div style={{ padding: 20 }}>
    <p>{storyDescription}</p>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h3 className='medium'>Heading 3 medium</h3>
    <h4>Heading 4</h4>
    <h4 className='medium'>Heading 4 medium</h4>
    <h5>Heading 5</h5>
    <h5 className='bold'>Heading 5 bold</h5>
    <div>
      <input value='Control'></input>
    </div>
    <div>
      <input className='bold' value='Control bold'></input>
    </div>
    <body>Body</body>
    <p>Paragraph</p>
    <p className='bold'>Paragraph bold</p>
  </div>
)

TypographyByTags.parameters = {
  docs: {
    description: {
      story: storyDescription,
    },
  },
}

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
