import React from 'react'
import Card from './components/Card/Card'
import Container from './components/Container/Container'
import TopBar from './components/TopBar/TopBar'
import './App.css'

const App = () => {
  return (
    <div className="wrapper">
      <TopBar />
      <Container>
        <Card></Card>
      </Container>
    </div>
  )
}

export default App