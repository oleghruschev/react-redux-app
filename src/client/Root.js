import React  from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Navigation from '../components/Navigation';

const history = createBrowserHistory();

const Root = () => (
  <BrowserRouter history={history}>
    <div>
      <Route path='/' component={Navigation} />
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
    </div>
  </BrowserRouter>
);

export default Root;
