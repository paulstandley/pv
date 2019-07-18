import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  </Router>
  );
}

export default App;
