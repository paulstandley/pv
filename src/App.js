import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './routes';
import './App.css';
import LandingPage from './LandingPage';
import Home from './Home';
import Default from './Default';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  </Router>
  );
}

export default App;
