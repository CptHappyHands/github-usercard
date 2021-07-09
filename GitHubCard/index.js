/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'

// const target = document.querySelector('.cards')
// axios.get(`https://api.github.com/users/CptHappyHands`)
//   .then(response => {
//     const card = cardMaker(`https://api.github.com/users/CptHappyHands`)
//     return card
//   })
//   .then(card => {
//     target.appendChild(card)
//   })
//   .catch(err => console.log(err.message))
//   .finally(() => console.log('done'))
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];
// axios.get('http://api.github.com/users/dustinmyers/followers')
// .then(response => {
//   response.data.forEach(obj => {
//     followersArray.push(obj.login)
//   })
//   return followersArray
// })
// .then(names => {
//   followersArray.forEach(name => {
//     axios.get(`https://api.github.com/users/${name}`)
//     .then(res => {
//       target.appendChild(cardMaker(response.data))
//     })
//     .catch(err => {
//       console.log(err)
//     })
//     .finally(() => {
//       console.log('done')
//     })
//   })
// })
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(obj) {
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const address = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const userBio = document.createElement('p')

  name.textContent = `Andrew Cummings`
  img.src = `${obj.avatar_url}`
  userName.textContent = `${obj.login}`
  location.textContent = `Joplin, MO`
  address.href = obj.html_url
  address.innerHTML =`GitHub`
  followers.textContent = `Followers: ${obj.followers}`
  following.textContent = `Following: ${obj.following}`
  userBio.textContent = `Bio: Hello, my name is Bingo. I like to climb on things. Can I have a banana? Eek-​Eek!`

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')

  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(address)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(userBio)

  return card
}

const target = document.querySelector('.cards')
axios.get(`https://api.github.com/users/CptHappyHands`)
  .then(response => {
    const card = cardMaker(response.data)
    return card
  })
  .then(card => {
    target.appendChild(card)
  })
  .catch(err => console.log(err.message))
  .finally(() => console.log('done'))

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
// function getFollowers(friendName) {
//   axios.get(`https://api.github.com/users/${friendName}`)
//   .then(response => {
//     response.data.forEach(obj => {
//       const newCard = cardMaker(obj)
//       target.appendChild(newCard)
//     })
//   })
//   .catch(err => {
//     console.log(err)
//   })
//   .finally(() => {
//     console.log('done')
//   })
// }
// getFollowers(followersArray)

const followersArray = [];
axios.get('http://api.github.com/users/dustinmyers/followers')
.then(response => {
  response.data.forEach(obj => {
    followersArray.push(obj.login)
  })
  return followersArray
})
.then(names => {
  followersArray.forEach(name => {
    axios.get(`https://api.github.com/users/${name}`)
    .then(response => {
      target.appendChild(cardMaker(response.data))
    })
    .catch(err => {
      console.log(err.message)
    })
    .finally(() => {
      console.log('done')
    })
  })
})