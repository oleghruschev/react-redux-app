import express from 'express';

import handleRender from './handleRender';

const app = express()

//Server static files
app.use(express.static('build'));
app.get('*', handleRender)


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
