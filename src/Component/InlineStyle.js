import React from 'react'

function InlineStyle() {
    const heading = {
        fontSize: '48px',
        color: 'red'
    }
  return (
    <div><h1 style={heading}>Inline</h1></div>
  )
}

export default InlineStyle