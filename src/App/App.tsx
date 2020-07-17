import React from 'react';
import { App } from './styles.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import Goal from '../Goal/Goal'
import List from '../List/List'

const BootstrapApp: React.FC = () => {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/">
            <Goal/>
          </Route>
          <Route path="/list">
            <List/>
          </Route>
        </Switch>
        <Navigation/>
      </App>
    </Router>
  );
}

export default BootstrapApp
