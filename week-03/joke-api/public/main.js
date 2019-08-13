const main = () => {
  // we want to call the API, using fetch
  // console.log the response
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(joke => {
      console.log(joke)
      document.querySelector('.setup').textContent = joke.setup
      document.querySelector('.punchline').textContent = joke.punchline
    })
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.reveal-punchline').addEventListener('click', () => {
  document.querySelector('.punchline').classList.remove('hide')
})
