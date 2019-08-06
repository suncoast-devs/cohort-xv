let targetNumber = 0

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
    document.querySelector('.result').textContent = 'Yes! Correct! You Win!'
    document.querySelector('.result').classList.remove('incorrect-guess')
    document.querySelector('.result').classList.add('correct-guess')
  } else {
    // display no!
    console.log('no match')
    document.querySelector('.result').textContent = 'Nope! Try again!'
    document.querySelector('.result').classList.add('incorrect-guess')
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.do-guess').addEventListener('click', checkGuess)
