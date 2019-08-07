const lipsumJokesSourceArray = [
  'Chuck Norris can slam a revolving door.',
  'Chuck Norris can have his cake and eat it, too.',
  'When Chuck Norris sends in his taxes, he sends blank forms and includes only a picture of himself, crouched and ready to attack.',
  'Chuck Norris will attain statehood in 2009.',
  'There is no chin behind Chuck Norris’ beard. There is only another fist.'
]

const generateLipsum = () => {
  console.log('clicked!! or kicked!!!')
  // get the number of jokes the user wants
  const numberOfJokes = document.querySelector('#numberOfJokes').value
  console.log(numberOfJokes)
  // for that many times,
  console.log('starting loop')
  let lipsum = ''
  for (let i = 1; i <= numberOfJokes; i++) {
    console.log(i)
    // select a random joke from the list of jokes
    const random = Math.floor(Math.random() * lipsumJokesSourceArray.length)
    const randomJoke = lipsumJokesSourceArray[random]
    console.log(randomJoke)
    lipsum += randomJoke
  }
  console.log('ending loop')
  console.log('lipsum => ', lipsum)
  document.querySelector('.lipsum-output').textContent = lipsum

  // add that to a new string
  // put that new string into the HTML (DOM)
}

document.querySelector('.go-button').addEventListener('click', generateLipsum)
