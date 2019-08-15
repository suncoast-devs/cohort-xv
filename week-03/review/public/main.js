// const mainFetch = () => {
//   // API call to https://dog.ceo/api/breed/hound/images
//   fetch(API_URL)
//     .then(response => {
//       return response.json()
//     })
//     .then(dogData => {
//       console.log(dogData)
//       // display all images I get back
//       const parent = document.querySelector('ul')
//       parent.textContent = ''
//       dogData.message.forEach(dog => {
//         // create a new image
//         const img = document.createElement('img')
//         img.src = dog
//         // creat a  new li
//         const li = document.createElement('li')
//         li.appendChild(img)
//         // append to the parent
//         parent.appendChild(li)
//       })
//     })
// }

const createUrl = breed => {
  const API_URL = `https://dog.ceo/api/breed/${breed}/images`
  return API_URL
}

const getDogPictures = async breed => {
  // API call to https://dog.ceo/api/breed/hound/images
  const response = await fetch(createUrl(breed))
  const dogData = await response.json()

  console.log(dogData)
  // display all images I get back
  const parent = document.querySelector('ul')
  parent.textContent = ''
  dogData.message.slice(0, 10).forEach(dog => {
    // create a new image
    const img = document.createElement('img')
    img.src = dog
    // creat a  new li
    const li = document.createElement('li')
    li.appendChild(img)
    // append to the parent
    parent.appendChild(li)
  })
}

const mainAsync = async () => {
  getDogPictures('hound')
}

const searchForDog = () => {
  console.log('search for dog')
  // get the current input value
  const searchTerm = document.querySelector('.search-box').value
  getDogPictures(searchTerm)
}

document.addEventListener('DOMContentLoaded', mainAsync)
document.querySelector('.search-button').addEventListener('click', searchForDog)
