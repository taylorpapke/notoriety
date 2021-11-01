import React from 'react'
import './ButtonGroup.css'

const ButtonGroup = ({children}) => {
  return (
    <div className='group-container'>
      {children}
    </div>
  )
}

export default ButtonGroup