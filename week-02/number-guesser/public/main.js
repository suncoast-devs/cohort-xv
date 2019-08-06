let targetNumber = 0
const outputMessage = document.querySelector('.result')

const main = () => {
  targetNumber = Math.ceil(Math.random() * 10)
  console.log('that target number is : ', targetNumber)
}

const checkGuess = () => {
  //get the user's guess
  const userGuess = document.querySelector('#numberGuessed').value
  console.log(userGuess)
  // compare the user guess and target number
  if (parseInt(userGuess) === targetNumber) {
    // display yes!
    console.log('matched!')
    outputMessage.textContent = 'Yes! Correct! You Win!'
    outputMessage.classList.remove('incorrect-guess')
    outputMessage.classList.add('correct-guess')
    document.querySelector('.reset-button').classList.remove('hide')
  } else {
    // display no!
    console.log('no match')
    outputMessage.textContent = 'Nope! Try again!'
    outputMessage.classList.remove('correct-guess')
    outputMessage.classList.add('incorrect-guess')
  }
}

const resetGame = () => {
  // clear input
  document.querySelector('#numberGuessed').value = ''
  // target number
  main()
  // output message
  outputMessage.textContent = 'make your guess!!?!?!'
  outputMessage.classList.remove('correct-guess')
  outputMessage.classList.remove('incorrect-guess')
  document.querySelector('.reset-button').classList.add('hide')
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.do-guess').addEventListener('click', checkGuess)
document.querySelector('.reset-button').addEventListener('click', resetGame)
