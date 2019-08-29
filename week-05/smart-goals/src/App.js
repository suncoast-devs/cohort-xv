import React, { Component } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import CreateGoal from './pages/CreateGoal'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>My S.M.A.R.T Goals</h1>
        </header>

        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={Dashboard}></Route>
              <Route exact path="/new" component={CreateGoal}></Route>
            </Switch>
          </Router>
        </main>
      </>
    )
  }
}

export default App
