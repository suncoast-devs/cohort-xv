import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cakes from './data/baked-goods.json'

export class Cakes extends Component {
  render() {
    return (
      <>
        <header>Yum, Yum Cakes!</header>
        <main>
          <ul>
            {cakes.map((cake, i) => {
              return (
                <li key={i}>
                  <Link to={`/cakes/${cake.title}`}>
                    <img src={cake.image} />
                    <h3>{cake.title}</h3>
                    <h3>{cake.numberLeft}</h3>
                  </Link>
                </li>
              )
            })}
          </ul>
        </main>
      </>
    )
  }
}

export default Cakes
