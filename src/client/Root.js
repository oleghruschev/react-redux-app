
import React, { }  from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Page2 from 'components/pages/Page2';
import Articles from 'components/pages/Articles';

const history = createBrowserHistory();

const Root = () => (
  <Router history={history}>
    <Layout>
      <Header />
      <Switch>
        <Route exact path='/' component={Articles} />
        <Route path='/page2' component={Page2} />
      </Switch>
    </Layout>
  </Router>
);

export default Root;
