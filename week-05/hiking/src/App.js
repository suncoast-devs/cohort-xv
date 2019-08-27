import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import CurrentHikeLocation from './components/CurrentHikeLocation'
import MilesHiked from './components/MilesHiked'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>My Current Hike!</h1>
          <CurrentHikeLocation />
          <MilesHiked />
        </header>
      </>
    )
  }
}

export default App
