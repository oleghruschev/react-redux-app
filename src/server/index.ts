import express from 'express';

import handleRender from './handleRender';

const app = express();

// Server static files
app.use(express.static('build'));

app.use(handleRender);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
