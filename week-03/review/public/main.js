const API_URL = 'https://dog.ceo/api/breed/hound/images'

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

const mainAsync = async () => {
  // API call to https://dog.ceo/api/breed/hound/images
  const response = await fetch(API_URL)
  const dogData = await response.json()

  console.log(dogData)
  // display all images I get back
  const parent = document.querySelector('ul')
  parent.textContent = ''
  dogData.message.forEach(dog => {
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

document.addEventListener('DOMContentLoaded', mainAsync)
