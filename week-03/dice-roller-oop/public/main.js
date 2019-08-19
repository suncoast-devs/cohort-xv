class Dice {
  constructor (sides, name) {
    this.sides = sides
    this.name = name
    this.currentResult = 0
    this.pastRolls = []
  }

  roll () {
    this.currentResult = Math.ceil(Math.random() * this.sides)
    this.pastRolls.push(this.currentResult)
  }

  displayResult () {
    document.querySelector('.result').textContent = this.currentResult
  }

  displayPastResults () {
    console.log('past results')
    const parent = document.querySelector('.past-results')
    parent.textContent = ''
    this.pastRolls.reverse().forEach(roll => {
      const li = document.createElement('li')
      li.textContent = roll
      parent.appendChild(li)
    })
  }

  doTheRoll () {
    this.roll()
    this.displayResult()
    this.displayPastResults()
  }
}

// const diceTray = [new Dice(6, 'damage dice'), new Dice(20, 'lucky dice')]

const d6 = new Dice(6)
const main = () => {}

const rollDice20 = () => {
  const rand = Math.ceil(Math.random() * 20)
  document.querySelector('.result-20').textContent = rand
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.roll-d6').addEventListener('click', () => {
  d6.doTheRoll()
})
// document.querySelector('.roll-d20').addEventListener('click', rollDice20)
