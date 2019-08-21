import React, { Component } from 'react'

import axios from 'axios'

export class Search extends Component {
  state = {
    userInput: '',
    searchResults: []
  }

  updateUserInput = event => {
    this.setState({ userInput: event.target.value })
  }

  searchButtonClick = async () => {
    // const resp = await fetch(
    //   `https://www.superheroapi.com/api.php/10155377111995672/search/${
    //     this.state.userInput
    //   }`
    // )
    // const data = await resp.json()
    // console.log(data)
    // this.setState({
    //   searchResults: data.results
    // })
    this.makeApiCall(this.state.userInput)
  }

  makeApiCall = async searchTerm => {
    const resp = await axios.get(
      `https://www.superheroapi.com/api.php/10155377111995672/search/${searchTerm}`
    )
    this.setState({
      searchResults: resp.data.results
    })
  }

  async componentDidMount() {
    console.log('mounting')

    // select a random super hero
    const heros = [
      'batman',
      'superman',
      'aquaman',
      'james bond',
      'master chief',
      'Paul Blart'
    ]
    const random = heros[Math.floor(Math.random() * heros.length)]
    console.log(random)

    this.makeApiCall(random)
  }

  render() {
    console.log('rendering')
    return (
      <div>
        <section>
          <input type="search" onChange={this.updateUserInput} />
          <button onClick={this.searchButtonClick}>search</button>
        </section>
        <section>
          <ul>
            {this.state.searchResults.map(result => {
              return (
                <li key={result.id}>
                  <img src={result['image'].url} />
                  {result['name']}
                  {result.biography['full-name']}
                  {result['powerstats']['combat']}
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    )
  }
}

export default Search
