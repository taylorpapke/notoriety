import React from 'react'
// import CardProvider from './components/CardProvider/CardProvider'
import Container from './components/Container/Container'
import TopBar from './components/TopBar/TopBar'
import './App.css'
import CreateCard from './components/CreateCard/CreateCard'

const App = () => {
  return (
    <div className="wrapper">
      <TopBar />
      <Container>
        <CreateCard />
      </Container>
    </div>
  )
}

export default App