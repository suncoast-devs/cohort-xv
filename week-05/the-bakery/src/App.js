import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import BakedGoods from './components/BakedGoods'
// import Pies from './components/Pies'
// import Cakes from './components/Cakes'
import BakedGood from './components/BakedGood'

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <h1>The Bakery</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Go Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:category" component={BakedGoods}></Route>
          <Route exact path="/:category/:title" component={BakedGood}></Route>
          {/* <Route exact path="/pies" component={Pies}></Route>
          <Route exact path="/cakes" component={Cakes}></Route> */}
          {/* <Route exact path="/cakes/:title" component={CakePage}></Route> */}
        </Switch>
      </Router>
    )
  }
}

export default App
