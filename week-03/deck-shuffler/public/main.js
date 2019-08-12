const suits = ['hearts', 'diamonds', 'spades', 'clubs']
const ranks = [
  { name: 'ace', value: 11 },
  { name: '2', value: 2 },
  { name: '3', value: 3 },
  { name: '4', value: 4 },
  { name: '5', value: 5 },
  { name: '6', value: 6 },
  { name: '7', value: 7 },
  { name: '8', value: 8 },
  { name: '9', value: 9 },
  { name: '10', value: 10 },
  { name: 'jack', value: 10 },
  { name: 'queen', value: 10 },
  { name: 'king', value: 10 }
]

let deck = []
const playerHand = []

const createDeck = () => {
  suits.forEach(suit => {
    ranks.forEach(rank => {
      deck.push({
        rank: rank.name,
        value: rank.value,
        suit: suit
      })
    })
  })
  console.log(deck)
}
const shuffleDeck = () => {
  for (let i = deck.length - 1; i >= 0; i--) {
    const random = Math.floor(Math.random() * i)
    //swap
    const temp = deck[random]
    deck[random] = deck[i]
    deck[i] = temp
  }
  console.log(deck)
}
const dealPlayerHand = () => {
  for (let i = 0; i < 3; i++) {
    // remove card from the deck
    const dealtCard = deck.pop()
    // add to the player hand
    playerHand.push(dealtCard)
  }
  console.log(playerHand)
}
const getPlayerHandTotal = () => {
  // let handTotal
  // for (let i = 0; i < playerHand.length; i++) {
  //   const card = playerHand[i]
  //   // add the current card value to a hand total
  //   if (handTotal) {
  //     handTotal += card.value
  //   } else {
  //     handTotal = card.value
  //   }
  // }
  // // display the total
  const handTotal = playerHand.reduce((runningTotal, card) => {
    return runningTotal + card.value
  }, 0)
  console.log(handTotal)
}

const displayPlayerCards = () => {
  // foreach card create a new li
  playerHand
    .map(card => {
      const unicorn = document.createElement('li')
      unicorn.textContent = card.rank + ' of ' + card.suit
      return unicorn
    })
    .forEach(unicorn => {
      document.querySelector('.player-hand').appendChild(unicorn)
    })
  // foreach li append to the DOM
}

const filterOutAces = () => {
  console.log(deck)
  deck = deck.filter(card => {
    return card.rank !== 'ace'
  })
}

const basicForLoop = () => {
  for (let i = 10; i > 0; i--) {
    console.log(i)
  }
  console.log('blast off')
}

const main = () => {
  createDeck()
  shuffleDeck()
  filterOutAces()
  dealPlayerHand()
  getPlayerHandTotal()
  displayPlayerCards()
  // basicForLoop()
}

document.addEventListener('DOMContentLoaded', main)
