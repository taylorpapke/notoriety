import React, { useState } from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"
import "./Card.css"

const Card = (props) => {
  // WORKITEM image alt text from data
  const { front_text, front_image, back_text, back_image, cardAdvanceHandler } =
    props.cardContent

  const frontContent = () => {
    if (front_image && !front_text) {
      return <img src={front_image} />
    } else if (!front_image && front_text) {
      return <h3>{front_text}</h3>
    } else if (front_image && front_text) {
      return (
        <React.Fragment>
          <img src={front_image} />
          <h3>{front_text}</h3>
        </React.Fragment>
      )
    } else {
      throw new Error("We shouldn't get to this state")
    }
  }
  // WORKITEM Intermittently bad back card formatting.
  const backContent = () => {
    if (back_image && !back_text) {
      return <img src={back_image} />
    } else if (!back_image && back_text) {
      return <h3>{back_text}</h3>
    } else if (back_image && back_text) {
      return (
        <div className="card-content">
          <img src={back_image} />
          <h3>{back_text}</h3>
        </div>
      )
    } else {
      throw new Error("We shouldn't get to this state")
    }
  }

  const [isFront, setIsFront] = useState(true)

  const flipHandler = () => {
    setIsFront(!isFront)
  }

  return (
    <div className="flashcard-wrapper">
      <div className="card-surface">
        <div className="card-content">
          {isFront ? frontContent() : backContent()}
        </div>
      </div>
      <Button buttonStyle="primary" onClickHandler={flipHandler}>
        Flip
      </Button>
      <Button
        buttonStyle="secondary"
        onClickHandler={() => {
          cardAdvanceHandler()
        }}
      >
        Next
      </Button>
    </div>
  )
}

Card.propTypes = {
  cardContent: PropTypes.exact({
    card_id: PropTypes.string,
    front_text: PropTypes.string,
    front_image: PropTypes.string,
    back_text: PropTypes.string,
    back_image: PropTypes.string,
    cardAdvanceHandler: PropTypes.func.isRequired,
    correct: PropTypes.number,
  }),
}

export default Card
