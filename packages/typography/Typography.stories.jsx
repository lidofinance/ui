import React from 'react'

export default {
  title: 'Typography/Typography',
}

export const Headings = () => (
  <div style={{ padding: 20 }}>
    <h1>It`s h1</h1>
    <h2>It`s h2</h2>
    <h3>It`s h3</h3>
    <h3 className='medium'>It`s medium h3</h3>
    <h4>It`s h4</h4>
    <h4 className='medium'>It`s medium h4</h4>
    <h5>It`s h5 (subheader)</h5>
    <h5 className='bold'>It`s bold h5 (subheader)</h5>
    <div>
      <input value='It`s Contol text'></input>
    </div>
    <div>
      <input className='bold' value='It`s bold Contol text'></input>
    </div>
    <body>It`s body</body>
    <p>It`s p</p>
    <p className='bold'>It`s bold p</p>
  </div>
)

export const ClassesExample = () => (
  <div style={{ padding: 20 }}>
    <div className='ui-typography-h1' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-h1
    </div>
    <div className='ui-typography-h2' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-h2
    </div>
    <div className='ui-typography-h3' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-h3
    </div>
    <div className='ui-typography-h3 medium' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-h3.medium
    </div>
    <div className='ui-typography-h4' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-h4
    </div>
    <div className='ui-typography-h4 medium' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-h4.medium
    </div>
    <div className='ui-typography-subheader' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-subheader
    </div>
    <div className='ui-typography-subheader bold' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-subheader.bold
    </div>
    <div className='ui-typography-control' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-control
    </div>
    <div className='ui-typography-control bold' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-control.bold
    </div>
    <div className='ui-typography-body' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-body
    </div>
    <div className='ui-typography-body bold' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-body.bold
    </div>
    <div className='ui-typography-description' style={{ marginBottom: 20 }}>
      It`s a text styled as - .ui-typography-description
    </div>
    <div
      className='ui-typography-description bold'
      style={{ marginBottom: 20 }}
    >
      It`s a text styled as - .ui-typography-description.bold
    </div>
  </div>
)
