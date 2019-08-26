import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HomePage extends Component {
  render() {
    return (
      <>
        <div>This is my home page!</div>
        <main>
          <ul>
            <li>
              <Link to="/pies">Check out these Pies!</Link>
            </li>
            <li>
              <Link to="/cakes">Totally not a lie about Cakes!!</Link>
            </li>
            <li>
              <Link to="/cookies">For the monsters!</Link>
            </li>
          </ul>
        </main>
      </>
    )
  }
}

export default HomePage
