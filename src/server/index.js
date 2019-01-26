import Express from 'express';
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Page2 from 'components/pages/Page2';
import { Provider } from 'react-redux';
import { store } from '../configureStore';
import Articles from 'components/pages/Articles';

const app = Express()

//Server static files
// app.use('/static', Express.static('build'));

app.use(handleRender)

function handleRender(req, res) {
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <Layout>
          <Header />
          <Switch>
            <Route exact path='/' component={Articles} />
            <Route path='/page2' component={Page2} />
          </Switch>
        </Layout>
      </StaticRouter>
    </Provider>
  )

  const preloadedState = store.getState()

  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React-redux-app</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
      </body>
    </html>
  `
}

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
