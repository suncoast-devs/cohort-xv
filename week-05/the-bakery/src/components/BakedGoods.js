import React, { Component } from 'react'
import data from './data/baked-goods.json'
import { Link } from 'react-router-dom'
import ReactRouterDom from 'react-router-dom'

export class BakedGoods extends Component {
  state = {
    category: {
      tagline: '',
      treats: []
    },
    wasFound: true
  }
  componentDidMount() {
    const currentSelection = data.foods[this.props.match.params.category]
    if (currentSelection) {
      console.log(currentSelection)
      this.setState({
        category: currentSelection
      })
    } else {
      this.setState({
        wasFound: false
      })
    }
  }

  render() {
    return (
      <>
        {this.state.wasFound ? (
          <>
            <header>{this.state.category.tagline}</header>
            <main>
              <ul>
                {this.state.category.treats.map((item, i) => {
                  return (
                    <li key={i}>
                      <Link
                        to={`/${this.props.match.params.category}/${item.title}`}
                      >
                        <img src={item.image} />
                        <h3>{item.title}</h3>
                        <h3>{item.numberLeft}</h3>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </main>
          </>
        ) : (
          <h3>Category not found, try again?!?!</h3>
        )}
      </>
    )
  }
}

export default BakedGoods
