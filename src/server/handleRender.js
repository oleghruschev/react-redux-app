import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '../routes';
import { Provider } from 'react-redux';
import { store } from '../configureStore';

import Layout from 'components/Layout';
import Header from 'components/Header';

import renderTemplate from './renderTemplate';


const handleRender = (req, res) => {
  try {
    const content = renderToString(
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

    const existingUrl = routes.find(route => route.path === req.url)

    if (!existingUrl) {
      console.log('url: ', req.url,)
      console.log('status: ', 404 + '\n')

      res.status(404)
      res.send('<h2>Страница не существует 404</h2>')
    }
  // const file = require('../../build/style.css')
    console.log('url: ', req.url,)
    console.log('status: ', 200 + '\n')
    res.status(200)
    res.send(renderTemplate({ content, preloadedState }))
    // res.send(file)
  } catch (error) {
    
    console.log('url: ', req.url,)
    console.log('status: ', 500 + '\n')
    console.error(error)

    res.status(500)
    res.send(error.toString())
  }
}

export default handleRender;
