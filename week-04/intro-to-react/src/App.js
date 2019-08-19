import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import ColorItem from './components/ColorItem'

const colors = [
  'red',
  'purple',
  'green',
  'blue',
  'orange',
  'brown',
  'white',
  'aquamarine',
  'goldenrod'
]

class App extends Component {
  render() {
    console.log('Hey Nick!')
    return (
      <main>
        <section>
          <h1>Hello, world!</h1>
          <ul id="color-list">
            {colors.map(currentColor => {
              return <ColorItem color={currentColor} />
            })}
          </ul>
        </section>
        <section>other section</section>
      </main>
    )
  }
}

export default App
