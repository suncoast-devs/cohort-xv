const main = () => {
  printHello()
  console.log(sum(5, 7))
}

const printHello = () => {
  console.log('Hello')
}

const sum = (x, y) => {
  return x + y
}

// 2. define the event handler => function that is called when the event is fire
const handleClickEvent = () => {
  console.log('button was clicked')
}

const add1ToTeam1Event = () => {
  console.log('adding one to team 1')
  // get the current score
  let currentScore = document.querySelector('.team-1-score').textContent

  // update the score
  currentScore++

  // if the new score >=7 , disable all the buttons
  if (currentScore > 7) {
    // disable
    document.querySelector('.team-1-add-1-button').disabled = true
    // enable the button
    // document.querySelector('.team-1-add-1-button').disabled = false
  } else {
    // update the html
    document.querySelector('.team-1-score').textContent = currentScore
  }
}

// 1. attach the event listener to the html element in the DOM
// document
//   .querySelector('.do-something')
//   .addEventListener('click', handleClickEvent)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', add1ToTeam1Event)

document.addEventListener('DOMContentLoaded', main)
