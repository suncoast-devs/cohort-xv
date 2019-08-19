import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import ColorItem from './components/ColorItem'

const colors = ['red', 'purple', 'green', 'blue', 'orange', 'brown']

class App extends Component {
  render() {
    console.log('Hey Nick!')
    return (
      <main>
        <section>
          <h1>Hello, world!</h1>
          <ul id="color-list">
            <ColorItem color="red" />
            <ColorItem color="purple" />
            <ColorItem color="green" />
            <ColorItem color="orange" />
            <ColorItem color="brown" />
            <ColorItem color="blue" />
          </ul>
        </section>
        <section>other section</section>
      </main>
    )
  }
}

export default App
