import React, { Component } from 'react'
import Character from './Character'

import ackbar from '../images/ackbar.jpeg'
import vader from '../images/vader.jpeg'
import obiwan from '../images/obi-wan.jpeg'

const characters = [
  {
    fullName: 'Admiral Ackbar',
    quote: "It's a trap",
    imageUrl: ackbar,
    imageAlt: 'Admiral Ackbar'
  },
  {
    fullName: 'Darth Vader',
    quote: 'I find your lack of faith disturbing',
    imageUrl: vader,
    imageAlt: 'Sith Lord'
  },
  {
    fullName: 'Obi-wan Kenobi',
    quote: 'Use the Force',
    imageUrl: obiwan,
    imageAlt: 'Obi-wan!!!!!!!!!!!'
  }
]

class FavoriteCharacters extends Component {
  render() {
    return (
      <ul>
        {characters.map(character => {
          return (
            <Character
              fullName={character.fullName}
              quote={character.quote}
              imageAlt={character.imageAlt}
              imageUrl={character.imageUrl}
            />
          )
        })}
      </ul>
    )
  }
}

export default FavoriteCharacters
