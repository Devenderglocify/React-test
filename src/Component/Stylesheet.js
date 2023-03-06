import React from 'react'
import './style.css'
function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${className} font-xl`}>This is css Demo</h1>
    </div>
  )
}

export default Stylesheet