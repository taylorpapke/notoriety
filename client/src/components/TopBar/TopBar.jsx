import React from 'react'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import Button from '../Button/Button'
import './TopBar.css'

const TopBar = () => {
  const buttonClickHandler = () => { console.log('button in top bar tapped') }
  return (
    <div className="bar">
      <h2 className="bar-title">Notoriety</h2>
      <ButtonGroup>
        <Button buttonStyle='primary' onClickHandler={buttonClickHandler}>
          Left
          </Button>
        <Button buttonStyle='secondary' onClickHandler={buttonClickHandler}>
          Right
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default TopBar