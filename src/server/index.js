import React from 'react'
import Express from 'express';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '../routes';
import { Provider } from 'react-redux';
import { store } from '../configureStore';

import Layout from 'components/Layout';
import Header from 'components/Header';

const app = Express()

app.use(handleRender)
//Server static files
app.use('/static', Express.static(__dirname + '/build'));


function handleRender(req, res) {
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <Layout>
          <Header />
          {renderRoutes(routes)}
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
        <link type="stylesheet" href ="/static/style.css" />
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
