import React, { useState } from 'react'
import Card from '../Card/Card'
import cardData from '../../data/cards.json'

const CardProvider = () => {
  const [index, setIndex] = useState(0)
  const nextCardHandler = () => {
    if (index < cardData.length - 1) {
      setIndex(index+1)
    } else {
      setIndex(0)
    }
  }
  
  /**
   * Week Three Assignment
   * Part One - Your assignment this week is to create a 'back' button that will
   * allow the user to return to the previous card. 
   * Part Two - The next button currently cycles through all of the available
   * cards. After adding the back button, modify the behavior so that the back
   * button is hidden when the first card is displayed and the next button is
   * hidden when the last card in the set is displayed.
   */
  return <Card cardContent={{ cardAdvanceHandler: nextCardHandler, ...cardData[index] }}></Card>
}

export default CardProvider