import React, { Component } from 'react'
import data from './data/baked-goods.json'

export class BakedGood extends Component {
  state = { bakedGood: {} }

  componentDidMount() {
    const selectedItem = data.foods[
      this.props.match.params.category
    ].treats.filter(item => item.title === this.props.match.params.title)[0]
    console.log(selectedItem)
    this.setState({
      bakedGood: selectedItem
    })
  }

  render() {
    console.log(this.state.bakedGood.containsNuts)
    return (
      <>
        <header>this is for a {this.props.match.params.title}!</header>
        <section>
          <img src={this.state.bakedGood.image} />
          <h3> {this.state.bakedGood.title}</h3>
          <h3> number left in stock : {this.state.bakedGood.numberLeft}</h3>
          <h3> servings per bakedGood: {this.state.bakedGood.feeds}</h3>
          {this.state.bakedGood.containsNuts ? (
            <h3>Contains Nuts</h3>
          ) : (
            <h3>No Nuts in bakedGood</h3>
          )}
        </section>
      </>
    )
  }
}

export default BakedGood
