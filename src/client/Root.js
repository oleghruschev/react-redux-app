import { Provider } from 'react-redux'
import React, { Fragment }  from 'react';
import { createStore } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Navigation from '../components/Navigation';

const history = createBrowserHistory();

const Root = () => (
  <Provider store={createStore(() => {}, {})}>
    <BrowserRouter history={history}>
      <Navigation />
      <Fragment>
        <Switch>
          <Route exact path='/' component={Page1} />
          <Route path='/page2' component={Page2} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default Root;
