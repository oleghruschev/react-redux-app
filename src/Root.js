
import React, { }  from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import createBrowserHistory from 'history/createBrowserHistory';

import routes from './routes';

import Header from 'components/Header';
import Layout from './components/Layout';

let history;

// Для серверного рендеринга, когда нет document
if (typeof document !== 'undefined') {
  history = createBrowserHistory()
}

const Root = () => (
  <Router history={history}>
    <Layout>
      <Header />
      {renderRoutes(routes)}
    </Layout>
  </Router>
);

export default Root;
