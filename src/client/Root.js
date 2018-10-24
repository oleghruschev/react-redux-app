
import React, { Fragment }  from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Navigation from '../components/Navigation';

const history = createBrowserHistory();

const Root = () => (
  <Router history={history}>
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Page1} />
        <Route path='/page2' component={Page2} />
      </Switch>
    </Fragment>
  </Router>
);

export default Root;
