const renderTemplate = ({ content, preloadedState }) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React-redux-app</title>
        <link rel="stylesheet" href ="/style.css" />
      </head>
      <body>
        <div id="app">${content}</div> 
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}

export default renderTemplate;
