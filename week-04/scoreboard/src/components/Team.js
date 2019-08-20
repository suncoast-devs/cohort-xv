import React, { Component } from 'react'

export class Team extends Component {
  state = {
    score: 0,
    teamName: 'Team 1',
    userInput: ''
  }

  add1ToScore = () => {
    console.log('adding 1 to score')
    if (this.state.score < 10) {
      this.setState({
        score: this.state.score + 1
      })
    }
  }

  subtract1FromScore = () => {
    console.log('sub 1 from score')
    if (this.state.score > 0) {
      this.setState({
        score: this.state.score - 1
      })
    }
  }

  saveUserInput = event => {
    console.log(event.target.value)
    // track what the user typed
    this.setState({
      userInput: event.target.value
    })
  }

  updateTeamName = () => {
    if (this.state.userInput) {
      this.setState({
        teamName: this.state.userInput,
        userInput: ''
      })
    }
  }

  render() {
    return (
      <section className="teams">
        <section className="team one">
          <section>
            <h2 className="team-1-name">{this.state.teamName}</h2>
            <p className="team-1-score">{this.state.score}</p>
          </section>
          <section>
            <section>
              update team 1 name
              <input
                type="text"
                className="team-1-input"
                onChange={this.saveUserInput}
                value={this.state.userInput}
              />
              <button
                className="update-team-1-name"
                onClick={this.updateTeamName}
              >
                Update
              </button>
            </section>
            <section>
              update team 1 score
              <button
                className="team-1-add-1-button"
                onClick={this.add1ToScore}
              >
                add 1
              </button>
              <button
                className="team-1-subtract-1-button"
                onClick={this.subtract1FromScore}
              >
                subtract 1
              </button>
            </section>
          </section>
        </section>
      </section>
    )
  }
}

export default Team
