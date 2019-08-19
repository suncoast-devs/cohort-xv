import React, { Component } from 'react'

class Character extends Component {
  render() {
    return (
      <li>
        <img src={this.props.imageUrl} alt={this.props.imageAlt} />
        <section>
          <h2>{this.props.fullName}</h2>
          <q>{this.props.quote}</q>
        </section>
      </li>
    )
  }
}

export default Character
