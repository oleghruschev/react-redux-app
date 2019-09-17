interface IProps {
  content: string,
  preloadedState: object
}

const renderTemplate = ({ content, preloadedState }: IProps): string => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React-redux-app</title>
        <link rel="stylesheet" href ="/style.css" />
      </head>
      <body>
        <div id="app">${content.toString()}</div> 
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}

export default renderTemplate;
