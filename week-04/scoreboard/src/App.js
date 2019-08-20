import React, { Component } from 'react'
import Team from './components/Team'

class App extends Component {
  render() {
    console.log('rendering')
    return (
      <main>
        <h1>My Score Board</h1>
        <Team />
        <Team />
        <Team />
        <Team />
        <Team />
        <Team />
        <Team />
      </main>
    )
  }
}

export default App
