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

  search = async () => {
    const resp = await fetch(
      `https://www.superheroapi.com/api.php/10155377111995672/search/${
        this.state.userInput
      }`
    )
    const data = await resp.json()

    console.log(data)
    this.setState({
      searchResults: data.results
    })
  }

  render() {
    return (
      <div>
        <section>
          <input type="search" onChange={this.updateUserInput} />
          <button onClick={this.search}>search</button>
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
