import React, { Component } from 'react'
import cakes from './data/baked-goods.json'

export class CakePage extends Component {
  state = { cake: {} }

  componentDidMount() {
    const selectedCake = cakes.filter(
      cake => cake.title === this.props.match.params.title
    )[0]
    console.log(selectedCake)
    this.setState({
      cake: selectedCake
    })
  }

  render() {
    console.log(this.state.cake.containsNuts)
    return (
      <>
        <header>this is for a {this.props.match.params.title}!</header>
        <section>
          <img src={this.state.cake.image} />
          <h3> {this.state.cake.title}</h3>
          <h3> number left in stock : {this.state.cake.numberLeft}</h3>
          <h3> servings per cake: {this.state.cake.feeds}</h3>
          {this.state.cake.containsNuts ? (
            <h3>Contains Nuts</h3>
          ) : (
            <h3>No Nuts in cake</h3>
          )}
        </section>
      </>
    )
  }
}

export default CakePage
