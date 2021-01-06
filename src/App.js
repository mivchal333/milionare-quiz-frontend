import React from 'react'
import PropTypes from 'prop-types'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import Setup from "./setup/Setup";
import history from './history'
import {Router} from "react-router";

class App extends React.Component {

  render() {
    return (
        <Router history={history}>
          <Switch>
            <Route
                exact
                path='/'
                component={Home}
            />
            <Route
                exact
                path='/setup'
                component={Setup}
            />
            <Route
                exact path='/game'
                component={Game}
            />
          </Switch>
        </Router>
    )
  }
}

App.propTypes = {
  history: PropTypes.object
}

export default App
