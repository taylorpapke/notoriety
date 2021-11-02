import React from "react"
import Button from "../Button/Button"
import "./Card.css"

const Card = () => {
  return (
    <div className="flashcard-wrapper">
      <div className="card-surface">
        <div className="card-content">
          <h3>Content</h3>
        </div>
      </div>
      <Button buttonStyle="primary">Stuff</Button>
    </div>
  )
}

export default Card
