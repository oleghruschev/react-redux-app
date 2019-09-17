import * as express from "express";
import React from 'react'
import { renderToString } from 'react-dom/server'
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../configureStore';
import routes from '../routes';

import Header from 'components/Header';
import Layout from 'components/Layout';

import renderTemplate from './renderTemplate';

const handleRender = (req: express.Request, res: express.Response) => {
  
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
  
    const preloadedState = store.getState();

    if (req.url === '/favicon.ico') {
      res.status(403)
      return res.end(null)
    }

    const existingUrl = routes.find(route => route.path === req.url)

    if (!existingUrl) {
      console.log('url: ', req.url,)
      console.log('status: ', 404 + '\n')

      res.status(404)
      return res.send('<h2>Страница не существует 404</h2>')
    }

    console.log('url: ', req.url,)
    console.log('status: ', 200 + '\n')
    res.status(200)
    return res.send(renderTemplate({ content, preloadedState }))
  } catch (error) {
    
    console.log('url: ', req.url,)
    console.log('status: ', 500 + '\n')
    console.error(error)

    res.status(500)
    return res.send(error.toString())
  }
}

export default handleRender;
