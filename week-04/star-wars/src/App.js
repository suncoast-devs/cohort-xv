import React, { Component } from 'react'
import FavoriteCharacters from './components/FavoriteCharacters'

class App extends Component {
  render() {
    return (
      <main>
        <h1 class="page-header">Star Wars Rocks</h1>
        <FavoriteCharacters />
      </main>
    )
  }
}

export default App
